import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { GetCustomerParams, Pagination } from "../types/request/params";
import { doValidation } from "../helper/joi";
import customerValidations from "../requestValidator/customer";
import { GetCustomerResponse } from "../types/response/customer/getCustomerResponse";
import CustomerController from "../controller/customerController";

const customerController = new CustomerController();
const router = express.Router();

router.get<
  PathParams<GetCustomerParams>,
  ResponseBody<Array<GetCustomerResponse>>,
  RequestBody,
  QueryParams<Pagination>
>("/list/:userId", doValidation(customerValidations[0]), (...arg) =>
  customerController.getCustomers(...arg)
);

module.exports = { router, basePath: "/api/customer" };
