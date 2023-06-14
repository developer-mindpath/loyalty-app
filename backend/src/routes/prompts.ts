import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { doValidation } from "../helper/joi";
import promptsValidations from "../requestValidator/prompts";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { GetPromptsResponse } from "../types/response/prompts/getPromptsResponse";
import { InsertPromptsRequest } from "../types/request/prompts/insertPromptsRequest";
import { UpdatePromptsRequest } from "../types/request/prompts/updatePromptsRequest";
import PromptController from "../controller/promptController";
import { checkToken } from "../middleware/checkToken";

const promptController = new PromptController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<GetPromptsResponse>,
  RequestBody,
  QueryParams
>("/boost", checkToken, (...arg) => promptController.getPromptsSetting(...arg));

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertPromptsRequest>,
  QueryParams
>("/boost", checkToken, doValidation(promptsValidations[0]), (...arg) =>
  promptController.insertPromptsSetting(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdatePromptsRequest>,
  QueryParams
>("/boost", checkToken, doValidation(promptsValidations[1]), (...arg) =>
  promptController.updatePromptsSetting(...arg)
);

module.exports = { router, basePath: "/api/prompts" };
