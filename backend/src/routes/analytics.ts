import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { checkToken } from "../middleware/checkToken";
import AnalyticsController from "../controller/analyticsController";
import { GetAnalyticsResponse } from "../types/response/analytics/getAnalyticsResponse";
import { AnalyticsReferralsParams, PeriodQuery } from "../types/request/params";
import { GetReferralsAnalyticsResponse } from "../types/response/analytics/getReferralsAnalyticsResponse";

const analyticsController = new AnalyticsController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<GetAnalyticsResponse>,
  RequestBody,
  QueryParams<PeriodQuery>
>("/points", checkToken, (...arg) => analyticsController.getAnalytics(...arg));

router.get<
  PathParams,
  ResponseBody<GetReferralsAnalyticsResponse>,
  RequestBody,
  QueryParams<AnalyticsReferralsParams>
>("/referrals", checkToken, (...arg) =>
  analyticsController.getReferralsAnalytics(...arg)
);

module.exports = { router, basePath: "/api/analytics" };
