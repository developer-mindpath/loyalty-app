import { UpdateChecklistDetailRequest } from "../../types/request/checklist/updateChecklistDetailRequest";

export default class UpdateChecklistDetailRequestDTO {
  checklist_detail_title: string;
  html_body: string;
  order_inde: number;
  status: string;
  updated_by: number;
  checklistDetailId: number;

  constructor(
    body: UpdateChecklistDetailRequest,
    checklistDetailId: number,
    userId: number
  ) {
    this.checklist_detail_title = body.checklist_detail_title;
    this.html_body = body.html_body;
    this.order_inde = body.order_inde;
    this.status = body.status;
    this.updated_by = userId;
    this.checklistDetailId = checklistDetailId;
  }
}
