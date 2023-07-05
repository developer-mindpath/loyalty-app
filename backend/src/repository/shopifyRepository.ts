import axios from 'axios';

export class ShopifyRepository {
    private _baseUrl: string;
    constructor(baseUrl: string) {
        this._baseUrl = baseUrl;
    }

    public async getAccessTokenByCode(code: string) {
        const url = `${this._baseUrl}/admin/oauth/access_token`;
        const data = {
            client_id: process.env.SHOPIFY_CLIENT_ID, // Your API key
            client_secret: process.env.SHOPIFY_CLIENT_SECRET, // Your app credentials (secret key)
            code,
        }
        const response = await axios.post(url, data);
        console.log(response.data);
    }
}
