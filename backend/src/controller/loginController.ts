import { NextFunction, Request, Response } from "express";
import CustomRequest from "../types/request/customRequest";
import { TLoginResponse } from "../types/response/loginResponse";
import { TLoginRequest } from "../types/request/loginRequest";
import LoginService from "../services/loginService";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { StatusCodes } from "http-status-codes";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import LoginRequestDTO from "../dto/loginRequestDto";

export default class LoginController {
  private _loginService: LoginService;

  constructor() {
    this._loginService = new LoginService();
  }
  public async login(
    req: CustomRequest<IEmptyObject, TLoginResponse, TLoginRequest>,
    res: Response<APIResponse<TLoginResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<TLoginResponse>();
      const loginRequestDTO = new LoginRequestDTO(req.body);
      const loginResponse = await this._loginService.login(loginRequestDTO);
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = loginResponse;
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
