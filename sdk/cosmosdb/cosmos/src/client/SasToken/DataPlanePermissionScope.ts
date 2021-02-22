// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as PermissionScopeValues from "./PermissionScopeValues";

export class DataPlanePermissionScope {
  // REQUIRED: This enum must be kept in sync with the DataPlanePermissionScope enum in backend services.

  /**
   * Cosmos Container read scope.
   */
  public static SCOPE_CONTAINER_EXECUTE_QUERIES = new DataPlanePermissionScope(
    "ContainerExecuteQueriesFeeds",
    PermissionScopeValues.SCOPE_CONTAINER_EXECUTE_QUERIES
  );
  public static SCOPE_CONTAINER_READ_FEEDS = new DataPlanePermissionScope(
    "ContainerReadFeeds",
    PermissionScopeValues.SCOPE_CONTAINER_READ_FEEDS
  );
  public static SCOPE_CONTAINER_READ_STORED_PROCEDURES = new DataPlanePermissionScope(
    "ContainerReadStoredProcedures",
    PermissionScopeValues.SCOPE_CONTAINER_READ_STORED_PROCEDURES
  );
  public static SCOPE_CONTAINER_READ_USER_DEFINED_FUNCTIONS = new DataPlanePermissionScope(
    "ContainerUserDefinedFunctions",
    PermissionScopeValues.SCOPE_CONTAINER_READ_USER_DEFINED_FUNCTIONS
  );
  public static SCOPE_CONTAINER_READ_TRIGGERS = new DataPlanePermissionScope(
    "ContainerReadTriggers",
    PermissionScopeValues.SCOPE_CONTAINER_READ_TRIGGERS
  );
  public static SCOPE_CONTAINER_READ_CONFLICTS = new DataPlanePermissionScope(
    "ContainerReadConflicts",
    PermissionScopeValues.SCOPE_CONTAINER_READ_CONFLICTS
  );
  public static SCOPE_ITEM_READ = new DataPlanePermissionScope(
    "ItemRead",
    PermissionScopeValues.SCOPE_ITEM_READ
  );
  public static SCOPE_STORED_PROCEDURE_READ = new DataPlanePermissionScope(
    "StoreProcedureRead",
    PermissionScopeValues.SCOPE_STORED_PROCEDURE_READ
  );
  public static SCOPE_USER_DEFINED_FUNCTION_READ = new DataPlanePermissionScope(
    "UserDefinedFunctionRead",
    PermissionScopeValues.SCOPE_USER_DEFINED_FUNCTION_READ
  );
  public static SCOPE_TRIGGER_READ = new DataPlanePermissionScope(
    "TriggerRead",
    PermissionScopeValues.SCOPE_TRIGGER_READ
  );

  /**
   * Cosmos Container read scope.
   */
  public static SCOPE_CONTAINER_CREATE_ITEMS = new DataPlanePermissionScope(
    "ContainerCreateItems",
    PermissionScopeValues.SCOPE_CONTAINER_CREATE_ITEMS
  );
  public static SCOPE_CONTAINER_REPLACE_ITEMS = new DataPlanePermissionScope(
    "ContainerReplaceItems",
    PermissionScopeValues.SCOPE_CONTAINER_REPLACE_ITEMS
  );
  public static SCOPE_CONTAINER_UPSERT_ITEMS = new DataPlanePermissionScope(
    "ContainerUpsertItems",
    PermissionScopeValues.SCOPE_CONTAINER_UPSERT_ITEMS
  );
  public static SCOPE_CONTAINER_DELETE_ITEMS = new DataPlanePermissionScope(
    "ContainerDeleteItems",
    PermissionScopeValues.SCOPE_CONTAINER_DELETE_ITEMS
  );
  public static SCOPE_CONTAINER_CREATE_STORED_PROCEDURES = new DataPlanePermissionScope(
    "ContainerCreateStoredProcedures",
    PermissionScopeValues.SCOPE_CONTAINER_CREATE_STORED_PROCEDURES
  );
  public static SCOPE_CONTAINER_REPLACE_STORED_PROCEDURES = new DataPlanePermissionScope(
    "ContainerReplaceStoredProcedures",
    PermissionScopeValues.SCOPE_CONTAINER_REPLACE_STORED_PROCEDURES
  );
  public static SCOPE_CONTAINER_DELETE_STORED_PROCEDURES = new DataPlanePermissionScope(
    "ContainerDeleteStoredProcedures",
    PermissionScopeValues.SCOPE_CONTAINER_DELETE_STORED_PROCEDURES
  );
  public static SCOPE_CONTAINER_EXECUTE_STORED_PROCEDURES = new DataPlanePermissionScope(
    "ContainerDeleteStoredProcedures",
    PermissionScopeValues.SCOPE_CONTAINER_EXECUTE_STORED_PROCEDURES
  );
  public static SCOPE_CONTAINER_CREATE_TRIGGERS = new DataPlanePermissionScope(
    "ContainerCreateTriggers",
    PermissionScopeValues.SCOPE_CONTAINER_CREATE_TRIGGERS
  );
  public static SCOPE_CONTAINER_REPLACE_TRIGGERS = new DataPlanePermissionScope(
    "ContainerReplaceTriggers",
    PermissionScopeValues.SCOPE_CONTAINER_REPLACE_TRIGGERS
  );
  public static SCOPE_CONTAINER_DELETE_TRIGGERS = new DataPlanePermissionScope(
    "ContainerDeleteTriggers",
    PermissionScopeValues.SCOPE_CONTAINER_DELETE_TRIGGERS
  );
  public static SCOPE_CONTAINER_CREATE_USER_DEFINED_FUNCTIONS = new DataPlanePermissionScope(
    "ContainerCreateUserDefinedFunctions",
    PermissionScopeValues.SCOPE_CONTAINER_CREATE_USER_DEFINED_FUNCTIONS
  );
  public static SCOPE_CONTAINER_REPLACE_USER_DEFINED_FUNCTIONS = new DataPlanePermissionScope(
    "ContainerReplaceUserDefinedFunctions",
    PermissionScopeValues.SCOPE_CONTAINER_REPLACE_USER_DEFINED_FUNCTIONS
  );
  public static SCOPE_CONTAINER_DELETE_USER_DEFINED_FUNCTIONS = new DataPlanePermissionScope(
    "ContainerCreateUserDefinedFunctions",
    PermissionScopeValues.SCOPE_CONTAINER_DELETE_USER_DEFINED_FUNCTIONS
  );
  public static SCOPE_CONTAINER_DELETE_CONFLICTS = new DataPlanePermissionScope(
    "ContainerDeleteConflics",
    PermissionScopeValues.SCOPE_CONTAINER_DELETE_CONFLICTS
  );
  public static SCOPE_ITEM_REPLACE = new DataPlanePermissionScope(
    "ItemReplace",
    PermissionScopeValues.SCOPE_ITEM_REPLACE
  );
  public static SCOPE_ITEM_UPSERT = new DataPlanePermissionScope(
    "ItemUpsert",
    PermissionScopeValues.SCOPE_ITEM_UPSERT
  );
  public static SCOPE_ITEM_DELETE = new DataPlanePermissionScope(
    "ItemDelete",
    PermissionScopeValues.SCOPE_ITEM_DELETE
  );
  public static SCOPE_STORED_PROCEDURE_REPLACE = new DataPlanePermissionScope(
    "StoredProcedureReplace",
    PermissionScopeValues.SCOPE_STORED_PROCEDURE_REPLACE
  );
  public static SCOPE_STORED_PROCEDURE_DELETE = new DataPlanePermissionScope(
    "StoredProcedureReplace",
    PermissionScopeValues.SCOPE_STORED_PROCEDURE_DELETE
  );
  public static SCOPE_STORED_PROCEDURE_EXECUTE = new DataPlanePermissionScope(
    "StoredProcedureReplace",
    PermissionScopeValues.SCOPE_STORED_PROCEDURE_EXECUTE
  );
  public static SCOPE_USER_DEFINED_FUNCTION_REPLACE = new DataPlanePermissionScope(
    "UserDefinedFunctionReplace",
    PermissionScopeValues.SCOPE_USER_DEFINED_FUNCTION_REPLACE
  );
  public static SCOPE_USER_DEFINED_FUNCTION_DELETE = new DataPlanePermissionScope(
    "UserDefinedFunctionReplace",
    PermissionScopeValues.SCOPE_USER_DEFINED_FUNCTION_DELETE
  );
  public static SCOPE_TRIGGER_REPLACE = new DataPlanePermissionScope(
    "TriggerReplace",
    PermissionScopeValues.SCOPE_TRIGGER_REPLACE
  );
  public static SCOPE_TRIGGER_DELETE = new DataPlanePermissionScope(
    "TriggerDelete",
    PermissionScopeValues.SCOPE_TRIGGER_DELETE
  );

  /**
   * Composite read scope.
   */
  public static SCOPE_CONTAINER_READ_ALL_ACCESS = new DataPlanePermissionScope(
    "ContainerReadAllAccess",
    PermissionScopeValues.SCOPE_CONTAINER_READ_ALL_ACCESS
  );
  public static SCOPE_ITEM_READ_ALL_ACCESS = new DataPlanePermissionScope(
    "ItemReadAllAccess",
    PermissionScopeValues.SCOPE_ITEM_READ_ALL_ACCESS
  );

  /**
   * Composite write scope.
   */
  public static SCOPE_CONTAINER_WRITE_ALL_ACCESS = new DataPlanePermissionScope(
    "ContainerWriteAllAccess",
    PermissionScopeValues.SCOPE_CONTAINER_WRITE_ALL_ACCESS
  );
  public static SCOPE_ITEM_WRITE_ALL_ACCESS = new DataPlanePermissionScope(
    "ItemWriteAllAccess",
    PermissionScopeValues.SCOPE_ITEM_WRITE_ALL_ACCESS
  );

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

  public toString = function() {
    return this.stringValue;
  };

  public toLowerCase = function(): string {
    return this.toLowerStringValue;
  };

  public value = function(): number {
    return this.toValue;
  };
}
