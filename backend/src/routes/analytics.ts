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
import { PeriodQuery } from "../types/request/params";

const analyticsController = new AnalyticsController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<GetAnalyticsResponse>,
  RequestBody,
  QueryParams<PeriodQuery>
>("/", checkToken, (...arg) => analyticsController.getAnalytics(...arg));

module.exports = { router, basePath: "/api/analytics" };
