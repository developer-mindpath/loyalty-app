import PaginationDTO from "../dto/paginationDTO";
import { GetVipProgramActivityResponse } from "../types/response/activity/getVipProgramActivityResponse";
import VipProgramActivityRepository from "../repository/vipProgramActivityRepository";
import { VipCustomer } from "../types/response/customer/getCustomerDetailsResponse";

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

  public async getVipDetail(customerId: number): Promise<Array<VipCustomer>> {
    const vipResponse = await this._vipProgramActivityRepository.getVipDetail(
      customerId
    );
    const vipCustomer = new Array<VipCustomer>();
    for (let index = 0; index < vipResponse.length; index++) {
      const vipRecord = vipResponse[index];
      const vipCustomerRecord = {
        achievedTier: vipRecord.tier_title ? vipRecord.tier_title : "",
        internalNote: vipRecord.status ? vipRecord.status : "",
        startedAt: vipRecord.created_at ? new Date(vipRecord.created_at) : "",
        endedAt: vipRecord.achieved_date
          ? new Date(vipRecord.achieved_date)
          : "",
      } as VipCustomer;
      vipCustomer.push(vipCustomerRecord);
    }
    return vipCustomer;
  }
}
