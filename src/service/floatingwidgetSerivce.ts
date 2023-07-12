import { IResponseWithBody } from "@/types/api";
import {
  IWidgetButtonResponse,
  IWidgetResponse,
  IWidgetTextResponse,
} from "@/types/floatingWidget";
import APIUtils from "@/utils/api";

export class FloatingWidgetService {
  /**
   * Get widget config
   * @return {Promise<IWidgetResponse>}
   */
  public static async getWidget(): Promise<IWidgetResponse> {
    const response = await APIUtils.send<IResponseWithBody<IWidgetResponse>>({
      url: "/api/widget/floating",
      method: "GET",
    });
    return response.data.body;
  }

  /**
   * update widget config
   * @param {Partial<IWidgetResponse>}
   * @return {Promise<void>}
   */
  public static async updateWidget(
    payload: Partial<IWidgetResponse>
  ): Promise<void> {
    const response = await APIUtils.send<void>({
      url: "/api/widget/floating",
      method: "PATCH",
      data: payload,
    });
    return response.data;
  }

  /**
   * Get widget Button config
   * @return {Promise<IWidgetResponse>}
   */
  public static async getWidgetButton(): Promise<IWidgetButtonResponse> {
    const response = await APIUtils.send<
      IResponseWithBody<IWidgetButtonResponse>
    >({
      url: "/api/widget/floating/button",
      method: "GET",
    });
    return response.data.body;
  }

  /**
   * update widget config
   * @param {Partial<IWidgetButtonResponse>}
   * @return {Promise<void>}
   */
  public static async updateWidgetButton(
    payload: Partial<IWidgetButtonResponse>
  ): Promise<void> {
    const response = await APIUtils.send<void>({
      url: "/api/widget/floating/button",
      method: "PATCH",
      data: payload,
    });
    return response.data;
  }

  /**
   * Get widget Button config
   * @return {Promise<IWidgetTextResponse>}
   */
  public static async getWidgetText(): Promise<IWidgetTextResponse> {
    const response = await APIUtils.send<
      IResponseWithBody<IWidgetTextResponse>
    >({
      url: "/api/widget/floating/text",
      method: "GET",
    });
    return response.data.body;
  }

  /**
   * update widget config
   * @param {Partial<IWidgetTextResponse>}
   * @return {Promise<void>}
   */
  public static async updateWidgetText(
    payload: Partial<IWidgetTextResponse>
  ): Promise<void> {
    const response = await APIUtils.send<void>({
      url: "/api/widget/floating/text",
      method: "PATCH",
      data: payload,
    });
    return response.data;
  }
}

export default FloatingWidgetService;
