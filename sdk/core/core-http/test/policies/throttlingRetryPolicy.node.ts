// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import nock from "nock";
import { Constants, DefaultHttpClient, ServiceClient, WebResource } from "../../src/coreHttp";
import { AbortController } from "@azure/abort-controller";
import { assert } from "chai";
import { getHttpMock, HttpMockFacade } from "../mockHttp";
import { CommonResponse } from "../../src/fetchHttpClient";
import * as sinon from "sinon";

describe("Throttling retry policy", () => {
  let client: ServiceClient;

  beforeEach(function() {
    if (!nock.isActive()) {
      nock.activate();
    }
    nock("https://fakeservice.io:443")
      .persist()
      .put(/.*/g)
      .reply(
        Constants.HttpConstants.StatusCodes.TooManyRequests,
        {
          type: "https://fakeservice.io/errors/too-many-requests",
          title: "Resource utilization has surpassed the assigned quota",
          policy: "Total Requests",
          status: Constants.HttpConstants.StatusCodes.TooManyRequests
        },
        ["Retry-After", "10000"]
      );
    client = new ServiceClient();
  });

  afterEach(async function() {
    nock.restore();
    nock.cleanAll();
    nock.enableNetConnect();
  });

  it("Should not retry forever (honors the abort signal passed)", async () => {
    let errorWasThrown = false;
    try {
      await client.sendRequest({
        url: "https://fakeservice.io/ABCD",
        abortSignal: AbortController.timeout(100),
        method: "PUT"
      });
    } catch (error) {
      errorWasThrown = true;
      assert.equal((error as any).name, "AbortError", "Unexpected error thrown");
    }
    assert.equal(errorWasThrown, true, "Error was not thrown");
  });
});

describe.only("Throttling retry policy", () => {
  let httpMock: HttpMockFacade;
  beforeEach(() => {
    httpMock = getHttpMock();
    httpMock.setup();
  });
  afterEach(() => httpMock.teardown());
  after(() => httpMock.teardown());

  function getMockedHttpClient(): DefaultHttpClient {
    const httpClient = new DefaultHttpClient();
    sinon.stub(httpClient, "fetch").callsFake(async (input, init) => {
      const response = await httpMock.getFetch()!(input, init);
      return (response as unknown) as CommonResponse;
    });

    return httpClient;
  }
  it("Should not retry forever (honors the abort signal passed)", async () => {
    httpMock.get("https://fakeservice.io:443", {
      status: Constants.HttpConstants.StatusCodes.TooManyRequests,
      body: {
        type: "https://fakeservice.io/errors/too-many-requests",
        title: "Resource utilization has surpassed the assigned quota",
        policy: "Total Requests",
        status: Constants.HttpConstants.StatusCodes.TooManyRequests
      },
      headers: {
        "Retry-After": "10000"
      }
    });
    httpMock.get("https://fakeservice.io:443", {
      status: Constants.HttpConstants.StatusCodes.TooManyRequests,
      body: {
        type: "https://fakeservice.io/errors/too-many-requests",
        title: "Resource utilization has surpassed the assigned quota",
        policy: "Total Requests",
        status: Constants.HttpConstants.StatusCodes.TooManyRequests
      },
      headers: {
        "Retry-After": "10000"
      }
    });

    let errorWasThrown = false;
    try {
      const client = getMockedHttpClient();
      const webResource = new WebResource(
        "https://fakeservice.io",
        "PUT",
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        AbortController.timeout(100)
      );
      await client.sendRequest(webResource);
    } catch (error) {
      errorWasThrown = true;
      assert.equal((error as any).name, "AbortError", "Unexpected error thrown");
    }
    assert.equal(errorWasThrown, true, "Error was not thrown");
  });
});
