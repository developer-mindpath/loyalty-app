import VipProgramActivityRepository from "src/repository/vipProgramActivityRepository";

export default class VipProgramActivityService {
  private _vipProgramActivityRepository: VipProgramActivityRepository;
  constructor() {
    this._vipProgramActivityRepository = new VipProgramActivityRepository();
  }

  public async getVipProgramActivity(
    userId: number
  ): Promise<GetPointEarnResponse[]> {
    return await this._vipProgramActivityRepository.getVipProgramActivity(
      userId
    );
  }
}
