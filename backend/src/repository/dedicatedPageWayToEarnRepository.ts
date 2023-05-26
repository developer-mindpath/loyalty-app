import lodash from "lodash";
import { Repository, UpdateResult } from "typeorm";
import AppDataSource from "../database";
import InsertDedicatedPageWayToEarnRequestDTO from "../dto/insertDedicatedPageWayToEarnRequestDto";
import { GetDedicatedPageWayToEarnResponse } from "../types/response/dedicatedPage/getDedicatedPageWayToEarnResponse";
import UpdateDedicatedPageWayToEarnRequestDTO from "../dto/updateDedicatedPageWayToEarnRequestDto";
import { OnsiteDedicatedPageWaysToEarnModel } from "../database/models/onsiteDedicatedPageWaysToEarn";

export default class DedicatedPageWayToEarnRepository {
  private _dedicatedPageWayToEarnModel: Repository<OnsiteDedicatedPageWaysToEarnModel>;
  constructor() {
    this._dedicatedPageWayToEarnModel = AppDataSource.getRepository(
      OnsiteDedicatedPageWaysToEarnModel
    );
  }

  public async insertDedicatedPageWayToEarn(
    insertDedicatedPageWayToEarnRequestDTO: InsertDedicatedPageWayToEarnRequestDTO
  ): Promise<OnsiteDedicatedPageWaysToEarnModel> {
    return await this._dedicatedPageWayToEarnModel.save(
      insertDedicatedPageWayToEarnRequestDTO
    );
  }

  public async getDedicatedPageWayToEarn(
    userId: number
  ): Promise<GetDedicatedPageWayToEarnResponse | null> {
    return await this._dedicatedPageWayToEarnModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateDedicatedPageWayToEarn(
    updateDedicatedPageWayToEarnRequestDTO: UpdateDedicatedPageWayToEarnRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateDedicatedPageWayToEarnRequestDTO.user_id;
    const data = lodash.omit(updateDedicatedPageWayToEarnRequestDTO, [
      "user_id",
    ]);
    return await this._dedicatedPageWayToEarnModel.update({ user_id }, data);
  }
}
