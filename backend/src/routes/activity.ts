import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { GetLoyaltyProgramActivityParams } from "../types/request/params";
import { doValidation } from "../helper/joi";
import activityValidations from "../requestValidator/activity";
import ActivityController from "../controller/activityController";
import { GetLoyaltyProgramActivityResponse } from "src/types/response/activity/getLoyaltyProgramActivityResponse";

const activityController = new ActivityController();
const router = express.Router();

router.get<
  PathParams<GetLoyaltyProgramActivityParams>,
  ResponseBody<GetLoyaltyProgramActivityResponse>,
  RequestBody,
  QueryParams
>("activity/loyalty/:userId", doValidation(activityValidations[0]), (...arg) =>
  activityController.getLoyaltyProgramActivity(...arg)
);

module.exports = { router, basePath: "/api/program" };
