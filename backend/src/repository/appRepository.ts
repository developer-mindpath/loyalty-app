import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { AppModel } from "../database/models/app";
import { GetAppResponse } from "../types/response/app/getAppResponse";
import InsertAppRequestDTO from "../dto/app/insertAppRequestDto";
import UpdateAppRequestDTO from "../dto/app/updateAppRequestDto";

export default class AppRepository {
  private _appModel: Repository<AppModel>;
  constructor() {
    this._appModel = AppDataSource.getRepository(AppModel);
  }

  public async insertApp(
    insertAppRequestDTO: InsertAppRequestDTO
  ): Promise<AppModel> {
    return await this._appModel.save(insertAppRequestDTO);
  }

  public async getApp(userId: number): Promise<Array<GetAppResponse>> {
    return await this._appModel.find({
      where: { user_id: userId },
    });
  }

  public async updateApp(
    updateAppRequestDTO: UpdateAppRequestDTO
  ): Promise<UpdateResult> {
    const id = updateAppRequestDTO.appId;
    const data = lodash.omit(updateAppRequestDTO, ["addId"]);
    return await this._appModel.update({ id }, data);
  }
}
