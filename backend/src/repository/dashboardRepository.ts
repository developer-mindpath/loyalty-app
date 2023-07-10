import { GetDashboardResponse } from "../types/response/dashboard/getDashboardResponse";
import { Repository } from "typeorm";
import AppDataSource from "../database";
import { CustomerModel } from "../database/models/customer";
import axios from "axios";
import { ShopifyOrderResponse } from "../types/response/dashboard/shopifyOrderResponse";

export default class DashboardRepository {
  private _customerModel: Repository<CustomerModel>;
  constructor() {
    this._customerModel = AppDataSource.getRepository(CustomerModel);
  }

  public async getDashboard(
    userId: number
  ): Promise<GetDashboardResponse | null> {
    const queryBuilder = this._customerModel
      .createQueryBuilder("customer")
      .innerJoinAndSelect(
        `customer.loyalityProgramActivity`,
        "loyalityProgramActivity"
      )
      .select([
        "Count(customer.id) as loyaltyMember",
        "SUM(loyalityProgramActivity.point) as pointEarned",
      ]);
    queryBuilder.where(`customer.user_id=${userId}`);
    queryBuilder.andWhere(`customer.customer_type = 'Member'`);
    return (await queryBuilder.getRawMany()) as unknown as GetDashboardResponse;
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
}
