import { CustomRequestHandler } from "../../types/request/customRequest";
import { IEmptyObject } from "../errorHandler/apiResponse";
import { JoiRequestModel } from "./joiRequestType";
import expressValidation from "./validate";

export function doValidation<ReqBody, QueryParams, PathParams, Headers>(
  params: JoiRequestModel<ReqBody, QueryParams, PathParams, Headers>
): CustomRequestHandler<PathParams, IEmptyObject, ReqBody, QueryParams> {
  return expressValidation(params);
}

export function joiValidationRequest<
  PathParams = IEmptyObject,
  ReqBody = IEmptyObject,
  QueryParams = IEmptyObject,
  Headers = IEmptyObject
>(
  schema: JoiRequestModel<ReqBody, QueryParams, PathParams, Headers>
): JoiRequestModel<ReqBody, QueryParams, PathParams, Headers> {
  return schema;
}

export function joiEnumValidation(e: {
  [s: string]: string | number;
}): Array<string | number> {
  return Object.keys(e)
    .filter((value) => isNaN(Number(value)))
    .map((key) => e[key]);
}
