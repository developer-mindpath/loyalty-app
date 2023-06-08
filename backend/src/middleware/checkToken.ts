import { StatusCodes } from "http-status-codes";
import { Response, NextFunction } from "express";
import { verifyToken } from "../helper/jwt";
import constants from "../constants";
import CustomRequest from "../types/request/customRequest";
import { ExpressError } from "../helper/errorHandler";

export async function checkToken(
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req.headers.authorization) {
      return next(constants.TOKEN_EXPIRY.TOKEN_MISSING);
    }
    const token = req.headers.authorization.split("Bearer")[1].trim();
    const payload = await verifyToken(token);
    req.userId = payload.userId;
    req.adminRef = payload.adminRef;
    if (!req.userId || !req.adminRef) {
      throw new ExpressError(
        StatusCodes.UNAUTHORIZED,
        constants.VALIDATION_MESSAGE.INVALID_TOKEN
      );
    }
    next();
  } catch (error) {
    return next(error);
  }
}
