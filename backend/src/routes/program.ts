import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { doValidation } from "../helper/joi";
import programValidations from "../requestValidator/program";
import { checkToken } from "../middleware/checkToken";
import { InsertProgramStatusRequest } from "../types/request/program/insertProgramStatusRequest";
import { GetProgramStatusResponse } from "../types/response/program/getProgramStatusResponse";
import { UpdateProgramStatusRequest } from "../types/request/program/updateProgramStatusRequest";
import ProgramController from "../controller/programController";

const programController = new ProgramController();
const router = express.Router();

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertProgramStatusRequest>,
  QueryParams
>("/status", checkToken, doValidation(programValidations[0]), (...arg) =>
  programController.insertProgramStatus(...arg)
);

router.get<
  PathParams,
  ResponseBody<GetProgramStatusResponse>,
  RequestBody,
  QueryParams
>("/status", checkToken, (...arg) =>
  programController.getProgramStatus(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateProgramStatusRequest>,
  QueryParams
>("/status", checkToken, doValidation(programValidations[1]), (...arg) =>
  programController.updateProgramStatus(...arg)
);

module.exports = { router, basePath: "/api/program" };
