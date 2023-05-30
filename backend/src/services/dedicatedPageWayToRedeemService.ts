import { UpdateResult } from "typeorm";
import { OnsiteDedicatedPageWaysToRedeemModel } from "../database/models/onsiteDedicatedPageWaysToRedeem";
import InsertDedicatedPageWayToRedeemRequestDTO from "../dto/insertDedicatedPageWayToRedeemRequestDto";
import DedicatedPageWayToRedeemRepository from "../repository/dedicatedPageWayToRedeemRepository";
import { GetDedicatedPageWayToRedeemResponse } from "../types/response/dedicatedPage/getDedicatedPageWayToRedeemResponse";
import UpdateDedicatedPageWayToRedeemRequestDTO from "../dto/updateDedicatedPageWayToRedeemRequestDto";

export default class DedicatedPageWayToRedeemService {
  private _dedicatedPageWayToRedeemRepository: DedicatedPageWayToRedeemRepository;
  constructor() {
    this._dedicatedPageWayToRedeemRepository =
      new DedicatedPageWayToRedeemRepository();
  }

  public async insertDedicatedPageWayToRedeem(
    insertDedicatedPageWayToRedeemRequestDTO: InsertDedicatedPageWayToRedeemRequestDTO
  ): Promise<OnsiteDedicatedPageWaysToRedeemModel> {
    return await this._dedicatedPageWayToRedeemRepository.insertDedicatedPageWayToRedeem(
      insertDedicatedPageWayToRedeemRequestDTO
    );
  }

  public async getDedicatedPageWayToRedeem(
    userId: number
  ): Promise<GetDedicatedPageWayToRedeemResponse | null> {
    return await this._dedicatedPageWayToRedeemRepository.getDedicatedPageWayToRedeem(
      userId
    );
  }

  public async updateDedicatedPageWayToRedeem(
    updateDedicatedPageWayToRedeemRequestDTO: UpdateDedicatedPageWayToRedeemRequestDTO
  ): Promise<UpdateResult> {
    return await this._dedicatedPageWayToRedeemRepository.updateDedicatedPageWayToRedeem(
      updateDedicatedPageWayToRedeemRequestDTO
    );
  }
}
