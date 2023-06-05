import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import {
  GetFloatingWidgetButtonParams,
  GetFloatingWidgetParams,
  GetFloatingWidgetTextParams,
  UpdateFloatingWidgetButtonParams,
  UpdateFloatingWidgetParams,
  UpdateFloatingWidgetTextParams,
} from "../types/request/params";
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

const widgetController = new WidgetController();
const router = express.Router();

router.get<
  PathParams<GetFloatingWidgetParams>,
  ResponseBody<GetFloatingWidgetResponse>,
  RequestBody,
  QueryParams
>("/floating/:userId", doValidation(widgetValidations[0]), (...arg) =>
  widgetController.getFloatingWidgetSetting(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertFloatingWidgetRequest>,
  QueryParams
>("/floating", doValidation(widgetValidations[1]), (...arg) =>
  widgetController.insertFloatingWidgetSetting(...arg)
);

router.patch<
  PathParams<UpdateFloatingWidgetParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateFloatingWidgetRequest>,
  QueryParams
>("/floating/:userId", doValidation(widgetValidations[2]), (...arg) =>
  widgetController.updateFloatingWidgetSetting(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertFloatingWidgetButtonRequest>,
  QueryParams
>("/floating/button", doValidation(widgetValidations[3]), (...arg) =>
  widgetController.insertFloatingWidgetButton(...arg)
);

router.get<
  PathParams<GetFloatingWidgetButtonParams>,
  ResponseBody<GetFloatingWidgetButtonResponse>,
  RequestBody,
  QueryParams
>("/floating/button/:userId", doValidation(widgetValidations[4]), (...arg) =>
  widgetController.getFloatingWidgetButton(...arg)
);

router.patch<
  PathParams<UpdateFloatingWidgetButtonParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateFloatingWidgetButtonRequest>,
  QueryParams
>("/floating/button/:userId", doValidation(widgetValidations[5]), (...arg) =>
  widgetController.updateFloatingWidgetButton(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertFloatingWidgetTextRequest>,
  QueryParams
>("/floating/text", doValidation(widgetValidations[6]), (...arg) =>
  widgetController.insertFloatingWidgetText(...arg)
);

router.get<
  PathParams<GetFloatingWidgetTextParams>,
  ResponseBody<GetFloatingWidgetTextResponse>,
  RequestBody,
  QueryParams
>("/floating/text/:userId", doValidation(widgetValidations[7]), (...arg) =>
  widgetController.getFloatingWidgetText(...arg)
);

router.patch<
  PathParams<UpdateFloatingWidgetTextParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateFloatingWidgetTextRequest>,
  QueryParams
>("/floating/button/:userId", doValidation(widgetValidations[8]), (...arg) =>
  widgetController.updateFloatingWidgetText(...arg)
);

module.exports = { router, basePath: "/api/widget" };
