import { DeleteResult, UpdateResult } from "typeorm";
import ReferralRepository from "../repository/referralRepository";
import { ReferralModel } from "../database/models/referral";
import InsertReferralProgramRequestDTO from "../dto/referral/insertReferralProgramRequestDto";
import { GetReferralProgramParams } from "../types/request/params";
import { GetReferralProgramResponse } from "../types/response/referral/getReferralProgramResponse";
import UpdateReferralProgramRequestDTO from "src/dto/referral/updateReferralProgramRequestDto";

export default class ReferralService {
  private _referralRepository: ReferralRepository;
  constructor() {
    this._referralRepository = new ReferralRepository();
  }

  public async insertReferralProgram(
    insertReferralProgramRequestDTO: InsertReferralProgramRequestDTO
  ): Promise<ReferralModel> {
    return await this._referralRepository.insertReferralProgram(
      insertReferralProgramRequestDTO
    );
  }

  public async getReferralProgram(
    params: GetReferralProgramParams
  ): Promise<GetReferralProgramResponse> {
    const referalResponse = await this._referralRepository.getReferralProgram(
      params
    );
    return referalResponse
      ? referalResponse
      : ({} as GetReferralProgramResponse);
  }

  public async updateReferralProgram(
    updateReferralProgramRequestDTO: UpdateReferralProgramRequestDTO
  ): Promise<UpdateResult> {
    return await this._referralRepository.updateReferralProgram(
      updateReferralProgramRequestDTO
    );
  }

  public async deleteReferralProgram(
    referralId: number
  ): Promise<DeleteResult> {
    return await this._referralRepository.deleteReferralProgram(referralId);
  }
}
