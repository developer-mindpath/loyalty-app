import { InsertChecklistDetailRequest } from "../../types/request/checklist/insertChecklistDetailRequest";

export default class InsertChecklistDetailRequestDTO {
  checklist_id: number;
  checklist_detail_title: string;
  html_body: string;
  order_inde: number;
  status: string;
  created_by: number;
  admin_ref: number;

  constructor(
    body: InsertChecklistDetailRequest,
    userId: number,
    adminRef: number
  ) {
    this.checklist_id = body.checklist_id;
    this.checklist_detail_title = body.checklist_detail_title;
    this.html_body = body.html_body;
    this.order_inde = body.order_inde;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.created_by = userId;
  }
}
