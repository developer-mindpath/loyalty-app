import { TLoginRequest } from "../types/request/loginRequest";

export default class LoginRequestDTO {
  email: string;
  password: string;

  constructor(body: TLoginRequest) {
    this.email = body.email;
    this.password = body.password;
  }
}
