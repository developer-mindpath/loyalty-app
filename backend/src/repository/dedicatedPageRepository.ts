import lodash from "lodash";
import { Repository, UpdateResult } from "typeorm";
import { OnsiteDedicatedPageModel } from "../database/models/onsiteDedicatedPage";
import InsertDedicatedPageRequestDTO from "../dto/dedicatedPage/insertDedicatedPageRequestDto";
import UpdateDedicatedPageRequestDTO from "../dto/dedicatedPage/updateDedicatedPageRequestDto";
import { GetDedicatedPageResponse } from "../types/response/dedicatedPage/getDedicatedPageResponse";
import AppDataSource from "../database";

export default class DedicatedPageRepository {
  private _dedicatedPageModel: Repository<OnsiteDedicatedPageModel>;
  constructor() {
    this._dedicatedPageModel = AppDataSource.getRepository(
      OnsiteDedicatedPageModel
    );
  }

  public async insertDedicatedPage(
    insertDedicatedPageRequestDTO: InsertDedicatedPageRequestDTO
  ): Promise<OnsiteDedicatedPageModel> {
    return await this._dedicatedPageModel.save(insertDedicatedPageRequestDTO);
  }

  public async getDedicatedPage(
    userId: number
  ): Promise<GetDedicatedPageResponse | null> {
    return await this._dedicatedPageModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateDedicatedPage(
    updateDedicatedPageRequestDTO: UpdateDedicatedPageRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateDedicatedPageRequestDTO.user_id;
    const data = lodash.omit(updateDedicatedPageRequestDTO, ["user_id"]);
    return await this._dedicatedPageModel.update({ user_id }, data);
  }
}
