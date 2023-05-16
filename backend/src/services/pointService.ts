import { UpdateResult } from "typeorm";
import { StatusCodes } from "http-status-codes";
import PointInsertRequestDTO from "../dto/pointInsertRequestDto";
import { PointInsertResponse } from "../types/response/point/pointInsertResponse";
import PointRepository from "../repository/pointRepository";
import { GetPointEarnResponse } from "../types/response/point/getPointEarnResponse";
import PointDetailService from "./pointDetailService";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import UpdatePointEarnDetailRequestDTO from "../dto/updatePointEarnDetailRequestDto";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";

export default class PointService {
  private _pointRepository: PointRepository;
  private _pointDetailService: PointDetailService;
  constructor() {
    this._pointRepository = new PointRepository();
    this._pointDetailService = new PointDetailService();
  }

  public async insertEarningPoint(
    pointInsertRequestDTO: PointInsertRequestDTO
  ): Promise<PointInsertResponse> {
    return await this._pointRepository.insertEarningPoint(
      pointInsertRequestDTO
    );
  }

  public async getAllEarningPoints(
    userId: number
  ): Promise<GetPointEarnResponse[]> {
    if (!userId) {
      throw new ExpressError(
        StatusCodes.BAD_REQUEST,
        constants.VALIDATION_MESSAGE.USERID_NOT_FOUND
      );
    }
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
}
