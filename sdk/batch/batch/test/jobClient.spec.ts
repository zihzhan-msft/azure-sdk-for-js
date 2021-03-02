/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { BatchClient } from "../src/batchClient";
import { assert } from "chai";
import { AzureKeyCredential } from "@azure/core-auth";
import { JobClient } from "../src/jobClient";

describe("Job Service", () => {
  let client: BatchClient;
  let defaultJobClient: JobClient;
  const defaultJobId = "HelloWorldJobNodeSDKTest";
  let batchAccountKey: string;
  let batchEndpoint: string;

  beforeEach(async () => {
    batchAccountKey = process.env["AZURE_BATCH_ACCOUNT_KEY"]!;
    batchEndpoint = process.env["AZURE_BATCH_ENDPOINT"]!;

    const credentials = new AzureKeyCredential(batchAccountKey);

    client = new BatchClient(batchEndpoint, credentials);
    defaultJobClient = client.getJobClient(defaultJobId);
  });

  it("should get a job reference successfully", async () => {
    const result = await defaultJobClient.get();

    assert.equal(result.id, defaultJobId);
    assert.equal(result.state, "active");
    assert.equal(result.poolInfo!.poolId, "nodesdktestpool1");
    assert.equal(result._response.status, 200);
  });

  it("should list jobs successfully", async () => {
    let found: boolean = false;
    for await (let _ of defaultJobClient.list()) {
      found = true;
      break;
    }

    assert.isTrue(found);
  });

  it("should fail to job prep+release status", async () => {
    try {
      defaultJobClient.listPreparationAndReleaseTaskStatus();
    } catch (error) {
      assert.equal(error.code, "JobPreparationTaskOrReleaseTaskNotSpecified");
    }
  });

  it("should disable a job successfully", async () => {
    const result = await defaultJobClient.disable({
      disableTasks: "requeue"
    });

    assert.equal(result._response.status, 202);
  });

  it("should enable a job successfully", async () => {
    const result = await defaultJobClient.enable();

    assert.equal(result._response.status, 202);
  });

  it("should terminate a job successfully", async () => {
    const result = await defaultJobClient.terminate();

    assert.equal(result._response.status, 202);
  });

  it("should delete a job successfully", async () => {
    const result = await defaultJobClient.delete();

    assert.equal(result._response.status, 202);
  });

  it("should get all job statistics successfully", async () => {
    const jobClient = client.getJobClient();
    const result = await jobClient.getAllLifetimeStatistics();

    assert.isDefined(result.userCPUTime);
    assert.isDefined(result.kernelCPUTime);
    assert.equal(result._response.status, 200);
  });
});
