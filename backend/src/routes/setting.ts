import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import {
  GetEmailSettingParams,
  GetOrderSettingParams,
  UpdateEmailSettingParams,
  UpdateOrderSettingParams,
} from "../types/request/params";
import { GetEmailSettingResponse } from "../types/response/setting/getEmailSettingResponse";
import SettingController from "../controller/settingController";
import { GetOrderSettingResponse } from "../types/response/setting/getOrderSettingResponse";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { UpdateEmailSettingRequest } from "../types/request/setting/updateEmailSettingRequest";
import { UpdateOrderSettingRequest } from "../types/request/setting/updateOrderSettingRequest";

const settingController = new SettingController();
const router = express.Router();

router.get<
  PathParams<GetEmailSettingParams>,
  ResponseBody<GetEmailSettingResponse>,
  RequestBody,
  QueryParams
>("/email/:userId", (...arg) =>
  settingController.getEmailSettingByUserId(...arg)
);

router.patch<
  PathParams<UpdateEmailSettingParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateEmailSettingRequest>,
  QueryParams
>("/email/:userId", (...arg) =>
  settingController.updateEmailSettingByUserId(...arg)
);

router.get<
  PathParams<GetOrderSettingParams>,
  ResponseBody<GetOrderSettingResponse>,
  RequestBody,
  QueryParams
>("/order/:userId", (...arg) =>
  settingController.getOrderSettingByUserId(...arg)
);

router.patch<
  PathParams<UpdateOrderSettingParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateOrderSettingRequest>,
  QueryParams
>("/order/:userId", (...arg) =>
  settingController.updateOrderSettingByUserId(...arg)
);

module.exports = { router, basePath: "/api/setting" };
