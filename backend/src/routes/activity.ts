import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import {
  GetLoyaltyProgramActivityParams,
  GetReferralProgramActivityParams,
  GetVipProgramActivityParams,
  Pagination,
} from "../types/request/params";
import { doValidation } from "../helper/joi";
import activityValidations from "../requestValidator/activity";
import ActivityController from "../controller/activityController";
import { GetLoyaltyProgramActivityResponse } from "../types/response/activity/getLoyaltyProgramActivityResponse";
import { GetReferralProgramActivityResponse } from "../types/response/activity/getReferralProgramActivityResponse";
import { GetVipProgramActivityResponse } from "../types/response/activity/getVipProgramActivityResponse";

const activityController = new ActivityController();
const router = express.Router();

router.get<
  PathParams<GetLoyaltyProgramActivityParams>,
  ResponseBody<Array<GetLoyaltyProgramActivityResponse>>,
  RequestBody,
  QueryParams<Pagination>
>("/activity/loyalty/:userId", doValidation(activityValidations[0]), (...arg) =>
  activityController.getLoyaltyProgramActivity(...arg)
);

router.get<
  PathParams<GetReferralProgramActivityParams>,
  ResponseBody<Array<GetReferralProgramActivityResponse>>,
  RequestBody,
  QueryParams<Pagination>
>(
  "/activity/referral/:userId",
  doValidation(activityValidations[1]),
  (...arg) => activityController.getReferralProgramActivity(...arg)
);

router.get<
  PathParams<GetVipProgramActivityParams>,
  ResponseBody<Array<GetVipProgramActivityResponse>>,
  RequestBody,
  QueryParams<Pagination>
>("/activity/vip/:userId", doValidation(activityValidations[2]), (...arg) =>
  activityController.getVipProgramActivity(...arg)
);

module.exports = { router, basePath: "/api/program" };
