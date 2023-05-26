import express from "express";
import { TLoginRequest } from "../types/request/loginRequest";
import { TLoginResponse } from "../types/response/loginResponse";
import LoginController from "../controller/loginController";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { doValidation } from "../helper/joi";
import loginValidations from "../requestValidator/login";

const loginController = new LoginController();
const router = express.Router();

router.post<
  PathParams,
  ResponseBody<TLoginResponse>,
  RequestBody<TLoginRequest>,
  QueryParams
>("/login", doValidation(loginValidations[0]), (...arg) =>
  loginController.login(...arg)
);

module.exports = { router, basePath: "/api" };
