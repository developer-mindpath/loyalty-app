import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ErrorItem, ErrorResponseBody } from "./apiErrorResponseBody";
import { APIResponse, getDefaultErrorResponse } from "./apiResponse";

export class ExpressError extends Error {
  statusText: string = "Internal Server Error";

  errors: Array<ErrorItem> = new Array<ErrorItem>();

  status: number = StatusCodes.INTERNAL_SERVER_ERROR;

  constructor(status?: number, statusText?: string, errors?: Array<ErrorItem>) {
    super(statusText);

    if (status) {
      this.status = status;
    }

    if (statusText) {
      this.statusText = statusText;
    }

    if (errors) {
      this.errors = errors;
    }
  }

  public static errorHandler(
    status: number,
    message: string,
    errors: Array<ErrorItem>,
    res: Response
  ): void {
    try {
      const response = new APIResponse<ErrorResponseBody>();
      response.status = status;
      response.message = message;
      response.body = { errors } as ErrorResponseBody;

      res.status(response.status).send(response);
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(getDefaultErrorResponse());
    }
  }
}
