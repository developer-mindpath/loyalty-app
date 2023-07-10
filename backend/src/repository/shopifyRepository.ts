import axios from "axios";
import AppDataSource from "../database";
import { AccessTokenConfigurationModel } from "../database/models/accessTokenConfiguration";
import { Repository, UpdateResult } from "typeorm";

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
}
