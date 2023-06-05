import { UpdateFloatingWidgetTextRequest } from "../../types/request/widget/updateFloatingWidgetTextRequest";

export default class UpdateFloatingWidgetTextRequestDTO {
  visitor_header_text_title: string;
  visitor_header_text_caption: string;
  visitor_account_creation_text_title: string;
  visitor_account_creation_text_signin: string;
  visitor_account_creation_button_create_account_text: string;
  visitor_points_text_title: string;
  visitor_points_text_description: string;
  member_header_text_caption: string;
  status: string;
  updated_by: number;
  user_id: number;

  constructor(body: UpdateFloatingWidgetTextRequest, userId: number) {
    this.visitor_header_text_title = body.visitor_header_text_title;
    this.visitor_header_text_caption = body.visitor_header_text_caption;
    this.visitor_account_creation_text_title =
      body.visitor_account_creation_text_title;
    this.visitor_account_creation_text_signin =
      body.visitor_account_creation_text_signin;
    this.visitor_account_creation_button_create_account_text =
      body.visitor_account_creation_button_create_account_text;
    this.visitor_points_text_title = body.visitor_points_text_title;
    this.visitor_points_text_description = body.visitor_points_text_description;
    this.member_header_text_caption = body.member_header_text_caption;
    this.status = body.status;
    this.user_id = userId;
    this.updated_by = body.updated_by;
  }
}
