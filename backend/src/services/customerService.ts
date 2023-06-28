import PaginationDTO from "../dto/paginationDTO";
import { GetCustomerResponse } from "../types/response/customer/getCustomerResponse";
import CustomerRepository from "../repository/customerRepository";
import { MembersWithDate } from "../types/response/analytics/getAnalyticsResponse";
import GetAnalyticsDTO from "../dto/analytics/getAnalyticsDTO";
import VipProgramActivityService from "./vipProgramActivityService";
import { GetCustomerDetailsResponse } from "../types/response/customer/getCustomerDetailsResponse";
import LoyaltyProgramActivityService from "./loyaltyProgramActivityService";

export default class CustomerService {
  private _customerRepository: CustomerRepository;
  private _vipProgramActivityService: VipProgramActivityService;
  private _loyaltyProgramActivityService: LoyaltyProgramActivityService;
  constructor() {
    this._customerRepository = new CustomerRepository();
    this._vipProgramActivityService = new VipProgramActivityService();
    this._loyaltyProgramActivityService = new LoyaltyProgramActivityService();
  }

  public async getCustomers(
    userId: number,
    paginationDTO: PaginationDTO
  ): Promise<Array<GetCustomerResponse>> {
    return await this._customerRepository.getCustomers(userId, paginationDTO);
  }

  public async getCustomerDetail(
    customerId: number
  ): Promise<GetCustomerDetailsResponse> {
    const customerDetails = await this._customerRepository.getCustomerDetail(
      customerId
    );
    const customerPointDetails =
      await this._loyaltyProgramActivityService.getCustomerPointDetails(
        customerId
      );

    let customerDetailResponse = {};
    if (customerDetails) {
      customerDetailResponse = {
        customerId: customerDetails.customerId,
        customerName: customerDetails.customerName
          ? customerDetails.customerName
          : "",
        customerEmail: customerDetails.customerEmail
          ? customerDetails.customerEmail
          : "",
        customerType: customerDetails.customerType
          ? customerDetails.customerType
          : "",
        customerBirthday: customerDetails.customerBirthday
          ? customerDetails.customerBirthday
          : "",
        createdAt: customerDetails.createdAt
          ? new Date(customerDetails.createdAt)
          : "",
      };
    }
    const vipDetails = await this._vipProgramActivityService.getVipDetail(
      customerId
    );
    return {
      ...customerDetailResponse,
      points: customerPointDetails,
      vip: vipDetails,
    } as GetCustomerDetailsResponse;
  }

  public async getCustomersCount(
    getAnalyticsDTO: GetAnalyticsDTO
  ): Promise<Record<string, number> | undefined> {
    return await this._customerRepository.getCustomersCount(getAnalyticsDTO);
  }

  public async getCustomersCountWithDate(
    getAnalyticsDTO: GetAnalyticsDTO
  ): Promise<Array<MembersWithDate>> {
    return await this._customerRepository.getCustomersCountWithDate(
      getAnalyticsDTO
    );
  }
}
