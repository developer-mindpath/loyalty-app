import { APIData } from "../referal";
import APIUtils from "../utils/api";

export class FormService {
  public static async getFormData(id: number): Promise<APIData> {
    const response = await APIUtils.send<APIData>({
      url: `${process.env.REACT_APP_BACKEND_URL}/api/referral/${id}`,
      method: "GET",
    });
    return response.data;
  }

  public static async updateFormData(payload: APIData): Promise<APIData> {
    const response = await APIUtils.send<APIData>({
      url: `${process.env.REACT_APP_BACKEND_URL}/api/referral/${payload.id}`,
      method: "PUT",
      data: payload,
    });
    return response.data;
  }
}
