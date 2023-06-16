import { Repository } from "typeorm";
import AppDataSource from "../database";
import PaginationDTO from "../dto/paginationDTO";
import { CustomerModel } from "../database/models/customer";
import { GetCustomerResponse } from "../types/response/customer/getCustomerResponse";
import { GetCustomerDetailsResponse } from "../types/response/customer/getCustomerDetailsResponse";

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
        "customer.customer_type as status",
        "SUM(loyalityProgramActivity.point) as points",
        "vipProgramActivity.tier_title as vipTier",
        "customer.created_at as createdAt",
      ]);
    queryBuilder.where(`customer.user_id=${userId}`);

    if (paginationDTO.page && paginationDTO.limit) {
      const offset: number = paginationDTO.offset;
      queryBuilder.skip(offset).take(paginationDTO.limit);
    }
    queryBuilder.groupBy(
      "customer.id, customer.customer_name, customer.customer_email, customer.customer_type, customer.created_at, vipProgramActivity.tier_title"
    );
    queryBuilder.orderBy("createdAt", "DESC");
    return await queryBuilder.getRawMany();
  }

  public async getCustomerDetail(
    customerId: number
  ): Promise<GetCustomerDetailsResponse> {
    return {} as GetCustomerDetailsResponse;
    // const queryBuilder = this._customerModel
    //   .createQueryBuilder("customer")
    //   .innerJoinAndSelect(
    //     `customer.loyalityProgramActivity`,
    //     "loyalityProgramActivity"
    //   )
    //   .innerJoinAndSelect(`customer.referralProgramActivity`, "referralProgramActivity")
    //   .innerJoinAndSelect(`referralProgramActivity.referralModel`, "referralModel")
    //   .innerJoinAndSelect(`customer.vipProgramActivity`, "vipProgramActivity")
    //   .select([
    //     "customer.id as customerId",
    //     "customer.customer_name as customerName",
    //     "customer.customer_email as customerEmail",
    //     "customer.customer_type as customerType",
    //     "customer.customer_birthday as customerBirthday",
    //     "loyalityProgramActivity.point as points",
    //     "loyalityProgramActivity.point_action as pointAction",
    //     "loyalityProgramActivity.activity_date as pointDate",
    //     "loyalityProgramActivity.activity_date as referredFriend",
    //     "loyalityProgramActivity.activity_date as referralStatus",
    //     "loyalityProgramActivity.activity_date as referralOrderTotal",
    //     "loyalityProgramActivity.activity_date as referralUserLink",
    //     "loyalityProgramActivity.activity_date as referredAt",
    //     "vipProgramActivity.tier_title as vipTier",
    //     "customer.created_at as createdAt",
    //   ]);
    // queryBuilder.where(`customer.user_id=${userId}`);
    // queryBuilder.orderBy("createdAt", "DESC");
    // return await queryBuilder.getRawMany();
  }
}
