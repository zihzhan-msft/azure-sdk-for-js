import {CanonicalCode} from "@opentelemetry/api";
import { CanonicalError } from "./canonicalError";

export class InvalidArgumentError extends CanonicalError {
    constructor(message: string) {
        super(message, CanonicalCode.INVALID_ARGUMENT);
        this.name = "InvalidArgumentError";
    }
}