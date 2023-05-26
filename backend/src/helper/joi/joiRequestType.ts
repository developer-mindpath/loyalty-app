import Joi from "joi";
import { IEmptyObject } from "../errorHandler/apiResponse";

type JoiRequest<T> = {
  [key in keyof T]: JoiType<T[key]>;
};

type JoiType<Type> = Type extends string
  ? Joi.StringSchema | Joi.NumberSchema
  : Type extends number
  ? Joi.NumberSchema
  : Type extends boolean
  ? Joi.BooleanSchema
  : Type extends Array<unknown>
  ? Joi.ArraySchema
  : Type extends object
  ? Joi.ObjectSchema<Type>
  : never;

export type JoiRequestModelInternal<ReqBody, QueryParams, PathParams, Headers> =
  {
    path: PathParams extends IEmptyObject
      ? IEmptyObject
      : JoiRequest<PathParams>;
    body: ReqBody extends IEmptyObject ? IEmptyObject : JoiRequest<ReqBody>;
    query: QueryParams extends IEmptyObject
      ? IEmptyObject
      : JoiRequest<QueryParams>;
    header: Headers extends IEmptyObject ? IEmptyObject : JoiRequest<Headers>;
    model: string;
    group: string;
    description: string;
  };

export type JoiRequestModel<
  ReqBody = IEmptyObject,
  QueryParams = IEmptyObject,
  PathParams = IEmptyObject,
  Headers = IEmptyObject
> = Pick<
  JoiRequestModelInternal<ReqBody, QueryParams, PathParams, Headers>,
  | (PathParams extends IEmptyObject ? never : "path")
  | (QueryParams extends IEmptyObject ? never : "query")
  | (ReqBody extends IEmptyObject ? never : "body")
  | (Headers extends IEmptyObject ? never : "header")
>;
