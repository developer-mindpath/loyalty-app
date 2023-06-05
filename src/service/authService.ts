// import { IResponseWithBody } from "../types";
// import APIUtils from "../utils/api";

import { IResponseWithBody } from "../types";
import APIUtils from "../utils/api";

interface ILoginRequest {
  email: string;
  password: string;
}

interface ILoginResponse {
  token: string;
}

/**
 * Auth Service
 */
class AuthService {
  /**
   * Login
   * @param {ILoginRequest} payload Login Payload
   * @returns {ILoginResponse}
   */
  public static async login(payload: ILoginRequest): Promise<ILoginResponse> {
    const response = await APIUtils.send<IResponseWithBody<ILoginResponse>>({
      url: "/api/login",
      method: "POST",
      data: payload,
    });

    return response.data.body;
  }
}

export default AuthService;
