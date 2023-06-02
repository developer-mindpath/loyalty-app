import { DeleteResult, UpdateResult } from "typeorm";
import PointInsertRequestDTO from "../dto/point/pointInsertRequestDto";
import PointRepository from "../repository/pointRepository";
import { GetPointEarnResponse } from "../types/response/point/getPointEarnResponse";
import PointDetailService from "./pointDetailService";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import UpdatePointEarnDetailRequestDTO from "../dto/point/updatePointEarnDetailRequestDto";
import { PointActionModel } from "../database/models/pointAction";
import InsertPointRedeemRequestDTO from "src/dto/point/insertPointRedeemRequestDto";
import PointRedeemService from "./pointRedeemService";
import { PointRedeemModel } from "../database/models/pointRedeem";
import { GetPointRedeemResponse } from "../types/response/point/getPointRedeemResponse";
import UpdatePointRedeemRequestDTO from "../dto/point/updatePointRedeemRequestDto";
import InsertPointRedeemDetailRequestDTO from "../dto/point/insertPointRedeemDetailRequestDto";
import {
  DeleteRedeemPointDetailParams,
  GetRedeemPointDetailParams,
} from "src/types/request/params";
import UpdatePointRedeemDetailRequestDTO from "../dto/point/updatePointRedeemDetailRequestDto";
import { GetPointRedeemDetailResponse } from "../types/response/point/getPointRedeemDetailResponse";
import PointRedeemDetailService from "./pointRedeemDetailService";
import { PointRedeemDetailModel } from "../database/models/pointRedeemDetail";
import InsertPointEarnDetailRequestDTO from "../dto/point/insertPointEarnDetailRequestDto";
import { PointActionDetailsModel } from "../database/models/pointActionDetails";

export default class PointService {
  private _pointRepository: PointRepository;
  private _pointDetailService: PointDetailService;
  private _pointRedeemService: PointRedeemService;
  private _pointRedeemDetailService: PointRedeemDetailService;
  constructor() {
    this._pointRepository = new PointRepository();
    this._pointDetailService = new PointDetailService();
    this._pointRedeemService = new PointRedeemService();
    this._pointRedeemDetailService = new PointRedeemDetailService();
  }

  public async insertEarningPoint(
    pointInsertRequestDTO: PointInsertRequestDTO
  ): Promise<PointActionModel> {
    return await this._pointRepository.insertEarningPoint(
      pointInsertRequestDTO
    );
  }

  public async getAllEarningPoints(
    userId: number
  ): Promise<GetPointEarnResponse[]> {
    return await this._pointRepository.getAllEarningPoints(userId);
  }

  public async getEarningDetailsByPointId(
    pointId: number
  ): Promise<GetPointEarnDetailResponse> {
    const pointDetailResponse =
      await this._pointDetailService.getEarningDetailsByPointId(pointId);
    return pointDetailResponse
      ? pointDetailResponse
      : ({} as GetPointEarnDetailResponse);
  }

  public async insertEarningDetailsByPointId(
    insertPointEarnDetailRequestDTO: InsertPointEarnDetailRequestDTO
  ): Promise<PointActionDetailsModel> {
    return await this._pointDetailService.insertEarningDetailsByPointId(
      insertPointEarnDetailRequestDTO
    );
  }

  public async updateEarningDetailsByPointId(
    updatePointEarnDetailRequestDTO: UpdatePointEarnDetailRequestDTO
  ): Promise<UpdateResult> {
    return await this._pointDetailService.updateEarningDetailsByPointId(
      updatePointEarnDetailRequestDTO
    );
  }

  public async insertRedeemingPoint(
    insertPointRedeemRequestDTO: InsertPointRedeemRequestDTO
  ): Promise<PointRedeemModel> {
    return await this._pointRedeemService.insertRedeemingPoint(
      insertPointRedeemRequestDTO
    );
  }

  public async getPointRedeem(
    userId: number
  ): Promise<GetPointRedeemResponse[]> {
    return await this._pointRedeemService.getPointRedeem(userId);
  }

  public async updatePointRedeem(
    updatePointRedeemRequestDTO: UpdatePointRedeemRequestDTO
  ): Promise<UpdateResult> {
    return await this._pointRedeemService.updatePointRedeem(
      updatePointRedeemRequestDTO
    );
  }

  public async insertRedeemPointDetail(
    insertPointRedeemDetailRequestDTO: InsertPointRedeemDetailRequestDTO
  ): Promise<PointRedeemDetailModel> {
    return await this._pointRedeemDetailService.insertRedeemPointDetail(
      insertPointRedeemDetailRequestDTO
    );
  }

  public async getPointRedeemDetail(
    params: GetRedeemPointDetailParams
  ): Promise<GetPointRedeemDetailResponse[]> {
    return await this._pointRedeemDetailService.getPointRedeemDetail(params);
  }

  public async updatePointRedeemDetail(
    updatePointRedeemDetailRequestDTO: UpdatePointRedeemDetailRequestDTO
  ): Promise<UpdateResult> {
    return await this._pointRedeemDetailService.updatePointRedeemDetail(
      updatePointRedeemDetailRequestDTO
    );
  }

  public async deletePointRedeemDetail(
    params: DeleteRedeemPointDetailParams
  ): Promise<DeleteResult> {
    return await this._pointRedeemDetailService.deletePointRedeemDetail(params);
  }
}
