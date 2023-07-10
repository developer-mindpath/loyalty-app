import { GetAnalyticsResponse } from "../types/response/analytics/getAnalyticsResponse";
import CustomerService from "./customerService";
import PointService from "./pointService";
import PointRedeemService from "./pointRedeemService";
import GetAnalyticsDTO from "../dto/analytics/getAnalyticsDTO";
import GetReferralsAnalyticsDTO from "../dto/analytics/getReferralsAnalyticsDTO";
import { GetReferralsAnalyticsResponse } from "../types/response/analytics/getReferralsAnalyticsResponse";
import DashboardService from "./dashboardService";
import { ShopifyOrderResponse } from "../types/response/dashboard/shopifyOrderResponse";

export default class AnalyticsService {
  private _customerService: CustomerService;
  private _pointService: PointService;
  private _pointRedeemService: PointRedeemService;
  private _dashboardService: DashboardService;
  constructor() {
    this._customerService = new CustomerService();
    this._pointService = new PointService();
    this._pointRedeemService = new PointRedeemService();
    this._dashboardService = new DashboardService();
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
    const orders = await this._dashboardService.getOrders(
      getReferralsAnalyticsDTO.shopName
    );
    const revenueAttributed = this._getReferralRevenue(
      orders,
      getReferralsAnalyticsDTO.referralSource
    );

    const referralsCompleted = this._getReferralsCompleted(
      orders,
      getReferralsAnalyticsDTO.referralCompletedTag
    );

    const ordersGenerated = this._getReferredOrdersGenerated(
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

  private _getReferralRevenue(
    orders: Array<ShopifyOrderResponse>,
    referralSource: string
  ): number {
    // Filter orders by referral source
    const referralOrders = orders.filter((order: ShopifyOrderResponse) => {
      return (
        order.source_name &&
        order.source_name.toLowerCase() === referralSource.toLowerCase()
      );
    });
    // Calculate referral revenue
    const referralRevenue = referralOrders.reduce(
      (totalRevenue: number, order: ShopifyOrderResponse) => {
        return totalRevenue + parseFloat(order.total_price);
      },
      0
    );
    return referralRevenue;
  }

  private _getReferralsCompleted(
    orders: Array<ShopifyOrderResponse>,
    referralCompletedTag: string
  ): number {
    const completedReferrals: Set<string> = new Set();

    // Track completed referrals
    for (const order of orders) {
      if (order.tags && order.tags.includes(referralCompletedTag)) {
        if (order.referring_site) {
          completedReferrals.add(order.referring_site);
        }
      }
    }
    return completedReferrals.size;
  }

  private _getReferredOrdersGenerated(
    orders: Array<ShopifyOrderResponse>,
    referredCustomerTag: string
  ): number {
    let referredCustomerOrderCount = 0;

    // Track orders from referred customers
    for (const order of orders) {
      if (order.tags && order.tags.includes(referredCustomerTag)) {
        referredCustomerOrderCount++;
      }
    }
    return referredCustomerOrderCount;
  }
}
