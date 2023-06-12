import { UpdatePromptsRequest } from "../../types/request/prompts/updatePromptsRequest";

export default class UpdatePromptsRequestDTO {
  popups_title: string;
  popups_view: number;
  popups_click: number;
  popups_button: number;
  status: string;
  updated_by: number;
  user_id: number;

  constructor(body: UpdatePromptsRequest, userId: number) {
    this.popups_title = body.popups_title;
    this.popups_view = body.popups_view;
    this.popups_click = body.popups_click;
    this.popups_button = body.popups_button;
    this.status = body.status;
    this.user_id = userId;
    this.updated_by = userId;
  }
}
