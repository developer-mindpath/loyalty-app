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

  public async getCustomerPointDetails(
    customerId: number
  ): Promise<Array<Record<string, string | number>>> {
    return await this._loyaltyProgramActivityRepository.getCustomerPointDetails(
      customerId
    );
  }
}
