// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PipelineOptions,
  createPipelineFromOptions,
  InternalPipelineOptions,
  isTokenCredential,
  bearerTokenAuthenticationPolicy
  //  operationOptionsToRequestOptionsBase,
  //  HttpOperationResponse
} from "@azure/core-http";
import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { SDK_VERSION } from "./constants";
import { GeneratedClient } from "./generated/generatedClient";
import { logger } from "./logger";
//import * as Models from "./generated/models";
//import { createSpan } from "./tracing";
//import { CanonicalCode } from "@opentelemetry/api";
import { createBatchAzureKeyCredentialPolicy } from "./azureKeyCredentialPolicy";
import { Account } from "./generated/operations/account";
import { Application } from "./generated/operations/application";
import { Job } from "./generated/operations/job";
import { Certificate } from "./generated/operations/certificate";
import { File } from "./generated/operations/file";
import { Task } from "./generated/operations/task";
import { Pool } from "./generated/operations/pool";
import { ComputeNode } from "./generated/operations/computeNode";
import { JobSchedule } from "./generated/operations/jobSchedule";
import { JobClient } from "./jobClient";

const DEFAULT_BATCH_SCOPE = "https://batch.azure.com/.default"; // FIXME: replace this with the correct one if any

/**
 * Client options used to configure Batch API requests.
 */
export interface BatchClientOptions extends PipelineOptions {}

/**
 * Client class for interacting with Azure Batch.
 */
export class BatchClient {
  /**
   * The URL to the Batch endpoint
   */
  public readonly endpointUrl: string;

  /**
   * @internal
   * A reference to the auto-generated Batch HTTP client.
   */
  private readonly client: GeneratedClient;

  get application(): Application {
    return this.client.application;
  }

  get account(): Account {
    return this.client.account;
  }

  get certificate(): Certificate {
    return this.client.certificate;
  }

  get computeNode(): ComputeNode {
    return this.client.computeNode;
  }

  get file(): File {
    return this.client.file;
  }

  get job(): Job {
    return this.client.job;
  }

  get jobSchedule(): JobSchedule {
    return this.client.jobSchedule;
  }

  get pool(): Pool {
    return this.client.pool;
  }

  get task(): Task {
    return this.client.task;
  }

  /**
   * Creates an instance of BatchClient.
   *
   * Example usage:
   * ```ts
   * import { BatchClient, AzureKeyCredential } from "@azure/batch";
   *
   * const client = new BatchClient(
   *    "<service endpoint>",
   *    new AzureKeyCredential("<api key>")
   * );
   * ```
   * @param endpointUrl - The URL to the Batch endpoint
   * @param credential - Used to authenticate requests to the service.
   * @param options - Used to configure the Batch client.
   */
  constructor(
    endpointUrl: string,
    credential: TokenCredential | KeyCredential,
    options: BatchClientOptions = {}
  ) {
    this.endpointUrl = endpointUrl;

    const libInfo = `azsdk-js-batch/${SDK_VERSION}`; // FIXME: double check this string
    if (!options.userAgentOptions) {
      options.userAgentOptions = {};
    }
    if (options.userAgentOptions.userAgentPrefix) {
      options.userAgentOptions.userAgentPrefix = `${options.userAgentOptions.userAgentPrefix} ${libInfo}`;
    } else {
      options.userAgentOptions.userAgentPrefix = libInfo;
    }

    const authPolicy = isTokenCredential(credential)
      ? bearerTokenAuthenticationPolicy(credential as TokenCredential, DEFAULT_BATCH_SCOPE)
      : createBatchAzureKeyCredentialPolicy(credential as KeyCredential);

    const internalPipelineOptions: InternalPipelineOptions = {
      ...options,
      ...{
        loggingOptions: {
          logger: logger.info,
          allowedHeaderNames: ["x-ms-correlation-request-id", "x-ms-request-id"]
        }
      }
    };

    const pipeline = createPipelineFromOptions(internalPipelineOptions, authPolicy);

    this.client = new GeneratedClient(this.endpointUrl, pipeline);
  }

  public getJobClient(jobId?: string): JobClient {
    return new JobClient(this.client, jobId);
  }
}
