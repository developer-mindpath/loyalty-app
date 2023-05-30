import lodash from "lodash";
import { Repository, UpdateResult } from "typeorm";
import AppDataSource from "../database";
import { OnsiteDedicatedPageWaysToRedeemModel } from "../database/models/onsiteDedicatedPageWaysToRedeem";
import InsertDedicatedPageWayToRedeemRequestDTO from "../dto/insertDedicatedPageWayToRedeemRequestDto";
import { GetDedicatedPageWayToRedeemResponse } from "../types/response/dedicatedPage/getDedicatedPageWayToRedeemResponse";
import UpdateDedicatedPageWayToRedeemRequestDTO from "../dto/updateDedicatedPageWayToRedeemRequestDto";

export default class DedicatedPageWayToRedeemRepository {
  private _dedicatedPageWayToRedeemModel: Repository<OnsiteDedicatedPageWaysToRedeemModel>;
  constructor() {
    this._dedicatedPageWayToRedeemModel = AppDataSource.getRepository(
      OnsiteDedicatedPageWaysToRedeemModel
    );
  }

  public async insertDedicatedPageWayToRedeem(
    insertDedicatedPageWayToRedeemRequestDTO: InsertDedicatedPageWayToRedeemRequestDTO
  ): Promise<OnsiteDedicatedPageWaysToRedeemModel> {
    return await this._dedicatedPageWayToRedeemModel.save(
      insertDedicatedPageWayToRedeemRequestDTO
    );
  }

  public async getDedicatedPageWayToRedeem(
    userId: number
  ): Promise<GetDedicatedPageWayToRedeemResponse | null> {
    return await this._dedicatedPageWayToRedeemModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateDedicatedPageWayToRedeem(
    updateDedicatedPageWayToRedeemRequestDTO: UpdateDedicatedPageWayToRedeemRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateDedicatedPageWayToRedeemRequestDTO.user_id;
    const data = lodash.omit(updateDedicatedPageWayToRedeemRequestDTO, [
      "user_id",
    ]);
    return await this._dedicatedPageWayToRedeemModel.update({ user_id }, data);
  }
}
