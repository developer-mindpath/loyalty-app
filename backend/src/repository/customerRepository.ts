import { Repository } from "typeorm";
import AppDataSource from "../database";
import PaginationDTO from "../dto/paginationDTO";
import { CustomerModel } from "../database/models/customer";
import { GetCustomerResponse } from "../types/response/customer/getCustomerResponse";
import { MembersWithDate } from "../types/response/analytics/getAnalyticsResponse";
import GetAnalyticsDTO from "../dto/analytics/getAnalyticsDTO";

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
  ): Promise<Record<string, string | number> | undefined> {
    const queryBuilder = this._customerModel
      .createQueryBuilder("customer")
      .select([
        "customer.id as customerId",
        "customer.customer_name as customerName",
        "customer.customer_email as customerEmail",
        "customer.customer_type as customerType",
        "customer.customer_birthday as customerBirthday",
        "customer.created_at as createdAt",
      ]);
    queryBuilder.where(`customer.id=${customerId}`);
    return await queryBuilder.getRawOne();
  }

  public async getCustomersCount(
    getAnalyticsDTO: GetAnalyticsDTO
  ): Promise<Record<string, number> | undefined> {
    const queryBuilder = this._customerModel
      .createQueryBuilder("customer")
      .select(["COUNT(customer.id) as count"]);
    queryBuilder.where(`customer.user_id=${getAnalyticsDTO.user_id}`);
    queryBuilder.andWhere(`customer.customer_type='Member'`);
    queryBuilder.andWhere(
      "Date(customer.customer_joining_date) BETWEEN :startDate AND :endDate",
      {
        startDate: getAnalyticsDTO.periodDTO.startDate,
        endDate: getAnalyticsDTO.periodDTO.endDate,
      }
    );
    return await queryBuilder.getRawOne();
  }

  public async getCustomersCountWithDate(
    getAnalyticsDTO: GetAnalyticsDTO
  ): Promise<Array<MembersWithDate>> {
    const queryBuilder = this._customerModel
      .createQueryBuilder("customer")
      .select([
        "COUNT(customer.id) as count",
        "Date(customer.customer_joining_date) as date",
      ]);
    queryBuilder.where(`customer.user_id=${getAnalyticsDTO.user_id}`);
    queryBuilder.andWhere(
      "Date(customer.customer_joining_date) BETWEEN :startDate AND :endDate",
      {
        startDate: getAnalyticsDTO.periodDTO.startDate,
        endDate: getAnalyticsDTO.periodDTO.endDate,
      }
    );
    queryBuilder.groupBy("Date(customer.customer_joining_date)");
    return await queryBuilder.getRawMany();
  }
}
