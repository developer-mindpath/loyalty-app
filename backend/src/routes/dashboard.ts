import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { checkToken } from "../middleware/checkToken";
import { GetDashboardResponse } from "../types/response/dashboard/getDashboardResponse";
import DashboardController from "../controller/dashboardController";
import { GetDashboardSalesGeneratedResponse } from "src/types/response/dashboard/getDashboardTotalSalesGeneratedResponse";

const dashboardController = new DashboardController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<GetDashboardResponse>,
  RequestBody,
  QueryParams
  >("/", checkToken, (...arg) => dashboardController.getDashboard(...arg));

router.get<
  PathParams,
  ResponseBody<GetDashboardSalesGeneratedResponse>,
  RequestBody,
  QueryParams
  >("/salesGenerated", checkToken, (...arg) => dashboardController.getDashboardSalesGenerated(...arg));

module.exports = { router, basePath: "/api/dashboard" };
