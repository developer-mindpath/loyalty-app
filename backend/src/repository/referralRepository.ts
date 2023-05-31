import { DeleteResult, Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import { GetReferralProgramParams } from "../types/request/params";
import AppDataSource from "../database";
import { ReferralModel } from "../database/models/referral";
import InsertReferralProgramRequestDTO from "../dto/referral/insertReferralProgramRequestDto";
import { GetReferralProgramResponse } from "../types/response/referral/getReferralProgramResponse";
import UpdateReferralProgramRequestDTO from "../dto/referral/updateReferralProgramRequestDto";

export default class ReferralRepository {
  private _referralModel: Repository<ReferralModel>;
  constructor() {
    this._referralModel = AppDataSource.getRepository(ReferralModel);
  }

  public async insertReferralProgram(
    insertReferralProgramRequestDTO: InsertReferralProgramRequestDTO
  ): Promise<ReferralModel> {
    return await this._referralModel.save(insertReferralProgramRequestDTO);
  }

  public async getReferralProgram(
    params: GetReferralProgramParams
  ): Promise<GetReferralProgramResponse | null> {
    return await this._referralModel.findOne({
      where: { user_id: params.userId, id: params.referralId },
    });
  }

  public async updateReferralProgram(
    updateReferralProgramRequestDTO: UpdateReferralProgramRequestDTO
  ): Promise<UpdateResult> {
    const id = updateReferralProgramRequestDTO.referralId;
    const data = lodash.omit(updateReferralProgramRequestDTO, ["referralId"]);
    return await this._referralModel.update({ id }, data);
  }

  public async deleteReferralProgram(
    referralId: number
  ): Promise<DeleteResult> {
    return await this._referralModel.delete({
      id: referralId,
    });
  }
}
