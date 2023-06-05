import { InsertChecklistCategoryRequest } from "../../types/request/checklist/insertChecklistCategoryRequest";

export default class InsertChecklistCategoryRequestDTO {
  title: string;
  status: string;
  created_by: number;
  admin_ref: number;

  constructor(body: InsertChecklistCategoryRequest) {
    this.title = body.title;
    this.status = body.status;
    this.admin_ref = body.admin_ref;
    this.created_by = body.created_by;
  }
}
