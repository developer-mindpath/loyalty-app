import { ShopifyOrderResponse } from "../types/response/dashboard/shopifyOrderResponse";
import { AccessTokenConfigurationModel } from "../database/models/accessTokenConfiguration";
import { ShopifyRepository } from "../repository/shopifyRepository";
import { ShopifyCustomerResponse } from "../types/response/shopify/shopifyCustomerResponse";
import { ProductResponse } from "../types/response/product/productResponse";
import { CollectionResponse } from "../types/response/product/collectionResponse";

export class ShopifyService {
  private _shopifyRepository: ShopifyRepository;
  constructor(shopifyRepository: ShopifyRepository) {
    this._shopifyRepository = shopifyRepository;
  }

  public async getAccessTokenByCodeAndInsert(
    code: string,
    shop: string
  ): Promise<void> {
    const accessToken = await this._shopifyRepository.getAccessTokenByCode(
      code,
      shop
    );
    const serviceName = `${shop}:shopify`;
    await this._shopifyRepository.getAccessToken(serviceName);
    let model = new AccessTokenConfigurationModel();
    model.accessToken = accessToken;
    model.serviceName = serviceName;
    await this._shopifyRepository.insertAccessToken(model);
  }

  public async getAccessToken(serviceName: string): Promise<string> {
    const response = await this._shopifyRepository.getAccessToken(serviceName);
    return response?.accessToken ? response.accessToken : "";
  }

  public async getAllOrders(
    accessToken: string,
    store: string
  ): Promise<Array<ShopifyOrderResponse>> {
    return await this._shopifyRepository.getAllOrders(accessToken, store);
  }

  public async getShopifyCustomerDetailByUsingId(
    shopifyCustomerId: number,
    accessToken: string,
    storeName: string
  ): Promise<ShopifyCustomerResponse> {
    return await this._shopifyRepository.getShopifyCustomerDetailByUsingId(
      shopifyCustomerId,
      accessToken,
      storeName
    );
  }

  public async getShopifyOrderDetailsByUsingId(
    orderId: number,
    accessToken: string,
    storeName: string
  ): Promise<ShopifyOrderResponse> {
    return await this._shopifyRepository.getShopifyOrderDetailsByUsingId(
      orderId,
      accessToken,
      storeName
    );
  }

  public async getProducts(
    storeName: string,
    accessToken: string
  ): Promise<Array<ProductResponse>> {
    return await this._shopifyRepository.getProducts(storeName, accessToken);
  }

  public async getCollections(
    storeName: string,
    accessToken: string
  ): Promise<Array<CollectionResponse>> {
    return await this._shopifyRepository.getCollections(storeName, accessToken);
  }
}
