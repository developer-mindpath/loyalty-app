import { DeleteResult, Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { PointRedeemDetailModel } from "../database/models/pointRedeemDetail";
import InsertPointRedeemDetailRequestDTO from "../dto/insertPointRedeemDetailRequestDto";
import {
  DeleteRedeemPointDetailParams,
  GetRedeemPointDetailParams,
} from "../types/request/params";
import { GetPointRedeemDetailResponse } from "../types/response/point/getPointRedeemDetailResponse";
import UpdatePointRedeemDetailRequestDTO from "../dto/updatePointRedeemDetailRequestDto";

export default class PointRedeemDetailRepository {
  private _pointRedeemDetailModel: Repository<PointRedeemDetailModel>;
  constructor() {
    this._pointRedeemDetailModel = AppDataSource.getRepository(
      PointRedeemDetailModel
    );
  }

  public async insertRedeemPointDetail(
    insertPointRedeemDetailRequestDTO: InsertPointRedeemDetailRequestDTO
  ): Promise<PointRedeemDetailModel> {
    return await this._pointRedeemDetailModel.save(
      insertPointRedeemDetailRequestDTO
    );
  }

  public async getPointRedeemDetail(
    params: GetRedeemPointDetailParams
  ): Promise<GetPointRedeemDetailResponse[]> {
    const user_id = params.userId;
    const point_redeem_id = params.pointRedeemId;
    return await this._pointRedeemDetailModel.find({
      where: { user_id, point_redeem_id },
    });
  }

  public async updatePointRedeemDetail(
    updatePointRedeemDetailRequestDTO: UpdatePointRedeemDetailRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updatePointRedeemDetailRequestDTO.user_id;
    const point_redeem_id = updatePointRedeemDetailRequestDTO.point_redeem_id;
    const data = lodash.omit(updatePointRedeemDetailRequestDTO, [
      "user_id",
      "point_redeem_id",
    ]);
    return await this._pointRedeemDetailModel.update(
      { user_id, point_redeem_id },
      data
    );
  }

  public async deletePointRedeemDetail(
    params: DeleteRedeemPointDetailParams
  ): Promise<DeleteResult> {
    const user_id = params.userId;
    const point_redeem_id = params.pointRedeemId;
    return await this._pointRedeemDetailModel.delete({
      user_id,
      point_redeem_id,
    });
  }
}
