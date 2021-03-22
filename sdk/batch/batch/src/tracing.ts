// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { createSpanFunction, OperationTracingOptions } from "@azure/core-tracing";
import { CanonicalCode, Span } from "@opentelemetry/api";
import {CanonicalError} from "./canonicalError";

/**
 * Creates a span using the global tracer.
 * @internal
 */
export const createSpan: <T extends {
  tracingOptions?: OperationTracingOptions | undefined;
}>(operationName: string, operationOptions: T | undefined) => {
  span: Span;
  updatedOptions: T;
}  = createSpanFunction({
  packagePrefix: "Azure.Compute.Batch", // FIXME: double check this
  namespace: "Microsoft.Compute" // FIXME: double check this
});

export const handleError = (span: Span, error: Error): void => {
  let code = CanonicalCode.UNKNOWN;
  if (error instanceof CanonicalError) {
    code = error.code;
  }
  span.setStatus({ code, message: error.message});
}