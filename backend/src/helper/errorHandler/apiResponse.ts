import { StatusCodes } from "http-status-codes";
import { ErrorResponseBody } from "./apiErrorResponseBody";

export interface IEmptyObject {
  [key: string]: void;
}

export class APIResponse<T = IEmptyObject> {
  public status: number = StatusCodes.BAD_REQUEST;
  public message = "";
  public body: T = <T>{};
}

export function getDefaultErrorResponse(): APIResponse<ErrorResponseBody> {
  const errorResponse = new APIResponse<ErrorResponseBody>();
  errorResponse.status = StatusCodes.INTERNAL_SERVER_ERROR;
  errorResponse.message = "Internal Server Error";
  errorResponse.body = {
    errors: [{}],
  };

  return errorResponse;
}
