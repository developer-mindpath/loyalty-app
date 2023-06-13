import { DeleteResult, Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { PointRedeemDetailModel } from "../database/models/pointRedeemDetail";
import { GetPointRedeemDetailResponse } from "../types/response/point/getPointRedeemDetailResponse";
import UpdatePointRedeemDetailRequestDTO from "../dto/point/updatePointRedeemDetailRequestDto";

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
    pointRedeemId: number
  ): Promise<GetPointRedeemDetailResponse[]> {
    const point_redeem_id = pointRedeemId;
    return await this._pointRedeemDetailModel.find({
      where: { point_redeem_id },
    });
  }

  public async updatePointRedeemDetail(
    updatePointRedeemDetailRequestDTO: UpdatePointRedeemDetailRequestDTO
  ): Promise<UpdateResult> {
    const id = updatePointRedeemDetailRequestDTO.point_redeem_detail_id;
    const data = lodash.omit(updatePointRedeemDetailRequestDTO, [
      "point_redeem_detail_id",
    ]);
    return await this._pointRedeemDetailModel.update({ id }, data);
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
