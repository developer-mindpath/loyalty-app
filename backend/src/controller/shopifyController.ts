import { Request, Response } from "express";
import { ShopifyService } from "../services/shopifyService";

export class ShopifyController {
  private _shopifyService: ShopifyService;
  constructor(shopifyService: ShopifyService) {
    this._shopifyService = shopifyService;
  }

  public async onInstall(request: Request, response: Response) {
    const { shop } = request.query;
    const client_id = process.env.SHOPIFY_CLIENT_ID;
    const scopes = process.env.SHOPIFY_SCOPES;
    const appUrl = process.env.APP_URL;
    const redirect_uri = `${appUrl}/auth/authorize`;
    const url = `https://${shop}/admin/oauth/authorize?client_id=${client_id}&scope=${scopes}&redirect_uri=${redirect_uri}`;
    console.log(url);
    response.redirect(url);
  }

  public async onAuthorize(request: Request, response: Response) {
    const code = request.query.code as string;
    const shop = request.query.shop as string;
    const timestamp = request.query.timestamp;
    console.log("timestamp : ", timestamp);
    console.log("shop : ", shop);
    await this._shopifyService.getAccessTokenByCodeAndInsert(code, shop);
    return response.status(200).send();
  }
}
