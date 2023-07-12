import { ShopifyService } from "./shopifyService";
import { ShopifyRepository } from "../repository/shopifyRepository";
import { ProductResponse } from "../types/response/product/productResponse";
import { CollectionResponse } from "../types/response/product/collectionResponse";

export default class ProductService {
  private _shopifyService: ShopifyService;
  constructor() {
    this._shopifyService = new ShopifyService(new ShopifyRepository());
  }

  public async getProducts(storeName: string): Promise<Array<ProductResponse>> {
    const serviceName = `${storeName}:shopify`;
    const accessToken = await this._shopifyService.getAccessToken(serviceName);
    const products = await this._shopifyService.getProducts(
      storeName,
      accessToken
    );
    let productArray = products.map((product) => {
      return {
        id: product.id,
        title: product.title,
      };
    });
    return productArray.length > 0 ? productArray : [];
  }

  public async getCollections(
    storeName: string
  ): Promise<Array<CollectionResponse>> {
    const serviceName = `${storeName}:shopify`;
    const accessToken = await this._shopifyService.getAccessToken(serviceName);
    const collections = await this._shopifyService.getCollections(
      storeName,
      accessToken
    );
    let collectionArray = collections.map((collection) => {
      return {
        id: collection.id,
        title: collection.title,
      };
    });
    return collectionArray.length > 0 ? collectionArray : [];
  }
}
