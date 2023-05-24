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
import {
  DeleteRedeemPointDetailParams,
  GetEarnDetailParams,
  GetEarnPointsByUsingUserIdParams,
  GetRedeemPointDetailParams,
  GetRedeemPointsParams,
  UpdateEarnDetailParams,
  UpdateRedeemPointDetailParams,
  UpdateRedeemPointsParams,
} from "../types/request/params";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import { UpdatePointEarnDetailRequest } from "../types/request/point/updatePointEarnDetailRequest";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { InsertPointRedeemRequest } from "../types/request/point/insertPointRedeemRequest";
import { GetPointRedeemResponse } from "../types/response/point/getPointRedeemResponse";
import { UpdatePointRedeemRequest } from "../types/request/point/updatePointRedeemRequest";
import { InsertPointRedeemDetailRequest } from "../types/request/point/insertPointRedeemDetailRequest";
import { UpdatePointRedeemDetailRequest } from "../types/request/point/updatePointRedeemDetailRequest";
import { GetPointRedeemDetailResponse } from "../types/response/point/getPointRedeemDetailResponse";
import { InsertPointEarnDetailRequest } from "../types/request/point/insertPointEarnDetailRequest";

const pointController = new PointController();
const router = express.Router();

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
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

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertPointEarnDetailRequest>,
  QueryParams
>("/earn/details", (...arg) =>
  pointController.insertEarningDetailsByPointId(...arg)
);

router.patch<
  PathParams<UpdateEarnDetailParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdatePointEarnDetailRequest>,
  QueryParams
>("/earn/details/:pointId", (...arg) =>
  pointController.updateEarningDetailsByPointId(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertPointRedeemRequest>,
  QueryParams
>("/redeem", (...arg) => pointController.insertRedeemingPoint(...arg));

router.get<
  PathParams<GetRedeemPointsParams>,
  ResponseBody<Array<GetPointRedeemResponse>>,
  RequestBody,
  QueryParams
>("/redeem/:userId", (...arg) => pointController.getPointRedeem(...arg));

router.patch<
  PathParams<UpdateRedeemPointsParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdatePointRedeemRequest>,
  QueryParams
>("/redeem/:pointRedeemId/:userId", (...arg) =>
  pointController.updatePointRedeem(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertPointRedeemDetailRequest>,
  QueryParams
>("/redeem/details", (...arg) =>
  pointController.insertRedeemPointDetail(...arg)
);

router.get<
  PathParams<GetRedeemPointDetailParams>,
  ResponseBody<Array<GetPointRedeemDetailResponse>>,
  RequestBody,
  QueryParams
>("/redeem/details/:pointRedeemId/:userId", (...arg) =>
  pointController.getPointRedeemDetail(...arg)
);

router.patch<
  PathParams<UpdateRedeemPointDetailParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdatePointRedeemDetailRequest>,
  QueryParams
>("/redeem/details/:pointRedeemId/:userId", (...arg) =>
  pointController.updatePointRedeemDetail(...arg)
);

router.delete<
  PathParams<DeleteRedeemPointDetailParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<IEmptyObject>,
  QueryParams
>("/redeem/details/:pointRedeemId/:userId", (...arg) =>
  pointController.deletePointRedeemDetail(...arg)
);

module.exports = { router, basePath: "/api/point" };
