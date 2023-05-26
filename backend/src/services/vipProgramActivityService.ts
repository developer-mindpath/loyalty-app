import PaginationDTO from "../dto/paginationDTO";
import { GetVipProgramActivityResponse } from "../types/response/activity/getVipProgramActivityResponse";
import VipProgramActivityRepository from "../repository/vipProgramActivityRepository";

export default class VipProgramActivityService {
  private _vipProgramActivityRepository: VipProgramActivityRepository;
  constructor() {
    this._vipProgramActivityRepository = new VipProgramActivityRepository();
  }

  public async getVipProgramActivity(
    userId: number,
    paginationDTO: PaginationDTO
  ): Promise<Array<GetVipProgramActivityResponse>> {
    return await this._vipProgramActivityRepository.getVipProgramActivity(
      userId,
      paginationDTO
    );
  }
}
