import { CanonicalCode } from "@opentelemetry/api";

export class CanonicalError extends Error {
  public get code(): CanonicalCode {
    return this._code;
  }

  constructor(message: string, private _code: CanonicalCode) {
    super(message);
  }
}
