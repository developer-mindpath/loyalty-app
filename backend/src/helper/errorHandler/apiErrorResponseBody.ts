export type ErrorItem = {
  field?: Array<string | number>;
  location?: string;
  messages?: Array<string>;
  types?: Array<string>;
};

export class APIErrorResponseBody {
  statusCode?: number;
  message?: string;
  errors?: Array<ErrorItem>;

  constructor(
    statusCode?: number,
    message?: string,
    errors?: Array<ErrorItem>
  ) {
    if (statusCode) {
      this.statusCode = statusCode;
    }

    if (message) {
      this.message = message;
    }

    if (errors) {
      this.errors = errors;
    }
  }
}

export type ErrorResponseBody = {
  errors: Array<ErrorItem>;
};
