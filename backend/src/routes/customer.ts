import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import {
  CustomerDetailsParams,
  CustomerId,
  Pagination,
} from "../types/request/params";
import { doValidation } from "../helper/joi";
import customerValidations from "../requestValidator/customer";
import { GetCustomerResponse } from "../types/response/customer/getCustomerResponse";
import CustomerController from "../controller/customerController";
import { checkToken } from "../middleware/checkToken";
import { GetCustomerDetailsResponse } from "../types/response/customer/getCustomerDetailsResponse";

const customerController = new CustomerController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<Array<GetCustomerResponse>>,
  RequestBody,
  QueryParams<Pagination>
>("/list", checkToken, doValidation(customerValidations[0]), (...arg) =>
  customerController.getCustomers(...arg)
);

router.get<
  PathParams<CustomerId>,
  ResponseBody<GetCustomerDetailsResponse>,
  RequestBody,
  QueryParams<CustomerDetailsParams>
>("/detail/:customerId", checkToken, (...arg) =>
  customerController.getCustomerDetail(...arg)
);

module.exports = { router, basePath: "/api/customer" };
