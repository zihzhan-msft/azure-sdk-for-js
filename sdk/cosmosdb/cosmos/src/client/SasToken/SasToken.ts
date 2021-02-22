// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SasTokenPartitionKeyValueRange } from "./SasTokenPartitionKeyValueRange";
import { SasTokenPermissionKind } from "./SasTokenPermissionKind";
import { SasTokenProperties } from "./SasTokenProperties";
import { hmac } from "../../utils/hmac";
import { CosmosContainerChildResourceKind } from "./CosmosContainerChildResourceKind";
import { CosmosKeyType } from "./CosmosKeyType";
import { Paths } from "./Paths";
import { encodeUTF8, encodeBase64 } from "../../utils/encode";
import * as PermissionScopes from "./PermissionScope";

export class SasToken implements SasTokenProperties {
  [x: string]: any;

  private AUTH_PREFIX: string = "type=sas&ver=1.0&sig=";

  // private SAS_TOKEN_SEPARATOR: string = ";";

  public user: string;
  public userTag: string;
  public databaseName: string;
  public containerName: string;
  public resourceName: string;
  public resourcePath: string;
  public resourceKind: CosmosContainerChildResourceKind;
  public partitionKeyValueRanges: SasTokenPartitionKeyValueRange[];
  public startTime: Date;
  public expiryTime: Date;
  public keyType: number;
  public controlPlaneReaderScope: number;
  public controlPlaneWriterScope: number;
  public dataPlaneReaderScope: number;
  public dataPlaneWriterScope: number;
  public cosmosContainerChildResourceKind: CosmosContainerChildResourceKind;
  public cosmosKeyType: CosmosKeyType;

  public constructor() {
    this.user = "";
    this.userTag = "";
    this.databaseName = "";
    this.containerName = "";
    this.resourceName = "";
    this.resourcePath = "";
    this.startTime.setDate(Date.now());
    this.expiryTime = null;
    this.controlPlaneReaderScope = 0;
    this.controlPlaneWriterScope = 0;
    this.dataPlaneReaderScope = 0;
    this.dataPlaneWriterScope = 0;
    this.keyType = 0;
  }
  public create(user: string, databaseName: string, containerName: string): SasTokenProperties {
    const token = new SasToken();
    token.setUser(user);
    token.setDatabaseName(databaseName);
    token.setContainerName(containerName);
    return token;
  }
  public sasTokenValueUsingHMAC(key: string): string;
  public sasTokenValueUsingHMAC(key: string, keyType?: CosmosKeyType) {
    if (key == null || key === "") {
      return this.getSasTokenWithHMACSHA256(key);
    } else if (typeof keyType === "object") {
      switch (this.keyType) {
        case CosmosKeyType.PRIMARY_MASTER:
          this.keyType = 1;
          break;
        case CosmosKeyType.SECONDARY_MASTER:
          this.keyType = 2;
          break;
        case CosmosKeyType.PRIMARY_READONLY:
          this.keyType = 3;
          break;
        case CosmosKeyType.SECONDARY_READONLY:
          this.keyType = 4;
          break;
        default:
          throw new ErrorEvent("keyType");
          break;
      }
      return this.SasTokenWithHMACSHA256(key);
    } else {
      throw new ErrorEvent("key");
    }
  }

  public get DatabaseName(): string {
    return this.databaseName;
  }

  private generatePayload(): string {
    let resourcePrefixPath: string;
    if (!(this.databaseName === "")) {
      resourcePrefixPath = `${resourcePrefixPath}${Paths.ROOT}${Paths.DATABASES_PATH_SEGMENT}/${this.databaseName}`;
    }

    if (!(this.containerName === "")) {
      if (this.databaseName === "") {
        throw new ErrorEvent("databaseName");
      }
      resourcePrefixPath = `${resourcePrefixPath}${Paths.ROOT}${Paths.COLLECTIONS_PATH_SEGMENT}${Paths.ROOT}${this.containerName}`;
    }

    if (!(this.resourceName === "")) {
      if (this.containerName === "") {
        throw new ErrorEvent("containerName");
      }

      switch (this.resourceKind) {
        case CosmosContainerChildResourceKind.ITEM:
          resourcePrefixPath = `${resourcePrefixPath}${Paths.ROOT}${Paths.DOCUMENTS_PATH_SEGMENT}`;
          break;
        case CosmosContainerChildResourceKind.STORED_PROCEDURE:
          resourcePrefixPath = `${resourcePrefixPath}${Paths.ROOT}${Paths.STORED_PROCEDURES_PATH_SEGMENT}`;
          break;
        case CosmosContainerChildResourceKind.USER_DEFINED_FUNCTION:
          resourcePrefixPath = `${resourcePrefixPath}${Paths.ROOT}${Paths.USER_DEFINED_FUNCTIONS_PATH_SEGMENT}`;
          break;
        case CosmosContainerChildResourceKind.TRIGGER:
          resourcePrefixPath = `${resourcePrefixPath}${Paths.ROOT}${Paths.TRIGGERS_PATH_SEGMENT}`;
          break;
        default:
          throw new ErrorEvent("resourceKind");
          break;
      }

      resourcePrefixPath = `${resourcePrefixPath}${Paths.ROOT}${this.resourceName}`;
    }

    resourcePrefixPath = `${resourcePrefixPath}${Paths.ROOT}`;
    this.resourcePath = resourcePrefixPath.toString();
    const partitionRanges: string = "";
    if (this.partitionKeyValueRanges != null && !(this.partitionKeyValueRanges.length > 0)) {
      if (this.resourceKind !== CosmosContainerChildResourceKind.ITEM) {
        throw new ErrorEvent("partitionKeyValueRanges");
      }

      for (const range of this.partitionKeyValueRanges) {
        this.partitionRanges = `${this.partitionRanges}${range.encode()},`;
      }
    }

    if (this.expiryTime == null) {
      this.expiryTime = this.startTime;
      this.expiryTime.setSeconds(this.startTime.getHours() + 2);
    }

    if (this.controlPlaneReaderScope === 0) {
      this.controlPlaneReaderScope = this.controlPlaneReaderScope | PermissionScopes.CONTAINER_READ;
      this.controlPlaneReaderScope =
        this.controlPlaneReaderScope | PermissionScopes.CONTAINER_READ_OFFER;
    }

    if (this.dataPlaneReaderScope === 0 && this.dataPlaneWriterScope === 0) {
      this.dataPlaneReaderScope =
        this.dataPlaneReaderScope | PermissionScopes.CONTAINER_READ_ALL_ACCESS;
    }

    const payload: string = `${this.user}
      ${this.userTag}
      ${resourcePrefixPath}
      ${partitionRanges}
      ${this.startTime.getSeconds()}
      ${this.expiryTime.getSeconds()}
      ${this.keyType}
      ${this.controlPlaneReaderScope}
      ${this.controlPlaneWriterScope}
      ${this.dataPlaneReaderScope}
      ${this.dataPlaneWriterScope}`;

    return encodeBase64(encodeUTF8(payload));
  }

  private SasTokenWithHMACSHA256(key: string): string {
    const authorizationToken = hmac(key, this.generatePayload());
    const payload = this.generatePayload();
    const token = `${this.AUTH_PREFIX}${authorizationToken}${this.SAS_TOKEN_SEPARATOR}${payload}`;
    return token.toString();
  }

  public getDatabaseName(): string {
    return this.databaseName;
  }

  public setDatabaseName(databaseName: string): SasTokenProperties {
    if (databaseName == null || databaseName === "") {
      throw new ErrorEvent("databaseName");
    }

    this.databaseName = databaseName;
    return this;
  }

  public getContainerName(): string {
    return this.containerName;
  }

  public setContainerName(containerName: string): SasTokenProperties {
    if (containerName == null || containerName === "") {
      throw new ErrorEvent("containerName");
    }

    this.containerName = containerName;
    return this;
  }

  public getResourceKind(): CosmosContainerChildResourceKind {
    return this.resourceKind;
  }

  public getResourceName(): string {
    return this.resourceName;
  }

  public setResourceName(
    kind: CosmosContainerChildResourceKind,
    resourceName: string
  ): SasTokenProperties {
    if (resourceName == null) {
      throw new ErrorEvent("resourceName");
    }

    this.resourceName = this.resourceName;
    this.resourceKind = kind;
    return this;
  }

  public getUser(): string {
    return this.user;
  }

  public setUser(user: string): SasTokenProperties {
    if (user == null || user === "") {
      throw new ErrorEvent("user");
    }

    this.user = user;
    return this;
  }

  public getUserTag(): string {
    return this.userTag;
  }

  public setUserTag(userTag: string): SasTokenProperties {
    if (userTag == null) {
      throw new ErrorEvent("userTag");
    }

    this.userTag = userTag;
    return this;
  }

  public getExpiryTime(): Date {
    return this.expiryTime;
  }

  public setExpiryTime(expiryTime: Date): SasTokenProperties {
    if (expiryTime == null) {
      throw new ErrorEvent("expiryTime");
    }
    this.expiryTime.setDate(this.expiryTime.getDate());
    return this;
  }

  public getStartTime(): Date {
    return this.startTime;
  }

  public setStartTime(startTime: Date): SasTokenProperties {
    if (startTime == null) {
      throw new ErrorEvent("startTime");
    }

    this.startTime = this.startTime;
    return this;
  }

  public getPartitionKeyValueRanges(): Iterable<SasTokenPartitionKeyValueRange> {
    return this.partitionKeyValueRanges;
  }

  public setPartitionKeyValueRanges(partitionKeyValues: Iterable<string>): SasTokenProperties {
    if (partitionKeyValues != null) {
      this.partitionKeyValueRanges = [];
      for (const partitionKey of partitionKeyValues) {
        this.partitionKeyValueRanges.push(SasTokenPartitionKeyValueRange.create(partitionKey));
      }
    } else {
      this.partitionKeyValueRanges = null;
    }

    return this;
  }

  public addPartitionKeyValue(partitionKeyValue: string): SasTokenProperties {
    if (this.partitionKeyValueRanges == null) {
      this.partitionKeyValueRanges = [];
    }
    this.partitionKeyValueRanges.push(SasTokenPartitionKeyValueRange.create(partitionKeyValue));
    return this;
  }

  public addPermission(permissionKind: SasTokenPermissionKind): SasTokenProperties {
    switch (permissionKind) {
      case SasTokenPermissionKind.CONTAINER_CREATE_ITEMS:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_CREATE_ITEMS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_REPLACE_ITEMS:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_REPLACE_ITEMS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_UPSERT_ITEMS:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_UPSERT_ITEMS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_DELETE_ITEMS:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_DELETE_ITEMS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_EXECUTE_QUERIES:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_EXECUTE_QUERIES;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_READ_FEEDS:
        this.dataPlaneReaderScope =
          this.dataPlaneReaderScope | PermissionScopes.CONTAINER_READ_FEEDS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_CREATE_STORE_PROCEDURES:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_CREATE_STORED_PROCEDURES;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_READ_STORE_PROCEDURES:
        this.dataPlaneReaderScope =
          this.dataPlaneReaderScope | PermissionScopes.CONTAINER_READ_STORED_PROCEDURES;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_REPLACE_STORE_PROCEDURES:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_REPLACE_STORED_PROCEDURES;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_DELETE_STORE_PROCEDURES:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_DELETE_STORED_PROCEDURES;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_CREATE_TRIGGERS:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_CREATE_TRIGGERS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_READ_TRIGGERS:
        this.dataPlaneReaderScope =
          this.dataPlaneReaderScope | PermissionScopes.CONTAINER_READ_TRIGGERS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_REPLACE_TRIGGERS:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_REPLACE_TRIGGERS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_DELETE_TRIGGERS:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_DELETE_TRIGGERS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_CREATE_USER_DEFINED_FUNCTIONS:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_CREATE_USER_DEFINED_FUNCTIONS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_READ_USER_DEFINED_FUNCTIONS:
        this.dataPlaneReaderScope =
          this.dataPlaneReaderScope | PermissionScopes.CONTAINER_READ_USER_DEFINED_FUNCTIONS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_REPLACE_USER_DEFINED_FUNCTIONS:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_REPLACE_USER_DEFINED_FUNCTIONS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_DELETE_USER_DEFINED_FUNCTIONS:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_DELETE_USER_DEFINED_FUNCTIONS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_EXECUTE_STORED_PROCEDURES:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_EXECUTE_STORED_PROCEDURES;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_READ_CONFLICTS:
        this.dataPlaneReaderScope =
          this.dataPlaneReaderScope | PermissionScopes.CONTAINER_READ_CONFLICTS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_DELETE_CONFLICTS:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_DELETE_CONFLICTS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_READ_ANY:
        this.dataPlaneReaderScope =
          this.dataPlaneReaderScope | PermissionScopes.CONTAINER_READ_ALL_ACCESS;
        break;
        break;
      case SasTokenPermissionKind.CONTAINER_FULL_ACCESS:
        this.dataPlaneReaderScope =
          this.dataPlaneReaderScope | PermissionScopes.CONTAINER_READ_ALL_ACCESS;
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.CONTAINER_WRITE_ALL_ACCESS;
        break;
        //  Cosmos container item scope.
        break;
      case SasTokenPermissionKind.ITEM_FULL_ACCESS:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.ITEM_WRITE_ALL_ACCESS;
        this.addPermission(SasTokenPermissionKind.ITEM_READ_ANY);
        break;
        break;
      case SasTokenPermissionKind.ITEM_READ_ANY:
        this.dataPlaneReaderScope =
          this.dataPlaneReaderScope | PermissionScopes.ITEM_READ_ALL_ACCESS;
        break;
        break;
      case SasTokenPermissionKind.ITEM_READ:
        this.dataPlaneReaderScope = this.dataPlaneReaderScope | PermissionScopes.ITEM_READ;
        break;
        break;
      case SasTokenPermissionKind.ITEM_REPLACE:
        this.dataPlaneWriterScope = this.dataPlaneWriterScope | PermissionScopes.ITEM_REPLACE;
        break;
        break;
      case SasTokenPermissionKind.ITEM_UPSERT:
        this.dataPlaneWriterScope = this.dataPlaneWriterScope | PermissionScopes.ITEM_UPSERT;
        break;
        break;
      case SasTokenPermissionKind.ITEM_DELETE:
        this.dataPlaneWriterScope = this.dataPlaneWriterScope | PermissionScopes.ITEM_DELETE;
        break;
        //  Cosmos container store procedure scope.
        break;
      case SasTokenPermissionKind.STORE_PROCEDURE_READ:
        this.dataPlaneReaderScope =
          this.dataPlaneReaderScope | PermissionScopes.STORED_PROCEDURE_READ;
        break;
        break;
      case SasTokenPermissionKind.STORE_PROCEDURE_REPLACE:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.STORED_PROCEDURE_REPLACE;
        break;
        break;
      case SasTokenPermissionKind.STORE_PROCEDURE_DELETE:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.STORED_PROCEDURE_DELETE;
        break;
        break;
      case SasTokenPermissionKind.STORE_PROCEDURE_EXECUTE:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.STORED_PROCEDURE_EXECUTE;
        break;
        //  Cosmos container user defined function scope.
        break;
      case SasTokenPermissionKind.USER_DEFINED_FUNCTION_READ:
        this.dataPlaneReaderScope =
          this.dataPlaneReaderScope | PermissionScopes.USER_DEFINED_FUNCTION_READ;
        break;
        break;
      case SasTokenPermissionKind.USER_DEFINED_FUNCTION_REPLACE:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.USER_DEFINED_FUNCTION_REPLACE;
        break;
        break;
      case SasTokenPermissionKind.USER_DEFINED_FUNCTION_DELETE:
        this.dataPlaneWriterScope =
          this.dataPlaneWriterScope | PermissionScopes.USER_DEFINED_FUNCTION_DELETE;
        break;
        //  Cosmos container trigger scope.
        break;
      case SasTokenPermissionKind.TRIGGER_READ:
        this.dataPlaneReaderScope = this.dataPlaneReaderScope | PermissionScopes.TRIGGER_READ;
        break;
        break;
      case SasTokenPermissionKind.TRIGGER_REPLACE:
        this.dataPlaneWriterScope = this.dataPlaneWriterScope | PermissionScopes.TRIGGER_REPLACE;
        break;
        break;
      case SasTokenPermissionKind.TRIGGER_DELETE:
        this.dataPlaneWriterScope = this.dataPlaneWriterScope | PermissionScopes.TRIGGER_DELETE;
        break;
        break;
      default:
        throw new ErrorEvent("permissionKind");
        break;
    }

    return this;
  }
}
