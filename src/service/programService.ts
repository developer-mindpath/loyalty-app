import APIUtils from "../utils/api";
import { IResponseWithBody } from "../types";
import {
  IAddPointDetailRequest,
  IAddEarnResponse,
  IAddEarnRequest,
  IPointDetailResponse,
  IPointResponse,
  IRedeemPointResponse,
} from "../types/program";

export class ProgramService {
  /**
   * Get Points
   * @returns {Promise<IPointResponse>}
   */
  public static async getPoints(): Promise<IPointResponse[]> {
    const repsonse = await APIUtils.send<IResponseWithBody<IPointResponse[]>>({
      url: "/api/point/earn",
      method: "GET",
    });

    return repsonse.data.body;
  }

  /**
   * Get Points Detail
   * @returns {Promise<IPointDetailResponse>}
   */
  public static async getPointDetail(
    id: string
  ): Promise<IPointDetailResponse> {
    const repsonse = await APIUtils.send<
      IResponseWithBody<IPointDetailResponse>
    >({
      url: `/api/point/earn/detail/${id}`,
      method: "GET",
    });

    return repsonse.data.body;
  }

  /**
   * Update Point Detail
   * @param {Partial<IPointDetailResponse>} payload
   * @return {Promise<void>}
   */
  public static async updatePointDetail(
    payload: Partial<IPointDetailResponse>
  ): Promise<void> {
    await APIUtils.send({
      url: `/api/point/earn/detail/${payload.id}`,
      method: "PATCH",
      data: payload,
    });
  }

  /**
   * Add Point Detail
   * @param {IAddPointDetailRequest} payload
   * @return {Promise<void>}
   */
  public static async addPointDetail(
    payload: IAddPointDetailRequest
  ): Promise<void> {
    await APIUtils.send({
      url: "/api/point/earn",
      method: "POST",
      data: payload,
    });
  }

  /**
   * Get Redeem Points
   * @returns {Promise<IRedeemPointResponse[]>}
   */
  public static async getRedeemPoint(): Promise<IRedeemPointResponse[]> {
    const response = await APIUtils.send<
      IResponseWithBody<IRedeemPointResponse[]>
    >({
      url: "/api/point/redeems",
      method: "GET",
    });
    return response.data.body;
  }

  /**
   * Add Redeem Points
   * @returns
   */
  public static async addEarnPoint(
    payload: Partial<IAddEarnRequest>
  ): Promise<IAddEarnResponse> {
    const response = await APIUtils.send<IResponseWithBody<IAddEarnResponse>>({
      url: "/api/point/earn",
      method: "POST",
      data: payload,
    });
    return response.data.body;
  }
}
