import { DeleteResult, UpdateResult } from "typeorm";
import { PointRedeemDetailModel } from "../database/models/pointRedeemDetail";
import InsertPointRedeemDetailRequestDTO from "../dto/point/insertPointRedeemDetailRequestDto";
import UpdatePointRedeemDetailRequestDTO from "../dto/point/updatePointRedeemDetailRequestDto";
import PointRedeemDetailRepository from "../repository/pointRedeemDetailRepository";
import { GetPointRedeemDetailResponse } from "../types/response/point/getPointRedeemDetailResponse";

export default class PointRedeemDetailService {
  private _pointRedeemDetailRepository: PointRedeemDetailRepository;
  constructor() {
    this._pointRedeemDetailRepository = new PointRedeemDetailRepository();
  }

  public async insertRedeemPointDetail(
    insertPointRedeemDetailRequestDTO: InsertPointRedeemDetailRequestDTO
  ): Promise<PointRedeemDetailModel> {
    return await this._pointRedeemDetailRepository.insertRedeemPointDetail(
      insertPointRedeemDetailRequestDTO
    );
  }

  public async getPointRedeemDetail(
    pointRedeemId: number
  ): Promise<GetPointRedeemDetailResponse[]> {
    return await this._pointRedeemDetailRepository.getPointRedeemDetail(
      pointRedeemId
    );
  }

  public async updatePointRedeemDetail(
    updatePointRedeemDetailRequestDTO: UpdatePointRedeemDetailRequestDTO
  ): Promise<UpdateResult> {
    return await this._pointRedeemDetailRepository.updatePointRedeemDetail(
      updatePointRedeemDetailRequestDTO
    );
  }

  public async deletePointRedeemDetail(
    pointRedeemDetailId: number
  ): Promise<DeleteResult> {
    return await this._pointRedeemDetailRepository.deletePointRedeemDetail(
      pointRedeemDetailId
    );
  }
}
