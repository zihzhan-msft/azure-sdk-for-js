import * as coreAuth from "@azure/core-auth";
import { IoTSpacesClientContext } from "./ioTSpacesClientContext";
import { IoTSpacesClientOptionalParams } from "./models";

export class IoTSpacesClient extends IoTSpacesClientContext {
  /**
   * Initializes a new instance of the IoTSpacesClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: IoTSpacesClientOptionalParams
  ) {
    super(credentials, options);
  }
}
