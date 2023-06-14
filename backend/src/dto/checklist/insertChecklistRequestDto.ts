import { InsertChecklistRequest } from "../../types/request/checklist/insertChecklistRequest";

export default class InsertChecklistRequestDTO {
  checklist_category_id: number;
  checklist_title: string;
  checklist_icon: string;
  action_duration: number;
  status: string;
  created_by: number;
  admin_ref: number;

  constructor(body: InsertChecklistRequest, userId: number, adminRef: number) {
    this.checklist_category_id = body.checklist_category_id;
    this.checklist_title = body.checklist_title;
    this.checklist_icon = body.checklist_icon;
    this.action_duration = body.action_duration;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.created_by = userId;
  }
}
