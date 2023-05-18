import { DeleteResult, UpdateResult } from "typeorm";
import { PointRedeemDetailModel } from "../database/models/pointRedeemDetail";
import InsertPointRedeemDetailRequestDTO from "../dto/insertPointRedeemDetailRequestDto";
import UpdatePointRedeemDetailRequestDTO from "../dto/updatePointRedeemDetailRequestDto";
import PointRedeemDetailRepository from "../repository/pointRedeemDetailRepository";
import {
  DeleteRedeemPointDetailParams,
  GetRedeemPointDetailParams,
} from "../types/request/params";
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
    params: GetRedeemPointDetailParams
  ): Promise<GetPointRedeemDetailResponse[]> {
    return await this._pointRedeemDetailRepository.getPointRedeemDetail(params);
  }

  public async updatePointRedeemDetail(
    updatePointRedeemDetailRequestDTO: UpdatePointRedeemDetailRequestDTO
  ): Promise<UpdateResult> {
    return await this._pointRedeemDetailRepository.updatePointRedeemDetail(
      updatePointRedeemDetailRequestDTO
    );
  }

  public async deletePointRedeemDetail(
    params: DeleteRedeemPointDetailParams
  ): Promise<DeleteResult> {
    return await this._pointRedeemDetailRepository.deletePointRedeemDetail(
      params
    );
  }
}
