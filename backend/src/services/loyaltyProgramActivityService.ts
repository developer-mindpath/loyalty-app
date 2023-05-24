import LoyaltyProgramActivityRepository from "src/repository/loyaltyProgramActivityRepository";
import { GetLoyaltyProgramActivityResponse } from "src/types/response/activity/getLoyaltyProgramActivityResponse";

export default class LoyaltyProgramActivityService {
  private _loyaltyProgramActivityRepository: LoyaltyProgramActivityRepository;
  constructor() {
    this._loyaltyProgramActivityRepository =
      new LoyaltyProgramActivityRepository();
  }

  public async getLoyaltyProgramActivity(
    userId: number
  ): Promise<GetLoyaltyProgramActivityResponse[]> {
    return await this._loyaltyProgramActivityRepository.getLoyaltyProgramActivity(
      userId
    );
  }
}
