import crypto from "crypto";
import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ExpressError } from "../helper/errorHandler";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import CustomRequest from "../types/request/customRequest";

export async function checkShopifyWebhookRequest(
  req: CustomRequest<IEmptyObject, IEmptyObject, IEmptyObject, IEmptyObject>,
  res: Response,
  next: NextFunction
) {
  const headers = req.headers;
  const hmac = headers["x-shopify-hmac-sha256"];
  const shopifyWebhookSecret = process.env.SHOPIFY_WEBHOOK_CLIENT_SECRET || "";
  const invalidRequestExpressError = new ExpressError(
    StatusCodes.BAD_REQUEST,
    "Invalid request"
  );
  if (!hmac || !shopifyWebhookSecret) {
    next(invalidRequestExpressError);
  }
  const data = req.body.toString();
  const hash = crypto
    .createHmac("sha256", shopifyWebhookSecret)
    .update(data)
    .digest("base64");

  // Compare our hash to Shopify's hash
  if (hash !== hmac) {
    next(invalidRequestExpressError);
  }
  next();
}
