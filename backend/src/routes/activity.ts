import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { Pagination } from "../types/request/params";
import { doValidation } from "../helper/joi";
import activityValidations from "../requestValidator/activity";
import ActivityController from "../controller/activityController";
import { GetLoyaltyProgramActivityResponse } from "../types/response/activity/getLoyaltyProgramActivityResponse";
import { GetReferralProgramActivityResponse } from "../types/response/activity/getReferralProgramActivityResponse";
import { GetVipProgramActivityResponse } from "../types/response/activity/getVipProgramActivityResponse";
import { checkToken } from "../middleware/checkToken";

const activityController = new ActivityController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<Array<GetLoyaltyProgramActivityResponse>>,
  RequestBody,
  QueryParams<Pagination>
>(
  "/activity/loyalty",
  checkToken,
  doValidation(activityValidations[0]),
  (...arg) => activityController.getLoyaltyProgramActivity(...arg)
);

router.get<
  PathParams,
  ResponseBody<Array<GetReferralProgramActivityResponse>>,
  RequestBody,
  QueryParams<Pagination>
>("/activity/referral", doValidation(activityValidations[1]), (...arg) =>
  activityController.getReferralProgramActivity(...arg)
);

router.get<
  PathParams,
  ResponseBody<Array<GetVipProgramActivityResponse>>,
  RequestBody,
  QueryParams<Pagination>
>("/activity/vip", doValidation(activityValidations[2]), (...arg) =>
  activityController.getVipProgramActivity(...arg)
);

module.exports = { router, basePath: "/api/program" };
