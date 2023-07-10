import { Request, Response, Router } from "express";
import { ShopifyController } from "../controller/shopifyController";
import { ShopifyRepository } from "../repository/shopifyRepository";
import { ShopifyService } from "../services/shopifyService";
import { checkShopifyRequest } from "../middleware/checkShopifyRequest";

const authRouter = Router();

// const shopifyApiUrl = process.env.SHOPIFY_API_URL || 'https://loyalty-dev-test.myshopify.com';
const shopifyController = new ShopifyController(
  new ShopifyService(new ShopifyRepository())
);

authRouter.get("/install", async (request: Request, response: Response) => {
  await shopifyController.onInstall(request, response);
});

authRouter.get(
  "/authorize",
  checkShopifyRequest,
  async (request: Request, response: Response) => {
    await shopifyController.onAuthorize(request, response);
  }
);

module.exports = { router: authRouter, basePath: "/auth" };
