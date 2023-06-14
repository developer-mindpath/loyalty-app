import { InsertChecklistActionRequest } from "../../types/request/checklist/insertChecklistActionRequest";

export default class InsertChecklistActionRequestDTO {
  checklist_detail_id: number;
  status: string;
  created_by: number;
  admin_ref: number;
  user_id: number;

  constructor(
    body: InsertChecklistActionRequest,
    userId: number,
    adminRef: number
  ) {
    this.checklist_detail_id = body.checklist_detail_id;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.created_by = userId;
    this.user_id = userId;
  }
}
