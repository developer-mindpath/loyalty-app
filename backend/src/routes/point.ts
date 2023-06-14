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
  PointActionId,
  PointRedeemDetailId,
  PointRedeemId,
} from "../types/request/params";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import { UpdatePointEarnDetailRequest } from "../types/request/point/updatePointEarnDetailRequest";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { InsertPointRedeemRequest } from "../types/request/point/insertPointRedeemRequest";
import { GetPointRedeemResponse } from "../types/response/point/getPointRedeemResponse";
import { UpdatePointRedeemDetailRequest } from "../types/request/point/updatePointRedeemDetailRequest";
import { GetPointRedeemDetailResponse } from "../types/response/point/getPointRedeemDetailResponse";
import { doValidation } from "../helper/joi";
import pointValidations from "../requestValidator/point";
import { checkToken } from "../middleware/checkToken";
import { PostResponse } from "../types/response/postResponse";

const pointController = new PointController();
const router = express.Router();

router.post<
  PathParams,
  ResponseBody<PostResponse>,
  RequestBody<PointInsertRequest>,
  QueryParams
>("/earn", checkToken, doValidation(pointValidations[0]), (...arg) =>
  pointController.insertEarningPoint(...arg)
);

router.get<
  PathParams,
  ResponseBody<Array<GetPointEarnResponse>>,
  RequestBody,
  QueryParams
>("/earn", checkToken, (...arg) => pointController.getAllEarningPoints(...arg));

router.get<
  PathParams<PointActionId>,
  ResponseBody<GetPointEarnDetailResponse>,
  RequestBody,
  QueryParams
>(
  "/earn/detail/:pointId",
  checkToken,
  doValidation(pointValidations[2]),
  (...arg) => pointController.getEarningDetailsByPointId(...arg)
);

router.patch<
  PathParams<PointActionId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdatePointEarnDetailRequest>,
  QueryParams
>(
  "/earn/detail/:pointId",
  checkToken,
  doValidation(pointValidations[4]),
  (...arg) => pointController.updateEarningDetailsByPointId(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertPointRedeemRequest>,
  QueryParams
>("/redeem", checkToken, doValidation(pointValidations[5]), (...arg) =>
  pointController.insertRedeemingPoint(...arg)
);

router.get<
  PathParams,
  ResponseBody<Array<GetPointRedeemResponse>>,
  RequestBody,
  QueryParams
>("/redeems", checkToken, (...arg) => pointController.getPointRedeem(...arg));

router.get<
  PathParams<PointRedeemId>,
  ResponseBody<Array<GetPointRedeemDetailResponse>>,
  RequestBody,
  QueryParams
>(
  "/redeem/detail/:pointRedeemId",
  checkToken,
  doValidation(pointValidations[9]),
  (...arg) => pointController.getPointRedeemDetail(...arg)
);

router.patch<
  PathParams<PointRedeemDetailId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdatePointRedeemDetailRequest>,
  QueryParams
>(
  "/redeem/detail/:pointRedeemDetailId",
  checkToken,
  doValidation(pointValidations[10]),
  (...arg) => pointController.updatePointRedeemDetail(...arg)
);

router.delete<
  PathParams<PointRedeemDetailId>,
  ResponseBody<IEmptyObject>,
  RequestBody<IEmptyObject>,
  QueryParams
>(
  "/redeem/detail/:pointRedeemDetailId",
  checkToken,
  doValidation(pointValidations[11]),
  (...arg) => pointController.deletePointRedeemDetail(...arg)
);

module.exports = { router, basePath: "/api/point" };
