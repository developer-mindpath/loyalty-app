import { UpdateResult } from "typeorm";
import InsertDedicatedPageWayToEarnRequestDTO from "../dto/insertDedicatedPageWayToEarnRequestDto";
import { GetDedicatedPageWayToEarnResponse } from "../types/response/dedicatedPage/getDedicatedPageWayToEarnResponse";
import UpdateDedicatedPageWayToEarnRequestDTO from "../dto/updateDedicatedPageWayToEarnRequestDto";
import DedicatedPageWayToEarnRepository from "../repository/dedicatedPageWayToEarnRepository";
import { OnsiteDedicatedPageWaysToEarnModel } from "../database/models/onsiteDedicatedPageWaysToEarn";

export default class DedicatedPageWayToEarnService {
  private _dedicatedPageWayToEarnRepository: DedicatedPageWayToEarnRepository;
  constructor() {
    this._dedicatedPageWayToEarnRepository =
      new DedicatedPageWayToEarnRepository();
  }

  public async insertDedicatedPageWayToEarn(
    insertDedicatedPageWayToEarnRequestDTO: InsertDedicatedPageWayToEarnRequestDTO
  ): Promise<OnsiteDedicatedPageWaysToEarnModel> {
    return await this._dedicatedPageWayToEarnRepository.insertDedicatedPageWayToEarn(
      insertDedicatedPageWayToEarnRequestDTO
    );
  }

  public async getDedicatedPageWayToEarn(
    userId: number
  ): Promise<GetDedicatedPageWayToEarnResponse | null> {
    return await this._dedicatedPageWayToEarnRepository.getDedicatedPageWayToEarn(
      userId
    );
  }

  public async updateDedicatedPageWayToEarn(
    updateDedicatedPageWayToEarnRequestDTO: UpdateDedicatedPageWayToEarnRequestDTO
  ): Promise<UpdateResult> {
    return await this._dedicatedPageWayToEarnRepository.updateDedicatedPageWayToEarn(
      updateDedicatedPageWayToEarnRequestDTO
    );
  }
}
