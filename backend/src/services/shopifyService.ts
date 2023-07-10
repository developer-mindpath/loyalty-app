import { AccessTokenConfigurationModel } from "../database/models/accessTokenConfiguration";
import { ShopifyRepository } from "../repository/shopifyRepository";

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
}
