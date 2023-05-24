import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

class APIUtils {
  public static async send<T>(
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    axios.defaults.baseURL = "http://localhost:3001";
    const response = await axios(config);
    return response;
  }
}

export default APIUtils;
