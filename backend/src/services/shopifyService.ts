import { ShopifyRepository } from "src/repository/shopifyRepository";

export class ShopifyService {
    private _shopifyRepository: ShopifyRepository;
    constructor(shopifyRepository: ShopifyRepository) {
        this._shopifyRepository = shopifyRepository;
    }

    public async getAccessTokenByCode(code: string) {
        return await this._shopifyRepository.getAccessTokenByCode(code);
    }
}
