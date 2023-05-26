import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import {
  GetDedicatedPageBannerParams,
  GetDedicatedPageExplainerParams,
  GetDedicatedPageParams,
  GetDedicatedPageReferralParams,
  GetDedicatedPageWayToEarnParams,
  UpdateDedicatedPageBannerParams,
  UpdateDedicatedPageExplainerParams,
  UpdateDedicatedPageParams,
  UpdateDedicatedPageReferralParams,
  UpdateDedicatedPageWayToEarnParams,
} from "../types/request/params";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { doValidation } from "../helper/joi";
import dedicatedPageValidations from "../requestValidator/dedicatedPage";
import { InsertDedicatedPageRequest } from "../types/request/dedicatedPage/insertDedicatedPageRequest";
import DedicatedPageController from "../controller/dedicatedPageController";
import { GetDedicatedPageResponse } from "../types/response/dedicatedPage/getDedicatedPageResponse";
import { UpdateDedicatedPageRequest } from "../types/request/dedicatedPage/updateDedicatedPageRequest";
import { InsertDedicatedPageBannerRequest } from "../types/request/dedicatedPage/insertDedicatedPageBannerRequest";
import { GetDedicatedPageBannerResponse } from "../types/response/dedicatedPage/getDedicatedPageBannerResponse";
import { UpdateDedicatedPageBannerRequest } from "../types/request/dedicatedPage/updateDedicatedPageBannerRequest";
import { InsertDedicatedPageExplainerRequest } from "../types/request/dedicatedPage/insertDedicatedPageExplainerRequest";
import { GetDedicatedPageExplainerResponse } from "../types/response/dedicatedPage/getDedicatedPageExplainerResponse";
import { UpdateDedicatedPageExplainerRequest } from "../types/request/dedicatedPage/updateDedicatedPageExplainerRequest";
import { InsertDedicatedPageReferralRequest } from "../types/request/dedicatedPage/insertDedicatedPageReferralRequest";
import { GetDedicatedPageReferralResponse } from "../types/response/dedicatedPage/getDedicatedPageReferralResponse";
import { UpdateDedicatedPageReferralRequest } from "../types/request/dedicatedPage/updateDedicatedPageReferralRequest";
import { InsertDedicatedPageWayToEarnRequest } from "../types/request/dedicatedPage/insertDedicatedPageWayToEarnRequest";
import { UpdateDedicatedPageWayToEarnRequest } from "../types/request/dedicatedPage/updateDedicatedPageWayToEarnRequest";
import { GetDedicatedPageWayToEarnResponse } from "../types/response/dedicatedPage/getDedicatedPageWayToEarnResponse";

const dedicatedPageController = new DedicatedPageController();
const router = express.Router();

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertDedicatedPageRequest>,
  QueryParams
>("/page", doValidation(dedicatedPageValidations[0]), (...arg) =>
  dedicatedPageController.insertDedicatedPage(...arg)
);

router.get<
  PathParams<GetDedicatedPageParams>,
  ResponseBody<GetDedicatedPageResponse>,
  RequestBody,
  QueryParams
>("/page/:userId", doValidation(dedicatedPageValidations[1]), (...arg) =>
  dedicatedPageController.getDedicatedPage(...arg)
);

router.patch<
  PathParams<UpdateDedicatedPageParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateDedicatedPageRequest>,
  QueryParams
>("/page/:userId", doValidation(dedicatedPageValidations[2]), (...arg) =>
  dedicatedPageController.updateDedicatedPage(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertDedicatedPageBannerRequest>,
  QueryParams
>("/page/banner", doValidation(dedicatedPageValidations[3]), (...arg) =>
  dedicatedPageController.insertDedicatedPageBanner(...arg)
);

router.get<
  PathParams<GetDedicatedPageBannerParams>,
  ResponseBody<GetDedicatedPageBannerResponse>,
  RequestBody,
  QueryParams
>("/page/banner/:userId", doValidation(dedicatedPageValidations[4]), (...arg) =>
  dedicatedPageController.getDedicatedPageBanner(...arg)
);

router.patch<
  PathParams<UpdateDedicatedPageBannerParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateDedicatedPageBannerRequest>,
  QueryParams
>("/page/banner/:userId", doValidation(dedicatedPageValidations[5]), (...arg) =>
  dedicatedPageController.updateDedicatedPageBanner(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertDedicatedPageExplainerRequest>,
  QueryParams
>("/page/explainer", doValidation(dedicatedPageValidations[6]), (...arg) =>
  dedicatedPageController.insertDedicatedPageExplainer(...arg)
);

router.get<
  PathParams<GetDedicatedPageExplainerParams>,
  ResponseBody<GetDedicatedPageExplainerResponse>,
  RequestBody,
  QueryParams
>("/page/banner/:userId", doValidation(dedicatedPageValidations[7]), (...arg) =>
  dedicatedPageController.getDedicatedPageExplainer(...arg)
);

router.patch<
  PathParams<UpdateDedicatedPageExplainerParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateDedicatedPageExplainerRequest>,
  QueryParams
>("/page/banner/:userId", doValidation(dedicatedPageValidations[8]), (...arg) =>
  dedicatedPageController.updateDedicatedPageExplainer(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertDedicatedPageReferralRequest>,
  QueryParams
>("/page/referral", doValidation(dedicatedPageValidations[9]), (...arg) =>
  dedicatedPageController.insertDedicatedPageReferral(...arg)
);

router.get<
  PathParams<GetDedicatedPageReferralParams>,
  ResponseBody<GetDedicatedPageReferralResponse>,
  RequestBody,
  QueryParams
>(
  "/page/referral/:userId",
  doValidation(dedicatedPageValidations[10]),
  (...arg) => dedicatedPageController.getDedicatedPageReferral(...arg)
);

router.patch<
  PathParams<UpdateDedicatedPageReferralParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateDedicatedPageReferralRequest>,
  QueryParams
>(
  "/page/referral/:userId",
  doValidation(dedicatedPageValidations[11]),
  (...arg) => dedicatedPageController.updateDedicatedPageReferral(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertDedicatedPageWayToEarnRequest>,
  QueryParams
>("/page/wayToEarn", doValidation(dedicatedPageValidations[12]), (...arg) =>
  dedicatedPageController.insertDedicatedPageWayToEarn(...arg)
);

router.get<
  PathParams<GetDedicatedPageWayToEarnParams>,
  ResponseBody<GetDedicatedPageWayToEarnResponse>,
  RequestBody,
  QueryParams
>(
  "/page/wayToEarn/:userId",
  doValidation(dedicatedPageValidations[13]),
  (...arg) => dedicatedPageController.getDedicatedPageWayToEarn(...arg)
);

router.patch<
  PathParams<UpdateDedicatedPageWayToEarnParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateDedicatedPageWayToEarnRequest>,
  QueryParams
>(
  "/page/wayToEarn/:userId",
  doValidation(dedicatedPageValidations[14]),
  (...arg) => dedicatedPageController.updateDedicatedPageWayToEarn(...arg)
);

module.exports = { router, basePath: "/api/dedicated" };
