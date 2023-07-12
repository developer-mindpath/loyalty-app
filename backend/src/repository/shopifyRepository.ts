import axios from "axios";
import AppDataSource from "../database";
import { AccessTokenConfigurationModel } from "../database/models/accessTokenConfiguration";
import { Repository, UpdateResult } from "typeorm";
import { ShopifyOrderResponse } from "../types/response/dashboard/shopifyOrderResponse";
import { ShopifyCustomerResponse } from "../types/response/shopify/shopifyCustomerResponse";
import { ProductResponse } from "../types/response/product/productResponse";
import { CollectionResponse } from "../types/response/product/collectionResponse";

export class ShopifyRepository {
  //   private _baseUrl: string;
  private _accessTokenConfigurationModel: Repository<AccessTokenConfigurationModel>;
  constructor() {
    // this._baseUrl = baseUrl;
    this._accessTokenConfigurationModel = AppDataSource.getRepository(
      AccessTokenConfigurationModel
    );
  }

  public async getAccessTokenByCode(
    code: string,
    shop: string
  ): Promise<string> {
    const url = `https://${shop}/admin/oauth/access_token`;
    const data = {
      client_id: process.env.SHOPIFY_CLIENT_ID, // Your API key
      client_secret: process.env.SHOPIFY_CLIENT_SECRET, // Your app credentials (secret key)
      code,
    };
    const response = await axios.post(url, data);
    console.log(response.data);
    return response.data.access_token;
  }

  public async insertAccessToken(
    model: AccessTokenConfigurationModel
  ): Promise<AccessTokenConfigurationModel> {
    return await this._accessTokenConfigurationModel.save(model);
  }

  public async getAccessToken(
    service: string
  ): Promise<AccessTokenConfigurationModel | null> {
    const response = await this._accessTokenConfigurationModel.findOne({
      where: {
        serviceName: service,
      },
    });
    return response;
  }

  public async updateAccessToken(
    model: AccessTokenConfigurationModel
  ): Promise<UpdateResult> {
    return await this._accessTokenConfigurationModel.update(
      { serviceName: model.serviceName },
      { accessToken: model.accessToken }
    );
  }

  public async getAllOrders(
    accessToken: string,
    store: string
  ): Promise<Array<ShopifyOrderResponse>> {
    const apiUrl = `https://${store}/admin/api/2023-04/orders.json?status=any`;
    const response = await axios.get(apiUrl, {
      headers: {
        "X-Shopify-Access-Token": accessToken,
      },
    });
    return response.data.orders;
  }

  public async getShopifyCustomerDetailByUsingId(
    shopifyCustomerId: number,
    accessToken: string,
    storeName: string
  ): Promise<ShopifyCustomerResponse> {
    const apiUrl = `https://${storeName}/admin/api/2023-04/customers/${shopifyCustomerId}.json`;
    const response = await axios.get(apiUrl, {
      headers: {
        "X-Shopify-Access-Token": accessToken,
      },
    });
    return response.data.customer;
  }

  public async getShopifyOrderDetailsByUsingId(
    orderId: number,
    accessToken: string,
    storeName: string
  ): Promise<ShopifyOrderResponse> {
    const apiUrl = `https://${storeName}/admin/api/2023-04/orders/${orderId}.json`;
    const response = await axios.get(apiUrl, {
      headers: {
        "X-Shopify-Access-Token": accessToken,
      },
    });
    return response.data.order;
  }

  public async getProducts(
    storeName: string,
    accessToken: string
  ): Promise<Array<ProductResponse>> {
    const apiUrl = `https://${storeName}/admin/api/2023-04/products.json`;
    const response = await axios.get(apiUrl, {
      headers: {
        "X-Shopify-Access-Token": accessToken,
      },
    });
    return response.data.products;
  }

  public async getCollections(
    storeName: string,
    accessToken: string
  ): Promise<Array<CollectionResponse>> {
    const apiUrl = `https://${storeName}/admin/api/2023-04/custom_collections.json`;
    const response = await axios.get(apiUrl, {
      headers: {
        "X-Shopify-Access-Token": accessToken,
      },
    });
    return response.data.custom_collections;
  }
}
