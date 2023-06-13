import { PointRedeemModel } from "../database/models/pointRedeem";
import PointRedeemRepository from "../repository/pointRedeemRepository";
import { GetPointRedeemResponse } from "../types/response/point/getPointRedeemResponse";

export default class PointRedeemService {
  private _pointRedeemRepository: PointRedeemRepository;
  constructor() {
    this._pointRedeemRepository = new PointRedeemRepository();
  }

  public async insertRedeemingPoint(
    insertPointRedeemData: Record<string, string | number>
  ): Promise<PointRedeemModel> {
    return await this._pointRedeemRepository.insertRedeemingPoint(
      insertPointRedeemData
    );
  }

  public async getPointRedeem(
    userId: number
  ): Promise<GetPointRedeemResponse[]> {
    return await this._pointRedeemRepository.getPointRedeem(userId);
  }
}
