export interface IResponse {
  status: string;
  message: string;
}

export interface IResponseWithBody<T> extends IResponse {
  body: T;
}
