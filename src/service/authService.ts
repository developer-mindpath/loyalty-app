import APIUtils from "../utils/api";

interface ILoginRequest {
  email: string;
  password: string;
}

interface ILoginResponse {
  data: {
    token: string;
  };
}

class AuthService {
  public static async login(payload: ILoginRequest): Promise<ILoginResponse> {
    const response = await APIUtils.send<ILoginResponse>({
      url: "/login",
      method: "POST",
      data: payload,
    });

    return response.data;
  }
}

export default AuthService;
