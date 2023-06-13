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
  public static async getEmail(): Promise<
    IResponseWithBody<IGetEmailSettingsResponse>
  > {
    const response = await APIUtils.send<
      IResponseWithBody<IGetEmailSettingsResponse>
    >({
      url: `/api/setting/email`,
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
    const response = await APIUtils.send<IResponse>({
      url: `/api/setting/email`,
      method: "PATCH",
      data: payload,
    });

    return response.data;
  }

  /**
   * Fetch Orders Settings
   * @param {string} id User ID
   * @return {IResponseWithBody<IGetEmailSettingsResponse>}
   */
  public static async getOrder(): Promise<
    IResponseWithBody<IGetOrderSettingsResponse>
  > {
    const response = await APIUtils.send<
      IResponseWithBody<IGetOrderSettingsResponse>
    >({
      url: `/api/setting/order`,
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
    const response = await APIUtils.send<IResponse>({
      url: `/api/setting/order`,
      method: "PATCH",
      data: payload,
    });

    return response.data;
  }
}
