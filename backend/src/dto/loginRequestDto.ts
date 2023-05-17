import { TLoginRequest } from "../types/request/loginRequest";

export default class LoginRequestDTO {
  userName: string;
  password: string;

  constructor(body: TLoginRequest) {
    this.userName = body.userName || "";
    this.password = body.password;
  }
}
