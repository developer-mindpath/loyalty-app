import { GetAnalyticsResponse } from "../types/response/analytics/getAnalyticsResponse";
import CustomerService from "./customerService";
import PointService from "./pointService";
import PointRedeemService from "./pointRedeemService";
import GetAnalyticsDTO from "../dto/analytics/getAnalyticsDTO";
import GetReferralsAnalyticsDTO from "../dto/analytics/getReferralsAnalyticsDTO";
import { GetReferralsAnalyticsResponse } from "../types/response/analytics/getReferralsAnalyticsResponse";
import ShopifyHelper from "../helper/shopify/shopifyHelper";
import { ShopifyService } from "./shopifyService";
import { ShopifyRepository } from "../repository/shopifyRepository";

export default class AnalyticsService {
  private _customerService: CustomerService;
  private _pointService: PointService;
  private _pointRedeemService: PointRedeemService;
  private _shopifyService: ShopifyService;
  private _shopifyHelper: ShopifyHelper;
  constructor() {
    this._customerService = new CustomerService();
    this._pointService = new PointService();
    this._pointRedeemService = new PointRedeemService();
    this._shopifyService = new ShopifyService(new ShopifyRepository());
    this._shopifyHelper = new ShopifyHelper();
  }

  public async getAnalytics(
    getAnalyticsDTO: GetAnalyticsDTO
  ): Promise<GetAnalyticsResponse> {
    const customersCount = await this._customerService.getCustomersCount(
      getAnalyticsDTO
    );
    const customersWithDateCount =
      await this._customerService.getCustomersCountWithDate(getAnalyticsDTO);
    const earningPoints = await this._pointService.getEarningPoints(
      getAnalyticsDTO
    );
    const earningPointsWithDate =
      await this._pointService.getEarningPointsWithDate(getAnalyticsDTO);

    const spentPoints = await this._pointRedeemService.getSpentPoints(
      getAnalyticsDTO
    );
    const spentPointsWithDate =
      await this._pointRedeemService.getSpentPointsWithDate(getAnalyticsDTO);
    const earningPoint = earningPoints?.points_amounts
      ? earningPoints.points_amounts
      : 0;
    const spentPoint = spentPoints?.spent_amount ? spentPoints.spent_amount : 0;
    return {
      member: customersCount?.count ? customersCount.count : 0,
      pointsEarn: earningPoint,
      pointsSpent: spentPoint,
      redemptionRate: ((spentPoint * 100) / earningPoint).toFixed(1),
      membersWithDate:
        customersWithDateCount.length > 0 ? customersWithDateCount : [],
      earningPointsWithDate:
        earningPointsWithDate.length > 0 ? earningPointsWithDate : [],
      spentPointsWithDate:
        spentPointsWithDate.length > 0 ? spentPointsWithDate : [],
    };
  }

  public async getReferralsAnalytics(
    getReferralsAnalyticsDTO: GetReferralsAnalyticsDTO
  ): Promise<GetReferralsAnalyticsResponse> {
    const serviceName = `${getReferralsAnalyticsDTO.shopName}:shopify`;
    const accessToken = await this._shopifyService.getAccessToken(serviceName);
    const orders = await this._shopifyService.getAllOrders(
      accessToken,
      getReferralsAnalyticsDTO.shopName
    );
    const revenueAttributed = this._shopifyHelper.getReferralRevenue(
      orders,
      getReferralsAnalyticsDTO.referralSource
    );
    const referralsCompleted = this._shopifyHelper.getReferralsCompleted(
      orders,
      getReferralsAnalyticsDTO.referralCompletedTag
    );
    const ordersGenerated = this._shopifyHelper.getReferredOrdersGenerated(
      orders,
      getReferralsAnalyticsDTO.referredCustomerTag
    );
    return {
      revenueAttributed: revenueAttributed,
      referralsTraffic: 0,
      referralsCompleted: referralsCompleted,
      ordersGenerated: ordersGenerated,
    };
  }
}
