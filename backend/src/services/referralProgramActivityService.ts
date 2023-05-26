import PaginationDTO from "../dto/paginationDTO";
import { GetReferralProgramActivityResponse } from "../types/response/activity/getReferralProgramActivityResponse";
import ReferralProgramActivityRepository from "../repository/referralProgramActivityRepository";

export default class ReferralProgramActivityService {
  private _referralProgramActivityRepository: ReferralProgramActivityRepository;
  constructor() {
    this._referralProgramActivityRepository =
      new ReferralProgramActivityRepository();
  }

  public async getReferralProgramActivity(
    userId: number,
    paginationDTO: PaginationDTO
  ): Promise<Array<GetReferralProgramActivityResponse>> {
    return await this._referralProgramActivityRepository.getReferralProgramActivity(
      userId,
      paginationDTO
    );
  }
}
