import { UpdateResult } from "typeorm";
import { PointRedeemModel } from "../database/models/pointRedeem";
import InsertPointRedeemRequestDTO from "../dto/point/insertPointRedeemRequestDto";
import UpdatePointRedeemRequestDTO from "../dto/point/updatePointRedeemRequestDto";
import PointRedeemRepository from "../repository/pointRedeemRepository";
import { GetPointRedeemResponse } from "../types/response/point/getPointRedeemResponse";

export default class PointRedeemService {
  private _pointRedeemRepository: PointRedeemRepository;
  constructor() {
    this._pointRedeemRepository = new PointRedeemRepository();
  }

  public async insertRedeemingPoint(
    insertPointRedeemRequestDTO: InsertPointRedeemRequestDTO
  ): Promise<PointRedeemModel> {
    return await this._pointRedeemRepository.insertRedeemingPoint(
      insertPointRedeemRequestDTO
    );
  }

  public async getPointRedeem(
    userId: number
  ): Promise<GetPointRedeemResponse[]> {
    return await this._pointRedeemRepository.getPointRedeem(userId);
  }

  public async updatePointRedeem(
    updatePointRedeemRequestDTO: UpdatePointRedeemRequestDTO
  ): Promise<UpdateResult> {
    return await this._pointRedeemRepository.updatePointRedeem(
      updatePointRedeemRequestDTO
    );
  }
}
