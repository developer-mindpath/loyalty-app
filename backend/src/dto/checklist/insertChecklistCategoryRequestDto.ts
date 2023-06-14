import { InsertChecklistCategoryRequest } from "../../types/request/checklist/insertChecklistCategoryRequest";

export default class InsertChecklistCategoryRequestDTO {
  title: string;
  status: string;
  created_by: number;
  admin_ref: number;

  constructor(
    body: InsertChecklistCategoryRequest,
    userId: number,
    adminRef: number
  ) {
    this.title = body.title;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.created_by = userId;
  }
}
