import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { doValidation } from "../helper/joi";
import planValidations from "../requestValidator/plan";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { checkToken } from "../middleware/checkToken";
import { GetPlanResponse } from "../types/response/plan/getPlanResponse";
import PlanController from "../controller/planController";
import { InsertPlanRequest } from "../types/request/plan/insertPlanRequest";
import { UpdatePlanRequest } from "../types/request/plan/updatePlanRequest";
import { PlanFeatureId, PlanId } from "../types/request/params";
import { GetPlanFeatureResponse } from "../types/response/plan/getPlanFeatureResponse";
import { InsertPlanFeatureRequest } from "../types/request/plan/insertPlanFeatureRequest";
import { UpdatePlanFeatureRequest } from "../types/request/plan/updatePlanFeatureRequest";

const planController = new PlanController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<Array<GetPlanResponse>>,
  RequestBody,
  QueryParams
>("/", checkToken, (...arg) => planController.getPlans(...arg));

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertPlanRequest>,
  QueryParams
>("/", checkToken, doValidation(planValidations[0]), (...arg) =>
  planController.insertPlan(...arg)
);

router.patch<
  PathParams<PlanId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdatePlanRequest>,
  QueryParams
>("/:planId", checkToken, doValidation(planValidations[1]), (...arg) =>
  planController.updatePlan(...arg)
);

router.get<
  PathParams,
  ResponseBody<Array<GetPlanFeatureResponse>>,
  RequestBody,
  QueryParams
>("/features", checkToken, (...arg) => planController.getPlanFeatures(...arg));

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertPlanFeatureRequest>,
  QueryParams
>("/feature", checkToken, doValidation(planValidations[2]), (...arg) =>
  planController.insertPlanFeature(...arg)
);

router.patch<
  PathParams<PlanFeatureId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdatePlanFeatureRequest>,
  QueryParams
>(
  "/feature/:planFeatureId",
  checkToken,
  doValidation(planValidations[3]),
  (...arg) => planController.updatePlanFeature(...arg)
);

module.exports = { router, basePath: "/api/plan" };
