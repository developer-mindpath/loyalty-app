import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { doValidation } from "../helper/joi";
import embedValidations from "../requestValidator/accountEmbed";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { GetAccountEmbedResponse } from "../types/response/accountEmbed/getAccountEmbedResponse";
import { InsertAccountEmbedRequest } from "../types/request/accountEmbed/insertAccountEmbedRequest";
import { UpdateAccountEmbedRequest } from "../types/request/accountEmbed/updateAccountEmbedRequest";
import AccountEmbedController from "../controller/accountEmbedController";
import { checkToken } from "../middleware/checkToken";

const accountEmbedController = new AccountEmbedController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<GetAccountEmbedResponse>,
  RequestBody,
  QueryParams
>("/account", checkToken, (...arg) =>
  accountEmbedController.getAccountEmbed(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertAccountEmbedRequest>,
  QueryParams
>("/account", checkToken, doValidation(embedValidations[0]), (...arg) =>
  accountEmbedController.insertAccountEmbed(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateAccountEmbedRequest>,
  QueryParams
>("/account/:userId", checkToken, doValidation(embedValidations[1]), (...arg) =>
  accountEmbedController.updateAccountEmbed(...arg)
);

module.exports = { router, basePath: "/api/embed" };
