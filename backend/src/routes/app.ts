import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { doValidation } from "../helper/joi";
import appValidations from "../requestValidator/app";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { checkToken } from "../middleware/checkToken";
import { GetAppResponse } from "../types/response/app/getAppResponse";
import AppController from "../controller/appController";
import { InsertAppRequest } from "../types/request/app/insertAppRequest";
import { UpdateAppRequest } from "../types/request/app/updateAppRequest";
import { AppId } from "../types/request/params";

const appController = new AppController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<Array<GetAppResponse>>,
  RequestBody,
  QueryParams
>("/", checkToken, (...arg) => appController.getApp(...arg));

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertAppRequest>,
  QueryParams
>("/", checkToken, doValidation(appValidations[0]), (...arg) =>
  appController.insertApp(...arg)
);

router.patch<
  PathParams<AppId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateAppRequest>,
  QueryParams
>("/:appId", checkToken, doValidation(appValidations[1]), (...arg) =>
  appController.updateApp(...arg)
);

module.exports = { router, basePath: "/api/app" };
