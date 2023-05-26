import { GetReferralProgramActivityResponse } from "../types/response/activity/getReferralProgramActivityResponse";
import { GetVipProgramActivityResponse } from "../types/response/activity/getVipProgramActivityResponse";
import PaginationDTO from "../dto/paginationDTO";
import { GetLoyaltyProgramActivityResponse } from "../types/response/activity/getLoyaltyProgramActivityResponse";
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
    userId: number,
    paginationDTO: PaginationDTO
  ): Promise<Array<GetLoyaltyProgramActivityResponse>> {
    return await this._loyaltyProgramActivityService.getLoyaltyProgramActivity(
      userId,
      paginationDTO
    );
  }

  public async getReferralProgramActivity(
    userId: number,
    paginationDTO: PaginationDTO
  ): Promise<Array<GetReferralProgramActivityResponse>> {
    return await this._referralProgramActivityService.getReferralProgramActivity(
      userId,
      paginationDTO
    );
  }

  public async getVipProgramActivity(
    userId: number,
    paginationDTO: PaginationDTO
  ): Promise<Array<GetVipProgramActivityResponse>> {
    return await this._vipProgramActivityService.getVipProgramActivity(
      userId,
      paginationDTO
    );
  }
}
