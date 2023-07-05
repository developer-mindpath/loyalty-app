import { GetDashboardResponse } from "../types/response/dashboard/getDashboardResponse";
import DashboardRepository from "../repository/dashboardRepository";
import { GetDashboardSalesGeneratedResponse } from "src/types/response/dashboard/getDashboardTotalSalesGeneratedResponse";

export default class DashboardService {
  private _dashboardRepository: DashboardRepository;
  constructor() {
    this._dashboardRepository = new DashboardRepository();
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

  public async getDashboardSalesGenerated(_userId: number): Promise<GetDashboardSalesGeneratedResponse> {
    return {
      total: 0,
      retentionRevenue: 0,
      incentivizedRevenue: 0,
      conversionRevenue: 0,
      referralRevenue: 0,
    };
  }
}
