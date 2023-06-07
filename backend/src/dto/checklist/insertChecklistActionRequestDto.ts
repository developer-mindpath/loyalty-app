import { InsertChecklistActionRequest } from "../../types/request/checklist/insertChecklistActionRequest";

export default class InsertChecklistActionRequestDTO {
  checklist_detail_id: number;
  status: string;
  created_by: number;
  admin_ref: number;
  user_id: number;

  constructor(body: InsertChecklistActionRequest) {
    this.checklist_detail_id = body.checklist_detail_id;
    this.status = body.status;
    this.admin_ref = body.admin_ref;
    this.created_by = body.created_by;
    this.user_id = body.user_id;
  }
}
