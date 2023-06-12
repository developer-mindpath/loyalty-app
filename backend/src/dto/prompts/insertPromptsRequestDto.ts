import { InsertPromptsRequest } from "../../types/request/prompts/insertPromptsRequest";

export default class InsertPromptsRequestDTO {
  popups_title: string;
  popups_view: number;
  popups_click: number;
  popups_button: number;
  status: string;
  created_by: number;
  user_id: number;
  admin_ref: number;

  constructor(body: InsertPromptsRequest, userId: number, adminRef: number) {
    this.popups_title = body.popups_title;
    this.popups_view = body.popups_view;
    this.popups_click = body.popups_click;
    this.popups_button = body.popups_button;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.user_id = userId;
    this.created_by = userId;
  }
}
