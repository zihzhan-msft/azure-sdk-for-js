/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreAuth from "@azure/core-auth";
import {
  WorkflowsImpl,
  WorkflowVersionsImpl,
  WorkflowTriggersImpl,
  WorkflowVersionTriggersImpl,
  WorkflowTriggerHistoriesImpl,
  WorkflowRunsImpl,
  WorkflowRunActionsImpl,
  WorkflowRunActionRepetitionsImpl,
  WorkflowRunActionRepetitionsRequestHistoriesImpl,
  WorkflowRunActionRequestHistoriesImpl,
  WorkflowRunActionScopeRepetitionsImpl,
  WorkflowRunOperationsImpl,
  IntegrationAccountsImpl,
  IntegrationAccountAssembliesImpl,
  IntegrationAccountBatchConfigurationsImpl,
  IntegrationAccountSchemasImpl,
  IntegrationAccountMapsImpl,
  IntegrationAccountPartnersImpl,
  IntegrationAccountAgreementsImpl,
  IntegrationAccountCertificatesImpl,
  IntegrationAccountSessionsImpl,
  IntegrationServiceEnvironmentsImpl,
  IntegrationServiceEnvironmentSkusImpl,
  IntegrationServiceEnvironmentNetworkHealthImpl,
  IntegrationServiceEnvironmentManagedApisImpl,
  IntegrationServiceEnvironmentManagedApiOperationsImpl,
  OperationsImpl
} from "./operations";
import {
  Workflows,
  WorkflowVersions,
  WorkflowTriggers,
  WorkflowVersionTriggers,
  WorkflowTriggerHistories,
  WorkflowRuns,
  WorkflowRunActions,
  WorkflowRunActionRepetitions,
  WorkflowRunActionRepetitionsRequestHistories,
  WorkflowRunActionRequestHistories,
  WorkflowRunActionScopeRepetitions,
  WorkflowRunOperations,
  IntegrationAccounts,
  IntegrationAccountAssemblies,
  IntegrationAccountBatchConfigurations,
  IntegrationAccountSchemas,
  IntegrationAccountMaps,
  IntegrationAccountPartners,
  IntegrationAccountAgreements,
  IntegrationAccountCertificates,
  IntegrationAccountSessions,
  IntegrationServiceEnvironments,
  IntegrationServiceEnvironmentSkus,
  IntegrationServiceEnvironmentNetworkHealth,
  IntegrationServiceEnvironmentManagedApis,
  IntegrationServiceEnvironmentManagedApiOperations,
  Operations
} from "./operationsInterfaces";
import { LogicManagementClientContext } from "./logicManagementClientContext";
import { LogicManagementClientOptionalParams } from "./models";

export class LogicManagementClient extends LogicManagementClientContext {
  /**
   * Initializes a new instance of the LogicManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription id.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: LogicManagementClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.workflows = new WorkflowsImpl(this);
    this.workflowVersions = new WorkflowVersionsImpl(this);
    this.workflowTriggers = new WorkflowTriggersImpl(this);
    this.workflowVersionTriggers = new WorkflowVersionTriggersImpl(this);
    this.workflowTriggerHistories = new WorkflowTriggerHistoriesImpl(this);
    this.workflowRuns = new WorkflowRunsImpl(this);
    this.workflowRunActions = new WorkflowRunActionsImpl(this);
    this.workflowRunActionRepetitions = new WorkflowRunActionRepetitionsImpl(
      this
    );
    this.workflowRunActionRepetitionsRequestHistories = new WorkflowRunActionRepetitionsRequestHistoriesImpl(
      this
    );
    this.workflowRunActionRequestHistories = new WorkflowRunActionRequestHistoriesImpl(
      this
    );
    this.workflowRunActionScopeRepetitions = new WorkflowRunActionScopeRepetitionsImpl(
      this
    );
    this.workflowRunOperations = new WorkflowRunOperationsImpl(this);
    this.integrationAccounts = new IntegrationAccountsImpl(this);
    this.integrationAccountAssemblies = new IntegrationAccountAssembliesImpl(
      this
    );
    this.integrationAccountBatchConfigurations = new IntegrationAccountBatchConfigurationsImpl(
      this
    );
    this.integrationAccountSchemas = new IntegrationAccountSchemasImpl(this);
    this.integrationAccountMaps = new IntegrationAccountMapsImpl(this);
    this.integrationAccountPartners = new IntegrationAccountPartnersImpl(this);
    this.integrationAccountAgreements = new IntegrationAccountAgreementsImpl(
      this
    );
    this.integrationAccountCertificates = new IntegrationAccountCertificatesImpl(
      this
    );
    this.integrationAccountSessions = new IntegrationAccountSessionsImpl(this);
    this.integrationServiceEnvironments = new IntegrationServiceEnvironmentsImpl(
      this
    );
    this.integrationServiceEnvironmentSkus = new IntegrationServiceEnvironmentSkusImpl(
      this
    );
    this.integrationServiceEnvironmentNetworkHealth = new IntegrationServiceEnvironmentNetworkHealthImpl(
      this
    );
    this.integrationServiceEnvironmentManagedApis = new IntegrationServiceEnvironmentManagedApisImpl(
      this
    );
    this.integrationServiceEnvironmentManagedApiOperations = new IntegrationServiceEnvironmentManagedApiOperationsImpl(
      this
    );
    this.operations = new OperationsImpl(this);
  }

  workflows: Workflows;
  workflowVersions: WorkflowVersions;
  workflowTriggers: WorkflowTriggers;
  workflowVersionTriggers: WorkflowVersionTriggers;
  workflowTriggerHistories: WorkflowTriggerHistories;
  workflowRuns: WorkflowRuns;
  workflowRunActions: WorkflowRunActions;
  workflowRunActionRepetitions: WorkflowRunActionRepetitions;
  workflowRunActionRepetitionsRequestHistories: WorkflowRunActionRepetitionsRequestHistories;
  workflowRunActionRequestHistories: WorkflowRunActionRequestHistories;
  workflowRunActionScopeRepetitions: WorkflowRunActionScopeRepetitions;
  workflowRunOperations: WorkflowRunOperations;
  integrationAccounts: IntegrationAccounts;
  integrationAccountAssemblies: IntegrationAccountAssemblies;
  integrationAccountBatchConfigurations: IntegrationAccountBatchConfigurations;
  integrationAccountSchemas: IntegrationAccountSchemas;
  integrationAccountMaps: IntegrationAccountMaps;
  integrationAccountPartners: IntegrationAccountPartners;
  integrationAccountAgreements: IntegrationAccountAgreements;
  integrationAccountCertificates: IntegrationAccountCertificates;
  integrationAccountSessions: IntegrationAccountSessions;
  integrationServiceEnvironments: IntegrationServiceEnvironments;
  integrationServiceEnvironmentSkus: IntegrationServiceEnvironmentSkus;
  integrationServiceEnvironmentNetworkHealth: IntegrationServiceEnvironmentNetworkHealth;
  integrationServiceEnvironmentManagedApis: IntegrationServiceEnvironmentManagedApis;
  integrationServiceEnvironmentManagedApiOperations: IntegrationServiceEnvironmentManagedApiOperations;
  operations: Operations;
}
