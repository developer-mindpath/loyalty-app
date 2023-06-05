import { InsertFloatingWidgetTextRequest } from "../../types/request/widget/insertFloatingWidgetTextRequest";

export default class InsertFloatingWidgetTextRequestDTO {
  visitor_header_text_title: string;
  visitor_header_text_caption: string;
  visitor_account_creation_text_title: string;
  visitor_account_creation_text_signin: string;
  visitor_account_creation_button_create_account_text: string;
  visitor_points_text_title: string;
  visitor_points_text_description: string;
  member_header_text_caption: string;
  status: string;
  created_by: number;
  user_id: number;
  admin_ref: number;

  constructor(body: InsertFloatingWidgetTextRequest) {
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
    this.admin_ref = body.admin_ref;
    this.user_id = body.user_id;
    this.created_by = body.created_by;
  }
}
