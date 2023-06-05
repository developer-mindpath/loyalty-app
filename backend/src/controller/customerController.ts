import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { GetCustomerParams, Pagination } from "../types/request/params";
import PaginationDTO from "../dto/paginationDTO";
import { GetCustomerResponse } from "../types/response/customer/getCustomerResponse";
import CustomerService from "../services/customerService";

export default class CustomerController {
  private _customerService: CustomerService;

  constructor() {
    this._customerService = new CustomerService();
  }

  public async getCustomers(
    req: CustomRequest<
      GetCustomerParams,
      GetCustomerResponse[],
      IEmptyObject,
      Pagination
    >,
    res: Response<APIResponse<GetCustomerResponse[]>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetCustomerResponse[]>();
      const paginationDTO = new PaginationDTO(req.query);
      const customerResponse = await this._customerService.getCustomers(
        req.params.userId,
        paginationDTO
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = customerResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }
}
