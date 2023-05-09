class APIUtils {
  public static async send<T>(
    url: RequestInfo | URL,
    config: RequestInit
  ): Promise<T> {
    console.log(config);
    const response = await fetch(url, config);
    const responseJSON = response.json() as T;
    return responseJSON;
  }
}

export default APIUtils;
