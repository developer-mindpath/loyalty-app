import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { checkShopifyWebhookRequest } from "../middleware/checkShopifyWebhookRequest";
import WebhookController from "../controller/webhookController";

const webhookController = new WebhookController();
export const webhookRoute = express.Router();

webhookRoute.post<PathParams, ResponseBody, RequestBody, QueryParams>(
  "/create/customer",
  checkShopifyWebhookRequest,
  (...arg) => webhookController.createCustomer(...arg)
);
