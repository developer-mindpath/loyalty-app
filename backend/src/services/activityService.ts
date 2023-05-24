import { GetLoyaltyProgramActivityResponse } from "src/types/response/activity/getLoyaltyProgramActivityResponse";
import { GetPointEarnResponse } from "../types/response/point/getPointEarnResponse";
import LoyaltyProgramActivityService from "./loyaltyProgramActivityService";
import ReferralProgramActivityService from "./referralProgramActivityService";
import VipProgramActivityService from "./vipProgramActivityService";

export default class ActivityService {
  private _loyaltyProgramActivityService: LoyaltyProgramActivityService;
  private _referralProgramActivityService: ReferralProgramActivityService;
  private _vipProgramActivityService: VipProgramActivityService;
  constructor() {
    this._loyaltyProgramActivityService = new LoyaltyProgramActivityService();
    this._referralProgramActivityService = new ReferralProgramActivityService();
    this._vipProgramActivityService = new VipProgramActivityService();
  }

  public async getLoyaltyProgramActivity(
    userId: number
  ): Promise<GetLoyaltyProgramActivityResponse[]> {
    return await this._loyaltyProgramActivityService.getLoyaltyProgramActivity(
      userId
    );
  }
}
