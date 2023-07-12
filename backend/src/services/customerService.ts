import { UpdateResult } from "typeorm";
import PaginationDTO from "../dto/paginationDTO";
import { GetCustomerResponse } from "../types/response/customer/getCustomerResponse";
import CustomerRepository from "../repository/customerRepository";
import { MembersWithDate } from "../types/response/analytics/getAnalyticsResponse";
import GetAnalyticsDTO from "../dto/analytics/getAnalyticsDTO";
import VipProgramActivityService from "./vipProgramActivityService";
import { GetCustomerDetailsResponse } from "../types/response/customer/getCustomerDetailsResponse";
import LoyaltyProgramActivityService from "./loyaltyProgramActivityService";
import InsertCustomerRequestDTO from "../dto/webhook/insertCustomerRequestDto";
import UpdateCustomerRequestDTO from "../dto/webhook/updateCustomerRequestDto";
import { ShopifyService } from "./shopifyService";
import { ShopifyRepository } from "../repository/shopifyRepository";

export default class CustomerService {
  private _customerRepository: CustomerRepository;
  private _vipProgramActivityService: VipProgramActivityService;
  private _loyaltyProgramActivityService: LoyaltyProgramActivityService;
  private _shopifyService: ShopifyService;
  constructor() {
    this._customerRepository = new CustomerRepository();
    this._vipProgramActivityService = new VipProgramActivityService();
    this._loyaltyProgramActivityService = new LoyaltyProgramActivityService();
    this._shopifyService = new ShopifyService(new ShopifyRepository());
  }

  public async getCustomers(
    userId: number,
    paginationDTO: PaginationDTO
  ): Promise<Array<GetCustomerResponse>> {
    return await this._customerRepository.getCustomers(userId, paginationDTO);
  }

  public async getCustomerDetail(
    customerId: number,
    storeName: string
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
    const shopifyCustomerId = customerDetails?.shopifyCustomerId
      ? customerDetails.shopifyCustomerId
      : 0;
    const serviceName = `${storeName}:shopify`;
    const accessToken = await this._shopifyService.getAccessToken(serviceName);
    const shopifyCustomerDetailsById =
      await this._shopifyService.getShopifyCustomerDetailByUsingId(
        Number(shopifyCustomerId),
        accessToken,
        storeName
      );
    const shopifyOrderDetailsById =
      await this._shopifyService.getShopifyOrderDetailsByUsingId(
        shopifyCustomerDetailsById.last_order_id,
        accessToken,
        storeName
      );

    let recentOrderResponse = {};
    if (shopifyOrderDetailsById) {
      recentOrderResponse = {
        order: shopifyOrderDetailsById.name,
        patmentStatus: shopifyOrderDetailsById.financial_status,
        total: shopifyOrderDetailsById.total_price,
        date: new Date(shopifyOrderDetailsById.created_at),
      };
    }
    return {
      ...customerDetailResponse,
      points: customerPointDetails,
      vip: vipDetails,
      recentOrders: recentOrderResponse,
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

  public async createCustomer(
    insertCustomerRequestDTO: InsertCustomerRequestDTO
  ): Promise<void> {
    return await this._customerRepository.createCustomer(
      insertCustomerRequestDTO
    );
  }

  public async updateCustomer(
    updateCustomerRequestDTO: UpdateCustomerRequestDTO
  ): Promise<UpdateResult> {
    return await this._customerRepository.updateCustomer(
      updateCustomerRequestDTO
    );
  }
}
