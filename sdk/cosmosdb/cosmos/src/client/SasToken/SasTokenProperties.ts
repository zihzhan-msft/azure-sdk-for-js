// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SasTokenPartitionKeyValueRange } from "./SasTokenPartitionKeyValueRange";
import { SasTokenPermissionKind } from "../../client/SasToken/SasTokenPermissionKind";
import { CosmosContainerChildResourceKind } from './CosmosContainerChildResourceKind';
import { CosmosKeyType } from './CosmosKeyType';

export interface SasTokenProperties {
  databaseName: string;
  containerName: string;
  resourceKind: CosmosContainerChildResourceKind;
  resourceName: string;
  user: string;
  userTag: string;
  expiryTime?: Date;
  startTime?: Date;
  partitionKeyValueRanges: Iterable<SasTokenPartitionKeyValueRange>;
  addPartitionKeyValue(partitionKeyValue: string): SasTokenProperties;
  addPermission(permissionKind: SasTokenPermissionKind): SasTokenProperties;
  create(user: string, databaseName: string, containerName: string): SasTokenProperties;
  sasTokenValueUsingHMAC(key: string, keyType?: CosmosKeyType): string;
  cosmosContainerChildResourceKind: CosmosContainerChildResourceKind;
  cosmosKeyType: CosmosKeyType;
}
