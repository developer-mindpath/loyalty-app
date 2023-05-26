import { Pagination } from "../types/request/params";

export default class PaginationDTO {
  page = 1;
  limit = 10;
  offset: number;

  constructor(data: Pagination) {
    this.page = data.page || 1;
    this.limit = data.limit || 10;
    this.offset = (this.page - 1) * this.limit;
  }
}
