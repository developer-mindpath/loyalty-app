export type InsertEmailSettingRequest = {
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
};
