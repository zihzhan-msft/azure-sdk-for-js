// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PermissionScopeValues } from "./PermissionScopeValues"

export class DataPlanePermissionScope {
  // REQUIRED: This enum must be kept in sync with the DataPlanePermissionScope enum in backend services.

  /**
   * Cosmos Container read scope.
   */
  public static SCOPE_CONTAINER_EXECUTE_QUERIES = new DataPlanePermissionScope("ContainerExecuteQueriesFeeds", PermissionScopeValues.SCOPE_CONTAINER_EXECUTE_QUERIES_VALUE)
  public static SCOPE_CONTAINER_READ_FEEDS = new DataPlanePermissionScope("ContainerReadFeeds", PermissionScopeValues.SCOPE_CONTAINER_READ_FEEDS_VALUE)
  public static SCOPE_CONTAINER_READ_STORED_PROCEDURES = new DataPlanePermissionScope("ContainerReadStoredProcedures", PermissionScopeValues.SCOPE_CONTAINER_READ_STORED_PROCEDURES_VALUE)
  public static SCOPE_CONTAINER_READ_USER_DEFINED_FUNCTIONS = new DataPlanePermissionScope("ContainerUserDefinedFunctions", PermissionScopeValues.SCOPE_CONTAINER_READ_USER_DEFINED_FUNCTIONS_VALUE)
  public static SCOPE_CONTAINER_READ_TRIGGERS = new DataPlanePermissionScope("ContainerReadTriggers", PermissionScopeValues.SCOPE_CONTAINER_READ_TRIGGERS_VALUE)
  public static SCOPE_CONTAINER_READ_CONFLICTS = new DataPlanePermissionScope("ContainerReadConflicts", PermissionScopeValues.SCOPE_CONTAINER_READ_CONFLICTS_VALUE)
  public static SCOPE_ITEM_READ = new DataPlanePermissionScope("ItemRead", PermissionScopeValues.SCOPE_ITEM_READ_VALUE)
  public static SCOPE_STORED_PROCEDURE_READ = new DataPlanePermissionScope("StoreProcedureRead", PermissionScopeValues.SCOPE_STORED_PROCEDURE_READ_VALUE)
  public static SCOPE_USER_DEFINED_FUNCTION_READ = new DataPlanePermissionScope("UserDefinedFunctionRead", PermissionScopeValues.SCOPE_USER_DEFINED_FUNCTION_READ_VALUE)
  public static SCOPE_TRIGGER_READ = new DataPlanePermissionScope("TriggerRead", PermissionScopeValues.SCOPE_TRIGGER_READ_VALUE)

  /**
   * Cosmos Container read scope.
   */
  public static SCOPE_CONTAINER_CREATE_ITEMS = new DataPlanePermissionScope("ContainerCreateItems", PermissionScopeValues.SCOPE_CONTAINER_CREATE_ITEMS_VALUE)
  public static SCOPE_CONTAINER_REPLACE_ITEMS = new DataPlanePermissionScope("ContainerReplaceItems", PermissionScopeValues.SCOPE_CONTAINER_REPLACE_ITEMS_VALUE)
  public static SCOPE_CONTAINER_UPSERT_ITEMS = new DataPlanePermissionScope("ContainerUpsertItems", PermissionScopeValues.SCOPE_CONTAINER_UPSERT_ITEMS_VALUE)
  public static SCOPE_CONTAINER_DELETE_ITEMS = new DataPlanePermissionScope("ContainerDeleteItems", PermissionScopeValues.SCOPE_CONTAINER_DELETE_ITEMS_VALUE)
  public static SCOPE_CONTAINER_CREATE_STORED_PROCEDURES = new DataPlanePermissionScope("ContainerCreateStoredProcedures", PermissionScopeValues.SCOPE_CONTAINER_CREATE_STORED_PROCEDURES_VALUE)
  public static SCOPE_CONTAINER_REPLACE_STORED_PROCEDURES = new DataPlanePermissionScope("ContainerReplaceStoredProcedures", PermissionScopeValues.SCOPE_CONTAINER_REPLACE_STORED_PROCEDURES_VALUE)
  public static SCOPE_CONTAINER_DELETE_STORED_PROCEDURES = new DataPlanePermissionScope("ContainerDeleteStoredProcedures", PermissionScopeValues.SCOPE_CONTAINER_DELETE_STORED_PROCEDURES_VALUE)
  public static SCOPE_CONTAINER_EXECUTE_STORED_PROCEDURES = new DataPlanePermissionScope("ContainerDeleteStoredProcedures", PermissionScopeValues.SCOPE_CONTAINER_EXECUTE_STORED_PROCEDURES_VALUE)
  public static SCOPE_CONTAINER_CREATE_TRIGGERS = new DataPlanePermissionScope("ContainerCreateTriggers", PermissionScopeValues.SCOPE_CONTAINER_CREATE_TRIGGERS_VALUE)
  public static SCOPE_CONTAINER_REPLACE_TRIGGERS = new DataPlanePermissionScope("ContainerReplaceTriggers", PermissionScopeValues.SCOPE_CONTAINER_REPLACE_TRIGGERS_VALUE)
  public static SCOPE_CONTAINER_DELETE_TRIGGERS = new DataPlanePermissionScope("ContainerDeleteTriggers", PermissionScopeValues.SCOPE_CONTAINER_DELETE_TRIGGERS_VALUE)
  public static SCOPE_CONTAINER_CREATE_USER_DEFINED_FUNCTIONS = new DataPlanePermissionScope("ContainerCreateUserDefinedFunctions", PermissionScopeValues.SCOPE_CONTAINER_CREATE_USER_DEFINED_FUNCTIONS_VALUE)
  public static SCOPE_CONTAINER_REPLACE_USER_DEFINED_FUNCTIONS = new DataPlanePermissionScope("ContainerReplaceUserDefinedFunctions", PermissionScopeValues.SCOPE_CONTAINER_REPLACE_USER_DEFINED_FUNCTIONS_VALUE)
  public static SCOPE_CONTAINER_DELETE_USER_DEFINED_FUNCTIONS = new DataPlanePermissionScope("ContainerCreateUserDefinedFunctions", PermissionScopeValues.SCOPE_CONTAINER_DELETE_USER_DEFINED_FUNCTIONS_VALUE)
  public static SCOPE_CONTAINER_DELETE_CONFLICTS = new DataPlanePermissionScope("ContainerDeleteConflics", PermissionScopeValues.SCOPE_CONTAINER_DELETE_CONFLICTS_VALUE)
  public static SCOPE_ITEM_REPLACE = new DataPlanePermissionScope("ItemReplace", PermissionScopeValues.SCOPE_ITEM_REPLACE_VALUE)
  public static SCOPE_ITEM_UPSERT = new DataPlanePermissionScope("ItemUpsert", PermissionScopeValues.SCOPE_ITEM_UPSERT_VALUE)
  public static SCOPE_ITEM_DELETE = new DataPlanePermissionScope("ItemDelete", PermissionScopeValues.SCOPE_ITEM_DELETE_VALUE)
  public static SCOPE_STORED_PROCEDURE_REPLACE = new DataPlanePermissionScope("StoredProcedureReplace", PermissionScopeValues.SCOPE_STORED_PROCEDURE_REPLACE_VALUE)
  public static SCOPE_STORED_PROCEDURE_DELETE = new DataPlanePermissionScope("StoredProcedureReplace", PermissionScopeValues.SCOPE_STORED_PROCEDURE_DELETE_VALUE)
  public static SCOPE_STORED_PROCEDURE_EXECUTE = new DataPlanePermissionScope("StoredProcedureReplace", PermissionScopeValues.SCOPE_STORED_PROCEDURE_EXECUTE_VALUE)
  public static SCOPE_USER_DEFINED_FUNCTION_REPLACE = new DataPlanePermissionScope("UserDefinedFunctionReplace", PermissionScopeValues.SCOPE_USER_DEFINED_FUNCTION_REPLACE_VALUE)
  public static SCOPE_USER_DEFINED_FUNCTION_DELETE = new DataPlanePermissionScope("UserDefinedFunctionReplace", PermissionScopeValues.SCOPE_USER_DEFINED_FUNCTION_DELETE_VALUE)
  public static SCOPE_TRIGGER_REPLACE = new DataPlanePermissionScope("TriggerReplace", PermissionScopeValues.SCOPE_TRIGGER_REPLACE_VALUE)
  public static SCOPE_TRIGGER_DELETE = new DataPlanePermissionScope("TriggerDelete", PermissionScopeValues.SCOPE_TRIGGER_DELETE_VALUE)

  /**
   * Composite read scope.
   */
  public static SCOPE_CONTAINER_READ_ALL_ACCESS = new DataPlanePermissionScope("ContainerReadAllAccess", PermissionScopeValues.SCOPE_CONTAINER_READ_ALL_ACCESS_VALUE)
  public static SCOPE_ITEM_READ_ALL_ACCESS = new DataPlanePermissionScope("ItemReadAllAccess", PermissionScopeValues.SCOPE_ITEM_READ_ALL_ACCESS_VALUE)

  /**
   * Composite write scope.
   */
  public static SCOPE_CONTAINER_WRITE_ALL_ACCESS = new DataPlanePermissionScope("ContainerWriteAllAccess", PermissionScopeValues.SCOPE_CONTAINER_WRITE_ALL_ACCESS_VALUE)
  public static SCOPE_ITEM_WRITE_ALL_ACCESS = new DataPlanePermissionScope("ItemWriteAllAccess", PermissionScopeValues.SCOPE_ITEM_WRITE_ALL_ACCESS_VALUE)

  public static NONE = new DataPlanePermissionScope("None", 0x0);

  private toValue: number;
  private stringValue: string;
  private toLowerStringValue: string;

  constructor(stringValue: string, scopeBitMask: number) {
    this.stringValue = stringValue;
    this.toLowerStringValue = stringValue.toLowerCase();
    this.toValue = scopeBitMask;
    DataPlanePermissionScope.AllValues[scopeBitMask] = this;
  }

  private static AllValues: { [name: string]: DataPlanePermissionScope } = {};

  public toString = (function () {
    return this.stringValue;
  })

  public toLowerCase = function (): string {
    return this.toLowerStringValue;
  }

  public value = function (): number {
    return this.toValue;
  }
}
