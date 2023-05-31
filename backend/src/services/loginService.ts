import { StatusCodes } from "http-status-codes";
import LoginRequestDTO from "../dto/loginRequestDto";
import constants from "../constants";
import { ExpressError } from "../helper/errorHandler";
import LoginRepository from "../repository/loginRepository";
import { TLoginResponse } from "../types/response/loginResponse";
import { generateAuthToken } from "../helper/jwt";

export default class LoginService {
  private _loginRepository: LoginRepository;
  constructor() {
    this._loginRepository = new LoginRepository();
  }

  public async login(
    loginRequestDTO: LoginRequestDTO
  ): Promise<TLoginResponse> {
    const data = await this._loginRepository.login(loginRequestDTO.email);

    if (!data) {
      throw new ExpressError(
        StatusCodes.BAD_REQUEST,
        constants.VALIDATION_MESSAGE.INVALID_CREDENTIALS
      );
    }

    // const isValid = await passwordHelper.verifyPassword(
    //   loginRequestDTO.password,
    //   data.password
    // );

    if (loginRequestDTO.password !== data.password) {
      throw new ExpressError(
        StatusCodes.NOT_FOUND,
        constants.VALIDATION_MESSAGE.INVALID_CREDENTIALS
      );
    }

    return {
      token: generateAuthToken({
        email: data.email,
        userId: data.id,
      }),
      user_id: data.id,
      admin_ref: data.admin_ref,
    };
  }
}
