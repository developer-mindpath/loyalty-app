import { StatusCodes } from "http-status-codes";
import LoginRequestDTO from "../dto/loginRequestDto";
import constants from "../constants";
import { ExpressError } from "../helper/errorHandler";
import LoginRepository from "../repository/loginRepository";
import { TLoginResponse } from "../types/response/loginResponse";
import { generateAuthToken } from "../helper/jwt";
import * as passwordHelper from "../helper/bcrypt";

export default class LoginService {
  private _loginRepository: LoginRepository;
  constructor() {
    this._loginRepository = new LoginRepository();
  }

  public async login(
    loginRequestDTO: LoginRequestDTO
  ): Promise<TLoginResponse> {
    const data = await this._loginRepository.login(loginRequestDTO.userName);

    if (!data) {
      throw new ExpressError(
        StatusCodes.BAD_REQUEST,
        constants.VALIDATION_MESSAGE.INVALID_CREDENTIALS
      );
    }

    const isValid = await passwordHelper.verifyPassword(
      loginRequestDTO.password,
      data.password
    );

    if (!isValid) {
      throw new ExpressError(
        StatusCodes.NOT_FOUND,
        constants.VALIDATION_MESSAGE.INVALID_CREDENTIALS
      );
    }

    return {
      token: generateAuthToken({
        userName: data.userName,
      }),
    };
  }
}
