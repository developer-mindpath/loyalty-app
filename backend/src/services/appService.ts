import { UpdateResult } from "typeorm";
import { GetAppResponse } from "../types/response/app/getAppResponse";
import AppRepository from "../repository/appRepository";
import InsertAppRequestDTO from "../dto/app/insertAppRequestDto";
import { AppModel } from "../database/models/app";
import UpdateAppRequestDTO from "../dto/app/updateAppRequestDto";

export default class AppService {
  private _appRepository: AppRepository;
  constructor() {
    this._appRepository = new AppRepository();
  }

  public async insertApp(
    insertAppRequestDTO: InsertAppRequestDTO
  ): Promise<AppModel> {
    return await this._appRepository.insertApp(insertAppRequestDTO);
  }

  public async getApp(userId: number): Promise<Array<GetAppResponse>> {
    return await this._appRepository.getApp(userId);
  }

  public async updateApp(
    updateAppRequestDTO: UpdateAppRequestDTO
  ): Promise<UpdateResult> {
    return await this._appRepository.updateApp(updateAppRequestDTO);
  }
}
