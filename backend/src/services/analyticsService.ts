import { GetAnalyticsResponse } from "../types/response/analytics/getAnalyticsResponse";
import CustomerService from "./customerService";
import PointService from "./pointService";
import PointRedeemService from "./pointRedeemService";
import GetAnalyticsDTO from "../dto/analytics/getAnalyticsDTO";

export default class AnalyticsService {
  private _customerService: CustomerService;
  private _pointService: PointService;
  private _pointRedeemService: PointRedeemService;
  constructor() {
    this._customerService = new CustomerService();
    this._pointService = new PointService();
    this._pointRedeemService = new PointRedeemService();
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
}
