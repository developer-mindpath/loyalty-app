import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3001";

class APIUtils {
  /**
   * Send Axios Request
   * @param {AxiosRequestConfig} config
   * @return {Promise<AxiosResponse<T>>}
   */
  public static async send<T>(
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const response = await axios(config);
    return response;
  }
}

export default APIUtils;
