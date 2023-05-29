import APIUtils from "../utils/api";
import {
  IResponse,
  IResponseWithBody,
  IGetEmailSettingsResponse,
  IGetOrderSettingsResponse,
  IUpdateEmailSettingRequest,
  IUpdateOrderSettingsRequest,
} from "../types";

/**
 * Settings Services
 */
export class SettingService {
  /**
   * Fetch Email Settings for User
   * @param {string} id User ID
   * @return {IResponseWithBody<IGetEmailSettingsResponse>}
   */
  public static async getEmail(
    id: string
  ): Promise<IResponseWithBody<IGetEmailSettingsResponse>> {
    const response = await APIUtils.send<
      IResponseWithBody<IGetEmailSettingsResponse>
    >({
      url: `/api/settings/email/${id}`,
      method: "GET",
    });

    return response.data;
  }

  /**
   * Update Email Settings
   * @param {IUpdateEmailSettingRequest} payload Update Settings Payload
   * @return {Promise<IResponse>}
   */
  public static async updateEmail(
    payload: IUpdateEmailSettingRequest
  ): Promise<IResponse> {
    const { id } = payload;
    const response = await APIUtils.send<IResponse>({
      url: `/api/settings/email/${id}`,
      method: "PUT",
      data: payload,
    });

    return response.data;
  }

  /**
   * Fetch Orders Settings
   * @param {string} id User ID
   * @return {IResponseWithBody<IGetEmailSettingsResponse>}
   */
  public static async getOrder(
    id: string
  ): Promise<IResponseWithBody<IGetOrderSettingsResponse>> {
    const response = await APIUtils.send<
      IResponseWithBody<IGetOrderSettingsResponse>
    >({
      url: `/api/settings/order/${id}`,
      method: "GET",
    });

    return response.data;
  }

  /**
   * Update Email Settings
   * @param {IUpdateOrderSettingsRequest} payload Update Settings Payload
   * @return {Promise<IResponse>}
   */
  public static async updateOrder(
    payload: IUpdateOrderSettingsRequest
  ): Promise<IResponse> {
    const { id } = payload;
    const response = await APIUtils.send<IResponse>({
      url: `/api/settings/order/${id}`,
      method: "PUT",
      data: payload,
    });

    return response.data;
  }
}
