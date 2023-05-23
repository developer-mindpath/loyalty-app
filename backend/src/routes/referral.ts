import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { InsertReferralProgramRequest } from "../types/request/referral/insertReferralProgramRequest";
import ReferralController from "../controller/referralController";
import {
  DeleteReferralProgramParams,
  GetReferralProgramParams,
  UpdateReferralProgramParams,
} from "../types/request/params";
import { GetReferralProgramResponse } from "../types/response/referral/getReferralProgramResponse";
import { UpdateReferralProgramRequest } from "../types/request/referral/updateReferralProgramRequest";

const referralController = new ReferralController();
const router = express.Router();

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertReferralProgramRequest>,
  QueryParams
>("/program", (...arg) => referralController.insertReferralProgram(...arg));

router.get<
  PathParams<GetReferralProgramParams>,
  ResponseBody<GetReferralProgramResponse>,
  RequestBody,
  QueryParams
>("/program/:referralId/:userId", (...arg) =>
  referralController.getReferralProgram(...arg)
);

router.patch<
  PathParams<UpdateReferralProgramParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateReferralProgramRequest>,
  QueryParams
>("/program/:referralId", (...arg) =>
  referralController.updateReferralProgram(...arg)
);

router.delete<
  PathParams<DeleteReferralProgramParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<IEmptyObject>,
  QueryParams
>("/program/:referralId", (...arg) =>
  referralController.deleteReferralProgram(...arg)
);

module.exports = { router, basePath: "/api/referral" };
