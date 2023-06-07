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

  /**
   * Send Axios Request
   * @return {void}
   */
  public static interceptRequest(): void {
    axios.interceptors.request.use((config) => {
      const token = sessionStorage.getItem("token");
      // Add the token to the request header
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }
}

APIUtils.interceptRequest();
export default APIUtils;
