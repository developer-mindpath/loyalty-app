import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { GetPromptsParams, UpdatePromptsParams } from "../types/request/params";
import { doValidation } from "../helper/joi";
import promptsValidations from "../requestValidator/prompts";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { GetPromptsResponse } from "../types/response/prompts/getPromptsResponse";
import { InsertPromptsRequest } from "../types/request/prompts/insertPromptsRequest";
import { UpdatePromptsRequest } from "../types/request/prompts/updatePromptsRequest";
import PromptController from "../controller/promptController";

const promptController = new PromptController();
const router = express.Router();

router.get<
  PathParams<GetPromptsParams>,
  ResponseBody<GetPromptsResponse>,
  RequestBody,
  QueryParams
>("/boost/:userId", doValidation(promptsValidations[0]), (...arg) =>
  promptController.getPromptsSetting(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertPromptsRequest>,
  QueryParams
>("/boost", doValidation(promptsValidations[1]), (...arg) =>
  promptController.insertPromptsSetting(...arg)
);

router.patch<
  PathParams<UpdatePromptsParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdatePromptsRequest>,
  QueryParams
>("/boost/:userId", doValidation(promptsValidations[2]), (...arg) =>
  promptController.updatePromptsSetting(...arg)
);

module.exports = { router, basePath: "/api/prompts" };
