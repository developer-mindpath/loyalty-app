import { GetDashboardResponse } from "../types/response/dashboard/getDashboardResponse";
import DashboardRepository from "../repository/dashboardRepository";
import { GetDashboardSalesGeneratedResponse } from "../types/response/dashboard/getDashboardTotalSalesGeneratedResponse";
import { ShopifyService } from "./shopifyService";
import { ShopifyRepository } from "../repository/shopifyRepository";
import GetDashboardSalesDTO from "../dto/dashboard/getDashboardSalesDto";
import ShopifyHelper from "../helper/shopify/shopifyHelper";

export default class DashboardService {
  private _dashboardRepository: DashboardRepository;
  private _shopifyService: ShopifyService;
  private _shopifyHelper: ShopifyHelper;
  constructor() {
    this._dashboardRepository = new DashboardRepository();
    this._shopifyService = new ShopifyService(new ShopifyRepository());
    this._shopifyHelper = new ShopifyHelper();
  }

  public async getDashboard(userId: number): Promise<GetDashboardResponse> {
    const dashboardResponse = await this._dashboardRepository.getDashboard(
      userId
    );
    if (dashboardResponse) {
      return {
        loyaltyMember: dashboardResponse.loyaltyMember
          ? dashboardResponse.loyaltyMember
          : 0,
        RedemptionRate:
          dashboardResponse.loyaltyMember / dashboardResponse.pointEarned,
        pointEarned: dashboardResponse.pointEarned
          ? dashboardResponse.pointEarned
          : 0,
        widgetOpen: 0,
      } as unknown as GetDashboardResponse;
    }
    return dashboardResponse ? dashboardResponse : ({} as GetDashboardResponse);
  }

  public async getDashboardSalesGenerated(
    getDashboardSalesDto: GetDashboardSalesDTO
  ): Promise<GetDashboardSalesGeneratedResponse> {
    const serviceName = `${getDashboardSalesDto.storeName}:shopify`;
    const accessToken = await this._shopifyService.getAccessToken(serviceName);
    const orders = await this._shopifyService.getAllOrders(
      accessToken,
      getDashboardSalesDto.storeName
    );
    const totalSalesGenerated =
      this._shopifyHelper.getTotalSalesGenerated(orders);
    const retentionRevenue = this._shopifyHelper.getRetentionRevenue(
      orders,
      getDashboardSalesDto
    );
    const incentivizedRevenue = this._shopifyHelper.getIncentivizedRevenue(
      orders,
      getDashboardSalesDto.discountCode
    );
    const conversionRevenue = this._shopifyHelper.getConversionRevenue(
      orders,
      getDashboardSalesDto.interactionTimeFrame
    );
    const referralRevenue = this._shopifyHelper.getReferralRevenue(
      orders,
      getDashboardSalesDto.referralSource
    );
    return {
      total: totalSalesGenerated,
      retentionRevenue: retentionRevenue,
      incentivizedRevenue: incentivizedRevenue,
      conversionRevenue: conversionRevenue,
      referralRevenue: referralRevenue,
    };
  }
}
