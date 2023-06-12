import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { doValidation } from "../helper/joi";
import widgetValidations from "../requestValidator/widget";
import { GetFloatingWidgetResponse } from "../types/response/widget/getFloatingWidgetResponse";
import WidgetController from "../controller/widgetController";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { InsertFloatingWidgetRequest } from "../types/request/widget/insertFloatingWidgetRequest";
import { UpdateFloatingWidgetRequest } from "../types/request/widget/updateFloatingWidgetRequest";
import { InsertFloatingWidgetButtonRequest } from "../types/request/widget/insertFloatingWidgetButtonRequest";
import { GetFloatingWidgetButtonResponse } from "../types/response/widget/getFloatingWidgetButtonResponse";
import { UpdateFloatingWidgetButtonRequest } from "../types/request/widget/updateFloatingWidgetButtonRequest";
import { InsertFloatingWidgetTextRequest } from "../types/request/widget/insertFloatingWidgetTextRequest";
import { GetFloatingWidgetTextResponse } from "../types/response/widget/getFloatingWidgetTextResponse";
import { UpdateFloatingWidgetTextRequest } from "../types/request/widget/updateFloatingWidgetTextRequest";
import { checkToken } from "../middleware/checkToken";

const widgetController = new WidgetController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<GetFloatingWidgetResponse>,
  RequestBody,
  QueryParams
>("/floating", checkToken, (...arg) =>
  widgetController.getFloatingWidgetSetting(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertFloatingWidgetRequest>,
  QueryParams
>("/floating", checkToken, doValidation(widgetValidations[0]), (...arg) =>
  widgetController.insertFloatingWidgetSetting(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateFloatingWidgetRequest>,
  QueryParams
>("/floating", checkToken, doValidation(widgetValidations[1]), (...arg) =>
  widgetController.updateFloatingWidgetSetting(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertFloatingWidgetButtonRequest>,
  QueryParams
>(
  "/floating/button",
  checkToken,
  doValidation(widgetValidations[2]),
  (...arg) => widgetController.insertFloatingWidgetButton(...arg)
);

router.get<
  PathParams,
  ResponseBody<GetFloatingWidgetButtonResponse>,
  RequestBody,
  QueryParams
>("/floating/button", checkToken, (...arg) =>
  widgetController.getFloatingWidgetButton(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateFloatingWidgetButtonRequest>,
  QueryParams
>(
  "/floating/button",
  checkToken,
  doValidation(widgetValidations[3]),
  (...arg) => widgetController.updateFloatingWidgetButton(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertFloatingWidgetTextRequest>,
  QueryParams
>("/floating/text", checkToken, doValidation(widgetValidations[4]), (...arg) =>
  widgetController.insertFloatingWidgetText(...arg)
);

router.get<
  PathParams,
  ResponseBody<GetFloatingWidgetTextResponse>,
  RequestBody,
  QueryParams
>("/floating/text", checkToken, (...arg) =>
  widgetController.getFloatingWidgetText(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateFloatingWidgetTextRequest>,
  QueryParams
>("/floating/text", checkToken, doValidation(widgetValidations[5]), (...arg) =>
  widgetController.updateFloatingWidgetText(...arg)
);

module.exports = { router, basePath: "/api/widget" };
