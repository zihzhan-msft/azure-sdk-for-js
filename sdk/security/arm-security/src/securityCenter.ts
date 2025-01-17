/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreAuth from "@azure/core-auth";
import { StandardsImpl, AssignmentsImpl } from "./operations";
import { Standards, Assignments } from "./operationsInterfaces";
import { SecurityCenterContext } from "./securityCenterContext";
import { SecurityCenterOptionalParams } from "./models";

export class SecurityCenter extends SecurityCenterContext {
  /**
   * Initializes a new instance of the SecurityCenter class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Azure subscription ID
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: SecurityCenterOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.standards = new StandardsImpl(this);
    this.assignments = new AssignmentsImpl(this);
  }

  standards: Standards;
  assignments: Assignments;
}
