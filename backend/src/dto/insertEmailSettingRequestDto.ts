import { InsertEmailSettingRequest } from "../types/request/setting/insertEmailSettingRequest";

export default class InsertEmailSettingRequestDTO {
  email_from_name: string;
  email_from_email: string;
  email_reply_email: string;
  custom_email_domain: string;
  custom_url_path_for_email: string;
  design_header_title_color: string;
  design_header_subtitle_color: string;
  design_btn_bg_color: string;
  design_btn_text_color: string;
  design_btn_sub_text_color: string;
  design_btn_radius: number;
  design_footer_text_color: string;
  design_footer_link_color: string;
  design_image: string;
  design_image_type: string;
  status: string;
  admin_ref: number;
  created_by: number;
  user_id: number;

  constructor(body: InsertEmailSettingRequest) {
    this.email_from_name = body.email_from_name;
    this.email_from_email = body.email_from_email;
    this.email_reply_email = body.email_reply_email;
    this.custom_email_domain = body.custom_email_domain;
    this.custom_url_path_for_email = body.custom_url_path_for_email;
    this.design_header_title_color = body.design_header_title_color;
    this.design_header_subtitle_color = body.design_header_subtitle_color;
    this.design_btn_bg_color = body.design_btn_bg_color;
    this.design_btn_text_color = body.design_btn_text_color;
    this.design_footer_link_color = body.design_footer_link_color;
    this.design_image = body.design_image;
    this.design_image_type = body.design_image_type;
    this.status = body.status;
    this.admin_ref = body.admin_ref;
    this.created_by = body.created_by;
    this.user_id = body.user_id;
  }
}
