import { DeleteResult, UpdateResult } from "typeorm";
import PointInsertRequestDTO from "../dto/point/pointInsertRequestDto";
import PointRepository from "../repository/pointRepository";
import { GetPointEarnResponse } from "../types/response/point/getPointEarnResponse";
import PointDetailService from "./pointDetailService";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import UpdatePointEarnDetailRequestDTO from "../dto/point/updatePointEarnDetailRequestDto";
import InsertPointRedeemRequestDTO from "src/dto/point/insertPointRedeemRequestDto";
import PointRedeemService from "./pointRedeemService";
import { GetPointRedeemResponse } from "../types/response/point/getPointRedeemResponse";
import UpdatePointRedeemDetailRequestDTO from "../dto/point/updatePointRedeemDetailRequestDto";
import { GetPointRedeemDetailResponse } from "../types/response/point/getPointRedeemDetailResponse";
import PointRedeemDetailService from "./pointRedeemDetailService";

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
  ): Promise<void> {
    const insertPointRedeemData: Record<string, string | number> = {
      reward_key: insertPointRedeemRequestDTO.reward_key,
      reward_key_key_display_text:
        insertPointRedeemRequestDTO.reward_key_key_display_text,
      reward_icon: insertPointRedeemRequestDTO.reward_icon,
      reward_description: insertPointRedeemRequestDTO.reward_description,
      is_reward_enabled: insertPointRedeemRequestDTO.is_reward_enabled,
      status: insertPointRedeemRequestDTO.status,
      user_id: insertPointRedeemRequestDTO.user_id,
      admin_ref: insertPointRedeemRequestDTO.admin_ref,
      created_by: insertPointRedeemRequestDTO.created_by,
    };
    const pointRedeemModel =
      await this._pointRedeemService.insertRedeemingPoint(
        insertPointRedeemData
      );
    const insertPointRedeemDetailData: Record<string, string | number> = {
      point_redeem_id: pointRedeemModel.id,
      points_type: insertPointRedeemRequestDTO.points_type,
      fixed_points_amount: insertPointRedeemRequestDTO.fixed_points_amount,
      fixed_points_discount: insertPointRedeemRequestDTO.fixed_points_discount,
      "fixed_points_discount_ type":
        insertPointRedeemRequestDTO.fixed_points_discount_type,
      apply_to_maximum_shipping_amount:
        insertPointRedeemRequestDTO.apply_to_maximum_shipping_amount,
      incremented_points_amount:
        insertPointRedeemRequestDTO.incremented_points_amount,
      incremented_points_money_customer_received:
        insertPointRedeemRequestDTO.incremented_points_money_customer_received,
      incremented_points_is_set_minimum_points:
        insertPointRedeemRequestDTO.incremented_points_is_set_minimum_points,
      incremented_points_is_set_maximum_points:
        insertPointRedeemRequestDTO.incremented_points_is_set_maximum_points,
      incremented_points_minimum_points:
        insertPointRedeemRequestDTO.incremented_points_minimum_points,
      incremented_points_maximum_points:
        insertPointRedeemRequestDTO.incremented_points_maximum_points,
      is_minimum_cart_requirement:
        insertPointRedeemRequestDTO.is_minimum_cart_requirement,
      minimum_cart_value: insertPointRedeemRequestDTO.minimum_cart_value,
      apply_to: insertPointRedeemRequestDTO.apply_to,
      collection_id: insertPointRedeemRequestDTO.collection_id,
      purchase_type: insertPointRedeemRequestDTO.purchase_type,
      reward_expiry: insertPointRedeemRequestDTO.reward_expiry,
      products: insertPointRedeemRequestDTO.products,
      status: insertPointRedeemRequestDTO.status,
      user_id: insertPointRedeemRequestDTO.user_id,
      admin_ref: insertPointRedeemRequestDTO.admin_ref,
      created_by: insertPointRedeemRequestDTO.created_by,
    };
    await this._pointRedeemDetailService.insertRedeemPointDetail(
      insertPointRedeemDetailData
    );
  }

  public async getPointRedeem(
    userId: number
  ): Promise<GetPointRedeemResponse[]> {
    return await this._pointRedeemService.getPointRedeem(userId);
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
