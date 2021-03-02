import { ServiceClientOptions } from "@azure/core-http";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { GeneratedClient } from "./generated";
import {
  CloudJob,
  JobDeleteOptionalParams,
  JobDeleteResponse,
  JobDisableParameter,
  JobDisableOptionalParams,
  JobDisableResponse,
  JobEnableOptionalParams,
  JobEnableResponse,
  JobGetOptionalParams,
  JobGetResponse,
  JobListOptionalParams,
  JobListPreparationAndReleaseTaskStatusOptionalParams,
  JobPreparationAndReleaseTaskExecutionInformation,
  JobGetAllLifetimeStatisticsOptionalParams,
  JobGetAllLifetimeStatisticsResponse,
  JobTerminateOptionalParams,
  JobTerminateResponse
} from "./generated/models";

export interface JobClientOptions extends ServiceClientOptions {}

export class JobClient {
  constructor(private client: GeneratedClient, private jobId?: string) {}

  public async delete(options?: JobDeleteOptionalParams): Promise<JobDeleteResponse> {
    if (!this.jobId) {
      throw "bad";
    } // TODO: Replace theses.

    return this.client.job.delete(this.jobId, options);
  }

  public async disable(
    jobDisableParameter: JobDisableParameter,
    options?: JobDisableOptionalParams
  ): Promise<JobDisableResponse> {
    if (!this.jobId) {
      throw "bad";
    }

    return this.client.job.disable(this.jobId, jobDisableParameter, options);
  }

  public async enable(options?: JobEnableOptionalParams): Promise<JobEnableResponse> {
    if (!this.jobId) {
      throw "bad";
    }

    return this.client.job.enable(this.jobId, options);
  }

  public async get(options?: JobGetOptionalParams): Promise<JobGetResponse> {
    if (!this.jobId) {
      throw "bad";
    }

    return await this.client.job.get(this.jobId, options);
  }

  public list(options?: JobListOptionalParams): PagedAsyncIterableIterator<CloudJob> {
    return this.client.job.list(options);
  }

  public listPreparationAndReleaseTaskStatus(
    options?: JobListPreparationAndReleaseTaskStatusOptionalParams
  ): PagedAsyncIterableIterator<JobPreparationAndReleaseTaskExecutionInformation> {
    if (!this.jobId) {
      throw "bad";
    }

    return this.client.job.listPreparationAndReleaseTaskStatus(this.jobId, options);
  }

  public async getAllLifetimeStatistics(
    options?: JobGetAllLifetimeStatisticsOptionalParams
  ): Promise<JobGetAllLifetimeStatisticsResponse> {
    return this.client.job.getAllLifetimeStatistics(options);
  }

  public async terminate(options?: JobTerminateOptionalParams): Promise<JobTerminateResponse> {
    if (!this.jobId) {
      throw "bad";
    }

    return this.client.job.terminate(this.jobId, options);
  }
}
