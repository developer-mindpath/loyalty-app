export interface IResponse {
  status: string;
  message: string;
}

export interface IResponseWithBody<T> extends IResponse {
  body: T;
}

export interface IAudit {
  created_by: number;
  updated_by: number;
}

export interface ITimestamp {
  created_at: string;
  updated_at: string;
}
