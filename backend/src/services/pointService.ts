import { DeleteResult, UpdateResult } from "typeorm";
import PointInsertRequestDTO from "../dto/point/pointInsertRequestDto";
import PointRepository from "../repository/pointRepository";
import { GetPointEarnResponse } from "../types/response/point/getPointEarnResponse";
import PointDetailService from "./pointDetailService";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import UpdatePointEarnDetailRequestDTO from "../dto/point/updatePointEarnDetailRequestDto";
import InsertPointRedeemRequestDTO from "src/dto/point/insertPointRedeemRequestDto";
import PointRedeemService from "./pointRedeemService";
import { PointRedeemModel } from "../database/models/pointRedeem";
import { GetPointRedeemResponse } from "../types/response/point/getPointRedeemResponse";
import UpdatePointRedeemRequestDTO from "../dto/point/updatePointRedeemRequestDto";
import InsertPointRedeemDetailRequestDTO from "../dto/point/insertPointRedeemDetailRequestDto";
import UpdatePointRedeemDetailRequestDTO from "../dto/point/updatePointRedeemDetailRequestDto";
import { GetPointRedeemDetailResponse } from "../types/response/point/getPointRedeemDetailResponse";
import PointRedeemDetailService from "./pointRedeemDetailService";
import { PointRedeemDetailModel } from "../database/models/pointRedeemDetail";

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
  ): Promise<void> {
    const insertPointActionData: Record<string, string | number> = {
      action_key: pointInsertRequestDTO.action_key,
      action_key_display_text: pointInsertRequestDTO.action_key_display_text,
      action_visible_order: pointInsertRequestDTO.action_visible_order,
      action_icon: pointInsertRequestDTO.action_icon,
      action_description: pointInsertRequestDTO.action_description,
      is_action_enabled: pointInsertRequestDTO.is_action_enabled,
      status: pointInsertRequestDTO.status,
      user_id: pointInsertRequestDTO.user_id,
      admin_ref: pointInsertRequestDTO.admin_ref,
      created_by: pointInsertRequestDTO.created_by,
    };
    const pointActionModel = await this._pointRepository.insertEarningPoint(
      insertPointActionData
    );
    const insertPointActionDetailData: Record<string, string | number> = {
      point_action_id: pointActionModel.id,
      app_id: pointInsertRequestDTO.app_id,
      points_amounts: pointInsertRequestDTO.points_amounts,
      limit_count: pointInsertRequestDTO.limit_count,
      limit_count_type: pointInsertRequestDTO.limit_count_type,
      url_to_share: pointInsertRequestDTO.url_to_share,
      earning_method: pointInsertRequestDTO.earning_method,
      limit_count_enabled: pointInsertRequestDTO.limit_count_enabled,
      status: pointInsertRequestDTO.status,
      admin_ref: pointInsertRequestDTO.admin_ref,
      created_by: pointInsertRequestDTO.created_by,
    };
    await this._pointDetailService.insertEarningDetailsByPointId(
      insertPointActionDetailData
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
    pointRedeemId: number
  ): Promise<GetPointRedeemDetailResponse[]> {
    return await this._pointRedeemDetailService.getPointRedeemDetail(
      pointRedeemId
    );
  }

  public async updatePointRedeemDetail(
    updatePointRedeemDetailRequestDTO: UpdatePointRedeemDetailRequestDTO
  ): Promise<UpdateResult> {
    return await this._pointRedeemDetailService.updatePointRedeemDetail(
      updatePointRedeemDetailRequestDTO
    );
  }

  public async deletePointRedeemDetail(
    pointRedeemDetailId: number
  ): Promise<DeleteResult> {
    return await this._pointRedeemDetailService.deletePointRedeemDetail(
      pointRedeemDetailId
    );
  }
}
