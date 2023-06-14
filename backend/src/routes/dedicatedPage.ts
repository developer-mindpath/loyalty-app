import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
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
import { InsertDedicatedPageWayToRedeemRequest } from "../types/request/dedicatedPage/insertDedicatedPageWayToRedeemRequest";
import { GetDedicatedPageWayToRedeemResponse } from "../types/response/dedicatedPage/getDedicatedPageWayToRedeemResponse";
import { UpdateDedicatedPageWayToRedeemRequest } from "../types/request/dedicatedPage/updateDedicatedPageWayToRedeemRequest";
import { InsertDedicatedPageVipTierRequest } from "../types/request/dedicatedPage/insertDedicatedPageVipTierRequest";
import { UpdateDedicatedPageVipTierRequest } from "../types/request/dedicatedPage/updateDedicatedPageVipTierRequest";
import { GetDedicatedPageVipTierResponse } from "../types/response/dedicatedPage/getDedicatedPageVipTierResponse";
import { checkToken } from "../middleware/checkToken";

const dedicatedPageController = new DedicatedPageController();
const router = express.Router();

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertDedicatedPageRequest>,
  QueryParams
>("/page", checkToken, doValidation(dedicatedPageValidations[0]), (...arg) =>
  dedicatedPageController.insertDedicatedPage(...arg)
);

router.get<
  PathParams,
  ResponseBody<GetDedicatedPageResponse>,
  RequestBody,
  QueryParams
>("/page", checkToken, (...arg) =>
  dedicatedPageController.getDedicatedPage(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateDedicatedPageRequest>,
  QueryParams
>("/page", checkToken, doValidation(dedicatedPageValidations[1]), (...arg) =>
  dedicatedPageController.updateDedicatedPage(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertDedicatedPageBannerRequest>,
  QueryParams
>(
  "/page/banner",
  checkToken,
  doValidation(dedicatedPageValidations[2]),
  (...arg) => dedicatedPageController.insertDedicatedPageBanner(...arg)
);

router.get<
  PathParams,
  ResponseBody<GetDedicatedPageBannerResponse>,
  RequestBody,
  QueryParams
>("/page/banner", checkToken, (...arg) =>
  dedicatedPageController.getDedicatedPageBanner(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateDedicatedPageBannerRequest>,
  QueryParams
>(
  "/page/banner",
  checkToken,
  doValidation(dedicatedPageValidations[3]),
  (...arg) => dedicatedPageController.updateDedicatedPageBanner(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertDedicatedPageExplainerRequest>,
  QueryParams
>(
  "/page/explainer",
  checkToken,
  doValidation(dedicatedPageValidations[4]),
  (...arg) => dedicatedPageController.insertDedicatedPageExplainer(...arg)
);

router.get<
  PathParams,
  ResponseBody<GetDedicatedPageExplainerResponse>,
  RequestBody,
  QueryParams
>("/page/banner", checkToken, (...arg) =>
  dedicatedPageController.getDedicatedPageExplainer(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateDedicatedPageExplainerRequest>,
  QueryParams
>("/page/banner", doValidation(dedicatedPageValidations[5]), (...arg) =>
  dedicatedPageController.updateDedicatedPageExplainer(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertDedicatedPageReferralRequest>,
  QueryParams
>(
  "/page/referral",
  checkToken,
  doValidation(dedicatedPageValidations[6]),
  (...arg) => dedicatedPageController.insertDedicatedPageReferral(...arg)
);

router.get<
  PathParams,
  ResponseBody<GetDedicatedPageReferralResponse>,
  RequestBody,
  QueryParams
>("/page/referral", checkToken, (...arg) =>
  dedicatedPageController.getDedicatedPageReferral(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateDedicatedPageReferralRequest>,
  QueryParams
>(
  "/page/referral",
  checkToken,
  doValidation(dedicatedPageValidations[7]),
  (...arg) => dedicatedPageController.updateDedicatedPageReferral(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertDedicatedPageWayToEarnRequest>,
  QueryParams
>(
  "/page/wayToEarn",
  checkToken,
  doValidation(dedicatedPageValidations[8]),
  (...arg) => dedicatedPageController.insertDedicatedPageWayToEarn(...arg)
);

router.get<
  PathParams,
  ResponseBody<GetDedicatedPageWayToEarnResponse>,
  RequestBody,
  QueryParams
>("/page/wayToEarn", checkToken, (...arg) =>
  dedicatedPageController.getDedicatedPageWayToEarn(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateDedicatedPageWayToEarnRequest>,
  QueryParams
>(
  "/page/wayToEarn",
  checkToken,
  doValidation(dedicatedPageValidations[9]),
  (...arg) => dedicatedPageController.updateDedicatedPageWayToEarn(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertDedicatedPageWayToRedeemRequest>,
  QueryParams
>(
  "/page/wayToRedeem",
  checkToken,
  doValidation(dedicatedPageValidations[10]),
  (...arg) => dedicatedPageController.insertDedicatedPageWayToRedeem(...arg)
);

router.get<
  PathParams,
  ResponseBody<GetDedicatedPageWayToRedeemResponse>,
  RequestBody,
  QueryParams
>("/page/wayToRedeem", checkToken, (...arg) =>
  dedicatedPageController.getDedicatedPageWayToRedeem(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateDedicatedPageWayToRedeemRequest>,
  QueryParams
>(
  "/page/wayToRedeem",
  checkToken,
  doValidation(dedicatedPageValidations[11]),
  (...arg) => dedicatedPageController.updateDedicatedPageWayToRedeem(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertDedicatedPageVipTierRequest>,
  QueryParams
>(
  "/page/vipTier",
  checkToken,
  doValidation(dedicatedPageValidations[12]),
  (...arg) => dedicatedPageController.insertDedicatedPageVipTier(...arg)
);

router.get<
  PathParams,
  ResponseBody<GetDedicatedPageVipTierResponse>,
  RequestBody,
  QueryParams
>("/page/vipTier", checkToken, (...arg) =>
  dedicatedPageController.getDedicatedPageVipTier(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateDedicatedPageVipTierRequest>,
  QueryParams
>(
  "/page/vipTier/:userId",
  checkToken,
  doValidation(dedicatedPageValidations[13]),
  (...arg) => dedicatedPageController.updateDedicatedPageVipTier(...arg)
);

module.exports = { router, basePath: "/api/dedicated" };
