import APIUtils from "../utils/api";
import { IResponseWithBody } from "../types";
import { IPointDetailResponse, IPointResponse } from "../types/program";

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

  public static async updatePointDetail(
    payload: Partial<IPointDetailResponse>
  ): Promise<void> {
    await APIUtils.send({
      url: `/api/point/earn/detail/${payload.id}`,
      method: "PATCH",
      data: payload,
    });
  }
}
