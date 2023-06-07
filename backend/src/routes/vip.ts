import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import {
  UserId,
  VipTierBenefitId,
  VipTierId,
  VipTierRewardId,
} from "../types/request/params";
import { doValidation } from "../helper/joi";
import vipValidations from "../requestValidator/vip";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { GetVipResponse } from "../types/response/vip/getVipResponse";
import { InsertVipRequest } from "../types/request/vip/insertVipRequest";
import { UpdateVipRequest } from "../types/request/vip/updateVipRequest";
import VipController from "../controller/vipController";
import { GetVipTierResponse } from "../types/response/vip/getVipTierResponse";
import { UpdateVipTierRequest } from "../types/request/vip/updateVipTierRequest";
import { InsertVipTierRequest } from "../types/request/vip/insertVipTierRequest";
import { GetVipTierRewardResponse } from "../types/response/vip/getVipTierRewardResponse";
import { InsertVipTierRewardRequest } from "../types/request/vip/insertVipTierRewardRequest";
import { UpdateVipTierRewardRequest } from "../types/request/vip/updateVipTierRewardRequest";
import { GetVipTierBenefitResponse } from "../types/response/vip/getVipTierBenefitResponse";
import { InsertVipTierBenefitRequest } from "../types/request/vip/insertVipTierBenefitRequest";
import { UpdateVipTierBenefitRequest } from "../types/request/vip/updateVipTierBenefitRequest";

const vipController = new VipController();
const router = express.Router();

router.get<
  PathParams<UserId>,
  ResponseBody<GetVipResponse>,
  RequestBody,
  QueryParams
>("/vip/:userId", doValidation(vipValidations[0]), (...arg) =>
  vipController.getVip(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertVipRequest>,
  QueryParams
>("/vip", doValidation(vipValidations[1]), (...arg) =>
  vipController.insertVip(...arg)
);

router.patch<
  PathParams<UserId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateVipRequest>,
  QueryParams
>("/vip/:userId", doValidation(vipValidations[2]), (...arg) =>
  vipController.updateVip(...arg)
);

router.get<
  PathParams<UserId>,
  ResponseBody<Array<GetVipTierResponse>>,
  RequestBody,
  QueryParams
>("/vip/tiers/:userId", doValidation(vipValidations[3]), (...arg) =>
  vipController.getVipTiers(...arg)
);

router.get<
  PathParams<VipTierId>,
  ResponseBody<GetVipTierResponse>,
  RequestBody,
  QueryParams
>("/vip/tier/:vipTierId", doValidation(vipValidations[14]), (...arg) =>
  vipController.getVipTier(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertVipTierRequest>,
  QueryParams
>("/vip/tier", doValidation(vipValidations[4]), (...arg) =>
  vipController.insertVipTier(...arg)
);

router.patch<
  PathParams<VipTierId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateVipTierRequest>,
  QueryParams
>("/vip/tier/:vipTierId", doValidation(vipValidations[5]), (...arg) =>
  vipController.updateVipTier(...arg)
);

router.get<
  PathParams<VipTierId>,
  ResponseBody<Array<GetVipTierRewardResponse>>,
  RequestBody,
  QueryParams
>("/vip/rewards/:vipTierId", doValidation(vipValidations[6]), (...arg) =>
  vipController.getVipTierRewards(...arg)
);

router.get<
  PathParams<VipTierRewardId>,
  ResponseBody<GetVipTierRewardResponse>,
  RequestBody,
  QueryParams
>("/vip/reward/:vipTierRewardId", doValidation(vipValidations[7]), (...arg) =>
  vipController.getVipTierReward(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertVipTierRewardRequest>,
  QueryParams
>("/vip/reward", doValidation(vipValidations[8]), (...arg) =>
  vipController.insertVipTierReward(...arg)
);

router.patch<
  PathParams<VipTierRewardId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateVipTierRewardRequest>,
  QueryParams
>("/vip/reward/:vipTierRewardId", doValidation(vipValidations[9]), (...arg) =>
  vipController.updateVipTierReward(...arg)
);

router.get<
  PathParams<VipTierId>,
  ResponseBody<Array<GetVipTierBenefitResponse>>,
  RequestBody,
  QueryParams
>("/vip/benefit/all/:vipTierId", doValidation(vipValidations[10]), (...arg) =>
  vipController.getVipTierBenefits(...arg)
);

router.get<
  PathParams<VipTierBenefitId>,
  ResponseBody<GetVipTierBenefitResponse>,
  RequestBody,
  QueryParams
>(
  "/vip/benefit/:vipTierBenefitId",
  doValidation(vipValidations[11]),
  (...arg) => vipController.getVipTierBenefit(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertVipTierBenefitRequest>,
  QueryParams
>("/vip/benefit", doValidation(vipValidations[12]), (...arg) =>
  vipController.insertVipTierBenefit(...arg)
);

router.patch<
  PathParams<VipTierBenefitId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateVipTierBenefitRequest>,
  QueryParams
>(
  "/vip/benefit/:vipTierBenefitId",
  doValidation(vipValidations[13]),
  (...arg) => vipController.updateVipTierBenefit(...arg)
);

module.exports = { router, basePath: "/api/program" };
