import ReferralProgramActivityRepository from "src/repository/referralProgramActivityRepository";

export default class ReferralProgramActivityService {
  private _referralProgramActivityRepository: ReferralProgramActivityRepository;
  constructor() {
    this._referralProgramActivityRepository =
      new ReferralProgramActivityRepository();
  }

  public async getReferralProgramActivity(
    userId: number
  ): Promise<GetPointEarnResponse[]> {
    return await this._referralProgramActivityRepository.getReferralProgramActivity(
      userId
    );
  }
}
