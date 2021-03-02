// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/// <reference lib="esnext.asynciterable" />

import "@azure/core-asynciterator-polyfill";

export { AzureKeyCredential } from "@azure/core-auth";

export { BatchClient, BatchClientOptions } from "./batchClient";

export { JobClient, JobClientOptions } from "./jobClient";
