import express from "express";
import { GetPointEarnResponse } from "../types/response/point/getPointEarnResponse";
import PointController from "../controller/pointController";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { PointInsertRequest } from "../types/request/point/pointInsertRequest";
import { PointInsertResponse } from "../types/response/point/pointInsertResponse";
import {
  GetEarnDetailParams,
  GetEarnPointsByUsingUserIdParams,
  UpdateEarnDetailParams,
} from "../types/request/params";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import { UpdatePointEarnDetailRequest } from "../types/request/point/updatePointEarnDetailRequest";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";

const pointController = new PointController();
const router = express.Router();

router.post<
  PathParams,
  ResponseBody<PointInsertResponse>,
  RequestBody<PointInsertRequest>,
  QueryParams
>("/earn", (...arg) => pointController.insertEarningPoint(...arg));

router.get<
  PathParams<GetEarnPointsByUsingUserIdParams>,
  ResponseBody<Array<GetPointEarnResponse>>,
  RequestBody,
  QueryParams
>("/earn/:userId", (...arg) => pointController.getAllEarningPoints(...arg));

router.get<
  PathParams<GetEarnDetailParams>,
  ResponseBody<GetPointEarnDetailResponse>,
  RequestBody,
  QueryParams
>("/earn/details/:pointId", (...arg) =>
  pointController.getEarningDetailsByPointId(...arg)
);

router.patch<
  PathParams<UpdateEarnDetailParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdatePointEarnDetailRequest>,
  QueryParams
>("/earn/details/:pointId", (...arg) =>
  pointController.updateEarningDetailsByPointId(...arg)
);

module.exports = { router, basePath: "/api/point" };
