import jwt from "jsonwebtoken";
import { AuthTokenRequest } from "../../types/request/authTokenRequest";
import constants from "../../constants";
import { serverConfig } from "../../config";

export function generateAuthToken(
  payload: AuthTokenRequest,
  expiresIn = constants.TOKEN_EXPIRY.LOGIN_TOKEN
): string {
  return jwt.sign(payload, serverConfig.JWT_SECRET_KEY, {
    expiresIn: expiresIn,
  });
}

export async function verifyToken(token: string) {
  return await jwt.verify(token, serverConfig.JWT_SECRET_KEY);
}
