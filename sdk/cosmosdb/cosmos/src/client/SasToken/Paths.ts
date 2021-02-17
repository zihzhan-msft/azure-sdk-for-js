// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export class Paths {

  public static ROOT: string = "/";

  public static ROOT_CHAR: string = '/';

  public static ESCAPE_CHAR: string = '\\';

  public static DATABASES_PATH_SEGMENT: string = "dbs";

  public static DATABASES_ROOT: string = (`${Paths.ROOT}${Paths.DATABASES_PATH_SEGMENT}`);

  public static USERS_PATH_SEGMENT: string = "users";

  public static PERMISSIONS_PATH_SEGMENT: string = "permissions";

  public static COLLECTIONS_PATH_SEGMENT: string = "colls";

  public static STORED_PROCEDURES_PATH_SEGMENT: string = "sprocs";

  public static TRIGGERS_PATH_SEGMENT: string = "triggers";

  public static USER_DEFINED_FUNCTIONS_PATH_SEGMENT: string = "udfs";

  public static CONFLICTS_PATH_SEGMENT: string = "conflicts";

  public static DOCUMENTS_PATH_SEGMENT: string = "docs";

  public ATTACHMENTS_PATH_SEGMENT: string = "attachments";

  //  /offers
  public static OFFERS_PATH_SEGMENT: string = "offers";

  public static OFFERS_ROOT: string = `${Paths.ROOT}${Paths.OFFERS_PATH_SEGMENT}/`;

  public static ADDRESS_PATH_SEGMENT: string = "addresses";

  public PARTITIONS_PATH_SEGMENT: string = "partitions";

  public static DATABASE_ACCOUNT_PATH_SEGMENT: string = "databaseaccount";

  public static TOPOLOGY_PATH_SEGMENT: string = "topology";

  public static MEDIA_PATH_SEGMENT: string = "media";

  public static MEDIA_ROOT: string = `${Paths.ROOT}${Paths.MEDIA_PATH_SEGMENT}`;

  public static SCHEMAS_PATH_SEGMENT: string = "schemas";

  public static PARTITION_KEY_RANGES_PATH_SEGMENT: string = "pkranges";

  public static USER_DEFINED_TYPES_PATH_SEGMENT: string = "udts";

  public static RID_RANGE_PATH_SEGMENT: string = "ridranges";
}
