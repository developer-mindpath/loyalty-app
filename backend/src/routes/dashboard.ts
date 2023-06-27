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

const dashboardController = new DashboardController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<GetDashboardResponse>,
  RequestBody,
  QueryParams
>("/", checkToken, (...arg) => dashboardController.getDashboard(...arg));

module.exports = { router, basePath: "/api/dashboard" };
