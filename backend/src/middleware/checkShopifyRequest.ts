import { createHmac } from "crypto";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ExpressError } from "../helper/errorHandler";

export function checkShopifyRequest(request: Request, _res: Response, next: NextFunction) {
    const params = request.query;
    const hmac = params.hmac;
    const shopifyClientSecret = process.env.SHOPIFY_CLIENT_SECRET || '';
    const invalidRequestExpressError = new ExpressError(StatusCodes.BAD_REQUEST, 'Invalid request')
    if (!hmac || !shopifyClientSecret) {
        next(invalidRequestExpressError);
    }
    delete params.hmac; // Remove hmac from params
    const sortedParams = Object.fromEntries(Object.entries(params).sort());
    const data = Object.entries(sortedParams).map(([key, value]) => `${key}=${value}`).join('&');
    const myHmac = createHmac('sha256', shopifyClientSecret).update(data).digest('hex');
    if (hmac !== myHmac) {
        next(invalidRequestExpressError);
    }
    next();
} 
