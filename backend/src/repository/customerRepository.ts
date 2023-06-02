import { Repository } from "typeorm";
import AppDataSource from "../database";
import PaginationDTO from "../dto/paginationDTO";
import { CustomerModel } from "../database/models/customer";
import { GetCustomerResponse } from "../types/response/customer/getCustomerResponse";

export default class CustomerRepository {
  private _customerModel: Repository<CustomerModel>;
  constructor() {
    this._customerModel = AppDataSource.getRepository(CustomerModel);
  }

  public async getCustomers(
    userId: number,
    paginationDTO: PaginationDTO
  ): Promise<GetCustomerResponse[]> {
    const queryBuilder = this._customerModel
      .createQueryBuilder("customer")
      .innerJoinAndSelect(
        `customer.loyalityProgramActivity`,
        "loyalityProgramActivity"
      )
      .innerJoinAndSelect(`customer.vipProgramActivity`, "vipProgramActivity")
      .select([
        "customer.id as customerId",
        "customer.customer_name as customerName",
        "customer.customer_email as customerEmail",
        "customer.status as status",
        "loyalityProgramActivity.point as points",
        "vipProgramActivity.tier_title as vipTier",
        "customer.created_at as createdAt",
      ]);
    queryBuilder.where(`customer.user_id=${userId}`);

    if (paginationDTO.page && paginationDTO.limit) {
      const offset: number = paginationDTO.offset;
      queryBuilder.skip(offset).take(paginationDTO.limit);
    }
    queryBuilder.orderBy("customer.created_at", "DESC");
    return await queryBuilder.getRawMany();
  }
}
