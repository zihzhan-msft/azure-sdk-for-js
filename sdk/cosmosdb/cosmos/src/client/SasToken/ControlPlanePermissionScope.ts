// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PermissionScopeValues } from "./PermissionScopeValues";

export class ControlPlanePermissionScope {

  // REQUIRED: This enum must be kept in sync with the ControlPlanePermissionScope enum in backend services.

  /**
   * Cosmos account read scope.
   */
  public static SCOPE_ACCOUNT_READ = new ControlPlanePermissionScope("AccountRead", PermissionScopeValues.SCOPE_ACCOUNT_READ_VALUE)
  public static SCOPE_ACCOUNT_LIST_DATABASES = new ControlPlanePermissionScope("AccountListDatabases", PermissionScopeValues.SCOPE_ACCOUNT_LIST_DATABASES_VALUE)

  /**
   * Cosmos database read scope.
   */
  public static SCOPE_DATABASE_READ = new ControlPlanePermissionScope("DatabaseRead", PermissionScopeValues.SCOPE_DATABASE_READ_VALUE)
  public static SCOPE_DATABASE_READ_OFFER = new ControlPlanePermissionScope("DatabaseReadOffer", PermissionScopeValues.SCOPE_DATABASE_READ_OFFER_VALUE)
  public static SCOPE_DATABASE_LIST_CONTAINERS = new ControlPlanePermissionScope("DatabaseListContainers", PermissionScopeValues.SCOPE_DATABASE_LIST_CONTAINERS_VALUE)

  /**
   * Cosmos Container read scope.
   */
  public static SCOPE_CONTAINER_READ = new ControlPlanePermissionScope("ContainerRead", PermissionScopeValues.SCOPE_CONTAINER_READ_VALUE)
  public static SCOPE_CONTAINER_READ_OFFER = new ControlPlanePermissionScope("ContainerReadOffer", PermissionScopeValues.SCOPE_CONTAINER_READ_OFFER_VALUE)

  /**
   * Composite read scopes.
   */
  public static SCOPE_ACCOUNT_READ_ALL_ACCESS = new ControlPlanePermissionScope("AccountReadAllAccess", PermissionScopeValues.SCOPE_ACCOUNT_READ_ALL_ACCESS_VALUE)
  public static SCOPE_DATABASE_READ_ALL_ACCESS = new ControlPlanePermissionScope("DatabaseReadAllAccess", PermissionScopeValues.SCOPE_DATABASE_READ_ALL_ACCESS_VALUE)
  public static SCOPE_CONTAINER_READ_ALL_ACCESS = new ControlPlanePermissionScope("ContainersReadAllAccess", PermissionScopeValues.SCOPE_CONTAINERS_READ_ALL_ACCESS_VALUE)

  /**
   * Cosmos account write scope.
   */
  public static SCOPE_ACCOUNT_CREATE_DATABASES = new ControlPlanePermissionScope("AccountCreateDatabases", PermissionScopeValues.SCOPE_ACCOUNT_CREATE_DATABASES_VALUE)
  public static SCOPE_ACCOUNT_DELETE_DATABASES = new ControlPlanePermissionScope("AccountDeleteDatabases", PermissionScopeValues.SCOPE_ACCOUNT_DELETE_DATABASES_VALUE)

  /**
   * Cosmos database write scope.
   */
  public static SCOPE_DATABASE_DELETE = new ControlPlanePermissionScope("DatabaseDelete", PermissionScopeValues.SCOPE_DATABASE_DELETE_VALUE)
  public static SCOPE_DATABASE_REPLACE_OFFER = new ControlPlanePermissionScope("DatabaseReplaceOffer", PermissionScopeValues.SCOPE_DATABASE_REPLACE_OFFER_VALUE)
  public static SCOPE_DATABASE_CREATE_CONTAINERS = new ControlPlanePermissionScope("DatabaseCreateContainers", PermissionScopeValues.SCOPE_DATABASE_CREATE_CONTAINERS_VALUE)
  public static SCOPE_DATABASE_DELETE_CONTAINERS = new ControlPlanePermissionScope("DatabaseDeleteContainers", PermissionScopeValues.SCOPE_DATABASE_DELETE_CONTAINERS_VALUE)

  /**
   * Cosmos Container write scope.
   */
  public static SCOPE_CONTAINER_REPLACE = new ControlPlanePermissionScope("ContainerReplace", PermissionScopeValues.SCOPE_CONTAINER_REPLACE_VALUE)
  public static SCOPE_CONTAINER_DELETE = new ControlPlanePermissionScope("ContainerDelete", PermissionScopeValues.SCOPE_CONTAINER_DELETE_VALUE)
  public static SCOPE_CONTAINER_REPLACE_OFFER = new ControlPlanePermissionScope("ContainerReplaceOffer", PermissionScopeValues.SCOPE_CONTAINER_REPLACE_OFFER_VALUE)

  /**
   * Composite write scopes.
   */
  public static SCOPE_ACCOUNT_WRITE_ALL_ACCESS = new ControlPlanePermissionScope("AccountFullAllAccess", PermissionScopeValues.SCOPE_ACCOUNT_WRITE_ALL_ACCESS_VALUE)
  public static SCOPE_DATABASE_WRITE_ALL_ACCESS = new ControlPlanePermissionScope("DatabaseWriteAllAccess", PermissionScopeValues.SCOPE_DATABASE_WRITE_ALL_ACCESS_VALUE)
  public static SCOPE_CONTAINER_WRITE_ALL_ACCESS = new ControlPlanePermissionScope("ContainersWriteAllAccess", PermissionScopeValues.SCOPE_CONTAINERS_WRITE_ALL_ACCESS_VALUE)

  public static NONE = new ControlPlanePermissionScope("None", 0x0);

  private toValue: number;
  private stringValue: string;
  private toLowerStringValue: string;

  constructor(stringValue: string, scopeBitMask: number) {
    this.stringValue = stringValue;
    this.toLowerStringValue = stringValue.toLowerCase();
    this.toValue = scopeBitMask;
    ControlPlanePermissionScope.AllValues[scopeBitMask] = this;
  }

  private static AllValues: { [name: string]: ControlPlanePermissionScope } = {};

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
