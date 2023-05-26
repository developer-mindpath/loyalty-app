import lodash from "lodash";
import { Repository, UpdateResult } from "typeorm";
import AppDataSource from "../database";
import { OnsiteDedicatedPageExplainerModel } from "../database/models/onsiteDedicatedPageExplainer";
import InsertDedicatedPageExplainerRequestDTO from "../dto/insertDedicatedPageExplainerRequestDto";
import { GetDedicatedPageExplainerResponse } from "../types/response/dedicatedPage/getDedicatedPageExplainerResponse";
import UpdateDedicatedPageExplainerRequestDTO from "../dto/updateDedicatedPageExplainerRequestDto";

export default class DedicatedPageExplainerRepository {
  private _dedicatedPageExplainerModel: Repository<OnsiteDedicatedPageExplainerModel>;
  constructor() {
    this._dedicatedPageExplainerModel = AppDataSource.getRepository(
      OnsiteDedicatedPageExplainerModel
    );
  }

  public async insertDedicatedPageExplainer(
    insertDedicatedPageExplainerRequestDTO: InsertDedicatedPageExplainerRequestDTO
  ): Promise<OnsiteDedicatedPageExplainerModel> {
    return await this._dedicatedPageExplainerModel.save(
      insertDedicatedPageExplainerRequestDTO
    );
  }

  public async getDedicatedPageExplainer(
    userId: number
  ): Promise<GetDedicatedPageExplainerResponse | null> {
    return await this._dedicatedPageExplainerModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateDedicatedPageExplainer(
    updateDedicatedPageExplainerRequestDTO: UpdateDedicatedPageExplainerRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateDedicatedPageExplainerRequestDTO.user_id;
    const data = lodash.omit(updateDedicatedPageExplainerRequestDTO, [
      "user_id",
    ]);
    return await this._dedicatedPageExplainerModel.update({ user_id }, data);
  }
}
