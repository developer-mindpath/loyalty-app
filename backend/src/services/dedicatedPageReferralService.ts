import { UpdateResult } from "typeorm";
import { OnsiteDedicatedPageReferralModel } from "../database/models/onsiteDedicatedPageReferral";
import InsertDedicatedPageReferralRequestDTO from "../dto/insertDedicatedPageReferralRequestDto";
import DedicatedPageReferralRepository from "../repository/dedicatedPageReferralRepository";
import { GetDedicatedPageReferralResponse } from "../types/response/dedicatedPage/getDedicatedPageReferralResponse";
import UpdateDedicatedPageReferralRequestDTO from "../dto/updateDedicatedPageReferralRequestDto";

export default class DedicatedPageReferralService {
  private _dedicatedPageReferralRepository: DedicatedPageReferralRepository;
  constructor() {
    this._dedicatedPageReferralRepository =
      new DedicatedPageReferralRepository();
  }

  public async insertDedicatedPageReferral(
    insertDedicatedPageReferralRequestDTO: InsertDedicatedPageReferralRequestDTO
  ): Promise<OnsiteDedicatedPageReferralModel> {
    return await this._dedicatedPageReferralRepository.insertDedicatedPageReferral(
      insertDedicatedPageReferralRequestDTO
    );
  }

  public async getDedicatedPageReferral(
    userId: number
  ): Promise<GetDedicatedPageReferralResponse | null> {
    return await this._dedicatedPageReferralRepository.getDedicatedPageReferral(
      userId
    );
  }

  public async updateDedicatedPageReferral(
    updateDedicatedPageReferralRequestDTO: UpdateDedicatedPageReferralRequestDTO
  ): Promise<UpdateResult> {
    return await this._dedicatedPageReferralRepository.updateDedicatedPageReferral(
      updateDedicatedPageReferralRequestDTO
    );
  }
}
