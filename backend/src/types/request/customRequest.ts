import { Request, RequestHandler } from "express";
import {
  APIResponse,
  IEmptyObject,
} from "../../helper/errorHandler/apiResponse";

export type ICustomRequest<Path, ResBody, ReqBody, Query> = Request<
  Path,
  ResBody,
  ReqBody,
  Query
>;

export type PathParams<T = IEmptyObject> = IEmptyObject & T;
export type ResponseBody<T = IEmptyObject> = APIResponse<T | IEmptyObject>;
export type RequestBody<T = IEmptyObject> = IEmptyObject & T;
export type QueryParams<T = IEmptyObject> = IEmptyObject & T;

export type CustomRequestHandler<
  Path = IEmptyObject,
  ResBody = IEmptyObject,
  ReqBody = IEmptyObject,
  Query = IEmptyObject
> = RequestHandler<Path, APIResponse<ResBody>, ReqBody, Query>;

export default interface CustomRequest<
  Path = IEmptyObject,
  ResBody = IEmptyObject,
  ReqBody = IEmptyObject,
  Query = IEmptyObject
> extends Request<Path, APIResponse<ResBody>, ReqBody, Query> {
  userId?: number;
  adminRef?: number;
}
