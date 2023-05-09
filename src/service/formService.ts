import { APIData } from "../referal";
import APIUtils from "../utils/api";

export class FormService {
  public static async getFormData(id: number): Promise<APIData> {
    const response = await APIUtils.send<APIData>(
      `${process.env.REACT_APP_BACKEND_URL}/api/referral/${id}`,
      {
        method: "GET",
      }
    );
    return response;
  }

  public static async updateFormData(data: APIData): Promise<APIData> {
    console.log(data);

    const response = await APIUtils.send<APIData>(
      `${process.env.REACT_APP_BACKEND_URL}/api/referral/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response;
  }
}
