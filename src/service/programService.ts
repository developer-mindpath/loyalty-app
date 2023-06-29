import APIUtils from "@/utils/api";
import { IResponseWithBody } from "@/types";
import {
  IAddEarnPointRequest,
  IGetEarnPointResponse,
  IAddEarnPointResponse,
  IEarnPointWithAction,
  IUpdateEarnPointService,
  IOrderUpdate,
} from "@/types/program/points/earnPoint";
import {
  IAddRedeemRewardResponse,
  IAddRewardRequest,
  IGetRedeemRewardResponse,
  IRewardRedeemWithAction,
  IUpdateRewardRequestService,
} from "@/types/program/points/redeemRewards";
import { IProgramStatus, IAppListItem } from "@/types/program";

export class ProgramService {
  /**
   * Get Program Status
   * @return {Promise<void>}
   */
  public static async getProgramStatus(): Promise<IProgramStatus> {
    const response = await APIUtils.send<IResponseWithBody<IProgramStatus>>({
      url: "/api/program/status",
      method: "GET",
    });
    return response.data.body;
  }

  /**
   * Update Program Status
   * @param {Partial<IProgramStatus>} payload
   * @return {Promise<void>}
   */
  public static async updateProgramStatus(
    payload: Partial<IProgramStatus>
  ): Promise<void> {
    const response = await APIUtils.send<void>({
      url: "/api/program/status",
      method: "PATCH",
      data: payload,
    });
    return response.data;
  }

  /**
   * Get Points
   * @returns {Promise<IPointResponse>}
   */
  public static async getEarnPointList(): Promise<IGetEarnPointResponse[]> {
    const repsonse = await APIUtils.send<
      IResponseWithBody<IGetEarnPointResponse[]>
    >({
      url: "/api/point/earn",
      method: "GET",
    });

    return repsonse.data.body;
  }

  /**
   * Get Points Detail
   * @returns {Promise<IEarnPoint>}
   */
  public static async getEarnPointDetail(
    id: string
  ): Promise<IEarnPointWithAction> {
    const repsonse = await APIUtils.send<
      IResponseWithBody<IEarnPointWithAction>
    >({
      url: `/api/point/earn/detail/${id}`,
      method: "GET",
    });

    return repsonse.data.body;
  }

  /**
   * Add Redeem Points
   * @param {Partial<IAddEarnPointRequest>} payload
   * @return {Promise<IAddEarnPointResponse>}
   */
  public static async addEarnPoint(
    payload: Partial<IAddEarnPointRequest>
  ): Promise<IAddEarnPointResponse> {
    const response = await APIUtils.send<
      IResponseWithBody<IAddEarnPointResponse>
    >({
      url: "/api/point/earn",
      method: "POST",
      data: payload,
    });
    return response.data.body;
  }

  /**
   * Update Point Detail
   * @param {Partial<IEarnPoint>} payload
   * @return {Promise<void>}
   */
  public static async updateEarnPointDetail(
    payload: IUpdateEarnPointService
  ): Promise<void> {
    await APIUtils.send({
      url: `/api/point/earn/detail/${payload.point_action_id}`,
      method: "PATCH",
      data: payload,
    });
  }

  /**
   * Get Redeem Points
   * @returns {Promise<IRedeemPointResponse[]>}
   */
  public static async getRewardRedeemList(): Promise<
    IGetRedeemRewardResponse[]
  > {
    const response = await APIUtils.send<
      IResponseWithBody<IGetRedeemRewardResponse[]>
    >({
      url: "/api/point/redeems",
      method: "GET",
    });
    return response.data.body;
  }

  /**
   * Get Redeem Points
   * @returns {Promise<IRedeemPointResponse[]>}
   */
  public static async getRewardRedeemDetails(
    id: string
  ): Promise<IRewardRedeemWithAction> {
    const response = await APIUtils.send<
      IResponseWithBody<IRewardRedeemWithAction>
    >({
      url: `/api/point/redeem/detail/${id}`,
      method: "GET",
    });
    return response.data.body;
  }

  /**
   * Add Redeem Points
   * @param {Partial<IAddEarnPointRequest>} payload
   * @return {Promise<IAddEarnPointResponse>}
   */
  public static async addReward(
    payload: Partial<IAddRewardRequest>
  ): Promise<IAddRedeemRewardResponse> {
    const response = await APIUtils.send<
      IResponseWithBody<IAddEarnPointResponse>
    >({
      url: "/api/point/redeem",
      method: "POST",
      data: payload,
    });
    return response.data.body;
  }

  /**
   * Update Point Detail
   * @param {Partial<IEarnPoint>} payload
   * @return {Promise<void>}
   */
  public static async updateRewardRedeemDetail(
    payload: IUpdateRewardRequestService
  ): Promise<void> {
    await APIUtils.send({
      url: `/api/point/redeem/detail/${payload.point_redeem_id}`,
      method: "PATCH",
      data: payload,
    });
  }

  /**
   * Get App List
   * @returns {string[]}
   */
  public static async getAppsList(): Promise<IAppListItem[]> {
    // TODO: Implement After API side is done with it
    // const response = await APIUtils.send<IResponseWithBody<IAddEarnResponse>>({
    //   url: "/api/point/earn",
    //   method: "POST",
    //   data: payload,
    // });
    // return response.data.body;

    return Promise.resolve([
      { id: 1, app_title: "Loox" },
      { id: 2, app_title: "Handy" },
      { id: 3, app_title: "Mandy" },
    ]);
  }

  /**
   * Change Order
   * @param {IOrderUpdate} payload
   */
  public static async updateOrder(payload: IOrderUpdate): Promise<void> {
    const { newIndex, oldIndex } = payload;
    await APIUtils.send({
      method: "PATCH",
      url: `/api/point/earn/position?oldPosition=${oldIndex}&newPosition=${newIndex}`,
    });
  }
}
