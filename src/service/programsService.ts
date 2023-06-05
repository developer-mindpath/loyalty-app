import APIUtils from "../utils/api";
import {
  IAddRedeemingPointRequest,
  IGetPointEarningResponse,
  IGetPointRedeemingDetailRequest,
  IGetPointRedeemingDetailResponse,
  IGetRedeemingPointsResponse,
  IInsertPointEarningDetailsRequest,
  IInsertPointEarningRequest,
  IInsertRedeemingPointRequest,
  IResponse,
  IResponseWithBody,
  IUpdateRedeemingPointDetailRequest,
} from "../types";

/**
 * Programs Services
 */
export class ProgramsService {
  /**
   * Fetch redeeming points list
   * @param {string} id User ID
   * @return {IResponseWithBody<IGetRedeemingPointsResponse>}
   */
  public static async getRedeemingPointList(
    id: string
  ): Promise<IResponseWithBody<IGetRedeemingPointsResponse[]>> {
    const response = await APIUtils.send<
      IResponseWithBody<IGetRedeemingPointsResponse[]>
    >({
      url: `/api/point/redeem/${id}`,
      method: "GET",
    });

    return response.data;
  }

  /**
   * get reedeming detail for a point
   * @param {IGetPointRedeemingDetailRequest} payload
   * @return {IResponseWithBody<IGetPointRedeemingDetailResponse>}
   */
  public static async getPointRedeemingDetail(
    payload: IGetPointRedeemingDetailRequest
  ): Promise<IResponseWithBody<IGetPointRedeemingDetailResponse[]>> {
    const response = await APIUtils.send<
      IResponseWithBody<IGetPointRedeemingDetailResponse[]>
    >({
      url: `/api/point/redeem/details/${payload.pointRedeemId}/${payload.id}`,
      method: "GET",
    });

    return response.data;
  }

  /**
   * get Earning points
   * @param {string} id
   * @return {IResponseWithBody<IGetPointEarningResponse[]>}
   */
  public static async getPointEarnings(
    id: string
  ): Promise<IResponseWithBody<IGetPointEarningResponse[]>> {
    const response = await APIUtils.send<
      IResponseWithBody<IGetPointEarningResponse[]>
    >({
      url: `/api/point/earn/${id}`,
      method: "GET",
    });

    return response.data;
  }

  /**
   * add redeeming point
   * @param {IAddRedeemingPointRequest} payload
   * @return {IResponse}
   */
  public static async addRedeeemingPoints(
    payload: IAddRedeemingPointRequest
  ): Promise<IResponse> {
    const response = await APIUtils.send<IResponse>({
      url: `/api/point/redeem`,
      method: "POST",
      data: payload,
    });

    return response.data;
  }

  /**
   * update reedeming detail for a point
   * @param {IInsertRedeemingPointRequest} payload
   * @return {IResponse}
   */
  public static async updatePointRedeemDetail(
    payload: IUpdateRedeemingPointDetailRequest
  ): Promise<IResponse> {
    const response = await APIUtils.send<IResponse>({
      url: `/api/point/redeem/details/${payload.pointRedeemingId}/${payload.userId}`,
      method: "PATCH",
      data: payload.data,
    });

    return response.data;
  }

  /**
   * insert reedeming detail for a point
   * @param {IInsertRedeemingPointRequest} payload
   * @return {IResponse}
   */
  public static async insertRedeemingPointDetail(
    payload: IInsertRedeemingPointRequest
  ): Promise<IResponse> {
    const response = await APIUtils.send<IResponse>({
      url: `/api/point/redeem/details`,
      method: "GET",
      data: payload,
    });

    return response.data;
  }

  /**
   * insert new Earning point
   * @param {IInsertRedeemingPointRequest} payload
   * @return {IResponse}
   */
  public static async insertPointEarning(
    payload: IInsertPointEarningRequest
  ): Promise<IResponse> {
    const response = await APIUtils.send<IResponse>({
      url: `/api/point/earn`,
      method: "POST",
      data: payload,
    });

    return response.data;
  }

  /**
   * insert Earning point details
   * @param {IInsertRedeemingPointRequest} payload
   * @return {IResponse}
   */
  public static async insertPointEarningDetail(
    payload: IInsertPointEarningDetailsRequest
  ): Promise<IResponse> {
    const response = await APIUtils.send<IResponse>({
      url: `/api/point/earn/details`,
      method: "POST",
      data: payload,
    });

    return response.data;
  }
}
