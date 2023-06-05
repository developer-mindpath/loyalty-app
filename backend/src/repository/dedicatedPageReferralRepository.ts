import lodash from "lodash";
import { Repository, UpdateResult } from "typeorm";
import AppDataSource from "../database";
import { OnsiteDedicatedPageReferralModel } from "../database/models/onsiteDedicatedPageReferral";
import InsertDedicatedPageReferralRequestDTO from "../dto/dedicatedPage/insertDedicatedPageReferralRequestDto";
import { GetDedicatedPageReferralResponse } from "../types/response/dedicatedPage/getDedicatedPageReferralResponse";
import UpdateDedicatedPageReferralRequestDTO from "../dto/dedicatedPage/updateDedicatedPageReferralRequestDto";

export default class DedicatedPageReferralRepository {
  private _dedicatedPageReferralModel: Repository<OnsiteDedicatedPageReferralModel>;
  constructor() {
    this._dedicatedPageReferralModel = AppDataSource.getRepository(
      OnsiteDedicatedPageReferralModel
    );
  }

  public async insertDedicatedPageReferral(
    insertDedicatedPageReferralRequestDTO: InsertDedicatedPageReferralRequestDTO
  ): Promise<OnsiteDedicatedPageReferralModel> {
    return await this._dedicatedPageReferralModel.save(
      insertDedicatedPageReferralRequestDTO
    );
  }

  public async getDedicatedPageReferral(
    userId: number
  ): Promise<GetDedicatedPageReferralResponse | null> {
    return await this._dedicatedPageReferralModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateDedicatedPageReferral(
    updateDedicatedPageReferralRequestDTO: UpdateDedicatedPageReferralRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateDedicatedPageReferralRequestDTO.user_id;
    const data = lodash.omit(updateDedicatedPageReferralRequestDTO, [
      "user_id",
    ]);
    return await this._dedicatedPageReferralModel.update({ user_id }, data);
  }
}
