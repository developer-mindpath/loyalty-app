import { DeleteResult, Repository, UpdateResult } from "typeorm";
import AppDataSource from "../database";
import { PointRedeemDetailModel } from "../database/models/pointRedeemDetail";
import { GetPointRedeemDetailResponse } from "../types/response/point/getPointRedeemDetailResponse";

export default class PointRedeemDetailRepository {
  private _pointRedeemDetailModel: Repository<PointRedeemDetailModel>;
  constructor() {
    this._pointRedeemDetailModel = AppDataSource.getRepository(
      PointRedeemDetailModel
    );
  }

  public async insertRedeemPointDetail(
    insertPointRedeemDetailData: Record<string, string | number>
  ): Promise<PointRedeemDetailModel> {
    return await this._pointRedeemDetailModel.save(insertPointRedeemDetailData);
  }

  public async getPointRedeemDetail(
    pointRedeemId: number,
    userId: number
  ): Promise<GetPointRedeemDetailResponse | null> {
    const point_redeem_id = pointRedeemId;
    return await this._pointRedeemDetailModel.findOne({
      where: { point_redeem_id, user_id: userId },
      relations: ["pointRedeem"],
    });
  }

  public async updatePointRedeemDetail(
    updatePointRedeemDetailData: Record<string, string | number>,
    pointRedeemId: number
  ): Promise<UpdateResult> {
    return await this._pointRedeemDetailModel.update(
      { point_redeem_id: pointRedeemId },
      updatePointRedeemDetailData
    );
  }

  public async deletePointRedeemDetail(
    pointRedeemDetailId: number
  ): Promise<DeleteResult> {
    const id = pointRedeemDetailId;
    return await this._pointRedeemDetailModel.delete({
      id,
    });
  }
}
