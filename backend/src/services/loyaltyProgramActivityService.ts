import { GetLoyaltyProgramActivityResponse } from "../types/response/activity/getLoyaltyProgramActivityResponse";
import LoyaltyProgramActivityRepository from "../repository/loyaltyProgramActivityRepository";
import PaginationDTO from "../dto/paginationDTO";

export default class LoyaltyProgramActivityService {
  private _loyaltyProgramActivityRepository: LoyaltyProgramActivityRepository;
  constructor() {
    this._loyaltyProgramActivityRepository =
      new LoyaltyProgramActivityRepository();
  }

  public async getLoyaltyProgramActivity(
    userId: number,
    paginationDTO: PaginationDTO
  ): Promise<Array<GetLoyaltyProgramActivityResponse>> {
    return await this._loyaltyProgramActivityRepository.getLoyaltyProgramActivity(
      userId,
      paginationDTO
    );
  }
}
