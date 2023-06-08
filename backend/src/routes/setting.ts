import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { GetEmailSettingResponse } from "../types/response/setting/getEmailSettingResponse";
import SettingController from "../controller/settingController";
import { GetOrderSettingResponse } from "../types/response/setting/getOrderSettingResponse";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { UpdateEmailSettingRequest } from "../types/request/setting/updateEmailSettingRequest";
import { UpdateOrderSettingRequest } from "../types/request/setting/updateOrderSettingRequest";
import { InsertEmailSettingRequest } from "../types/request/setting/insertEmailSettingRequest";
import { InsertOrderSettingRequest } from "../types/request/setting/insertOrderSettingRequest";
import { doValidation } from "../helper/joi";
import settingValidations from "../requestValidator/setting";
import { checkToken } from "../middleware/checkToken";

const settingController = new SettingController();
const router = express.Router();

router.get<
  PathParams<IEmptyObject>,
  ResponseBody<GetEmailSettingResponse>,
  RequestBody,
  QueryParams
>("/email", checkToken, (...arg) =>
  settingController.getEmailSettingByUserId(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateEmailSettingRequest>,
  QueryParams
>("/email", checkToken, doValidation(settingValidations[1]), (...arg) =>
  settingController.updateEmailSettingByUserId(...arg)
);

router.post<
  PathParams<IEmptyObject>,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertEmailSettingRequest>,
  QueryParams
>("/email", checkToken, doValidation(settingValidations[2]), (...arg) =>
  settingController.insertEmailSettingByUserId(...arg)
);

router.get<
  PathParams,
  ResponseBody<GetOrderSettingResponse>,
  RequestBody,
  QueryParams
>("/order", checkToken, (...arg) =>
  settingController.getOrderSettingByUserId(...arg)
);

router.patch<
  PathParams<IEmptyObject>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateOrderSettingRequest>,
  QueryParams
>("/order", doValidation(settingValidations[4]), (...arg) =>
  settingController.updateOrderSettingByUserId(...arg)
);

router.post<
  PathParams<IEmptyObject>,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertOrderSettingRequest>,
  QueryParams
>("/order", doValidation(settingValidations[5]), (...arg) =>
  settingController.insertOrderSettingByUserId(...arg)
);

module.exports = { router, basePath: "/api/setting" };
