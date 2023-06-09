import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { CustomerId, Pagination } from "../types/request/params";
import PaginationDTO from "../dto/paginationDTO";
import { GetCustomerResponse } from "../types/response/customer/getCustomerResponse";
import CustomerService from "../services/customerService";
import { GetCustomerDetailsResponse } from "../types/response/customer/getCustomerDetailsResponse";

export default class CustomerController {
  private _customerService: CustomerService;

  constructor() {
    this._customerService = new CustomerService();
  }

  public async getCustomers(
    req: CustomRequest<
      IEmptyObject,
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
        req.userId!,
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

  public async getCustomerDetail(
    req: CustomRequest<
      CustomerId,
      GetCustomerDetailsResponse,
      IEmptyObject,
      IEmptyObject
    >,
    res: Response<APIResponse<GetCustomerDetailsResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetCustomerDetailsResponse>();
      const customerResponse = await this._customerService.getCustomerDetail(
        req.params.customerId
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
