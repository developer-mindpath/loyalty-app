import APIUtils from "../utils/api";

interface ILoginRequest {
  email: string;
  password: string;
}

class AuthService {
  public static async login(payload: ILoginRequest) {
    const response = await APIUtils.send({
      url: "/login",
      method: "POST",
      data: payload,
    });

    return response.data;
  }
}

export default AuthService;
