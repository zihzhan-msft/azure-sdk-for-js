import { createSpan, handleError } from "./tracing";
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
import { InvalidArgumentError } from "./invalidArgumentError";

export interface JobClientOptions extends ServiceClientOptions {}

export class JobClient {
  constructor(private client: GeneratedClient, private jobId?: string) {}

  private validateJobId(): void {
    if (!this.jobId) {
      throw new InvalidArgumentError("JobId required");
    }
  }

  private createClientSpan<T>(methodName: string, options: T | undefined) {
    return createSpan(`JobClient-${methodName}`, options);
  }

  public async delete(options?: JobDeleteOptionalParams): Promise<JobDeleteResponse> {
    const { span, updatedOptions } = this.createClientSpan("delete", options);
    try {
      this.validateJobId();
      return this.client.job.delete(this.jobId!, updatedOptions);
    } catch (e) {
      handleError(span, e);
      throw e;
    } finally {
      span.end();
    }
  }

  public async disable(
    jobDisableParameter: JobDisableParameter,
    options?: JobDisableOptionalParams
  ): Promise<JobDisableResponse> {
    const { span, updatedOptions } = this.createClientSpan("disable", options);
    try {
      this.validateJobId();
      return this.client.job.disable(this.jobId!, jobDisableParameter, updatedOptions);
    } catch (e) {
      handleError(span, e);
      throw e;
    } finally {
      span.end();
    }
  }

  public async enable(options?: JobEnableOptionalParams): Promise<JobEnableResponse> {
    const { span, updatedOptions } = this.createClientSpan("enable", options);
    try {
      this.validateJobId();
      return this.client.job.enable(this.jobId!, updatedOptions);
    } catch (e) {
      handleError(span, e);
      throw e;
    } finally {
      span.end();
    }
  }

  public async get(options?: JobGetOptionalParams): Promise<JobGetResponse> {
    const { span, updatedOptions } = this.createClientSpan("get", options);
    try {
      this.validateJobId();
      return this.client.job.get(this.jobId!, updatedOptions);
    } catch (e) {
      handleError(span, e);
      throw e;
    } finally {
      span.end();
    }
  }

  public list(options?: JobListOptionalParams): PagedAsyncIterableIterator<CloudJob> {
    const { span, updatedOptions } = this.createClientSpan("list", options);
    const result = this.client.job.list(updatedOptions);
    span.end();
    return result;
  }

  public listPreparationAndReleaseTaskStatus(
    options?: JobListPreparationAndReleaseTaskStatusOptionalParams
  ): PagedAsyncIterableIterator<JobPreparationAndReleaseTaskExecutionInformation> {
    const { span, updatedOptions } = this.createClientSpan(
      "listPreparationAndReleaseTaskStatus",
      options
    );
    try {
      this.validateJobId();
      return this.client.job.listPreparationAndReleaseTaskStatus(this.jobId!, updatedOptions);
    } catch (e) {
      handleError(span, e);
      throw e;
    } finally {
      span.end();
    }
  }

  public async getAllLifetimeStatistics(
    options?: JobGetAllLifetimeStatisticsOptionalParams
  ): Promise<JobGetAllLifetimeStatisticsResponse> {
    const { span, updatedOptions } = this.createClientSpan("getAllLifetimeStatistics", options);
    const result = this.client.job.getAllLifetimeStatistics(updatedOptions);
    span.end();
    return result;
  }

  public async terminate(options?: JobTerminateOptionalParams): Promise<JobTerminateResponse> {
    const { span, updatedOptions } = this.createClientSpan("terminate", options);
    try {
      this.validateJobId();
      return this.client.job.terminate(this.jobId!, updatedOptions);
    } catch (e) {
      handleError(span, e);
      throw e;
    } finally {
      span.end();
    }
  }
}
