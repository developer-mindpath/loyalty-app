export interface IGetOrderSettingsResponse {
  id: number;
  created_at: string;
  updated_at: string;
  store_id: number;
  who_can_participate: string;
  orders_subtotal: number;
  orders_exclude_subtoken_discount: number;
  orders_include_tax: number;
  orders_include_shipping: number | null;
  points_cancelation_refunde: number | null;
  orders_include_partialy_refunded: number | null;
  orders_include_voided: number | null;
  reward_channel: string | null;
  status: string;
  user_id: number;
  admin_ref: number;
  created_by: number;
  updated_by: number | null;
}

export interface IUpdateOrderSettingsRequest {
  id: string;
  who_can_participate?: string;
  orders_subtotal?: number;
  orders_exclude_subtoken_discount?: number;
  orders_include_tax?: number;
  orders_include_shipping?: number | null;
  points_cancelation_refunde?: number | null;
  orders_include_partialy_refunded?: number | null;
  orders_include_voided?: number | null;
  reward_channel?: string | null;
  status?: string;
}

export interface IGetEmailSettingsResponse {
  id: number;
  created_at: string;
  updated_at: string;
  email_from_name: string;
  email_from_email: string;
  email_reply_email: string;
  custom_email_domain: string;
  custom_url_path_for_email: string;
  design_header_title_color: string;
  design_header_subtitle_color: string;
  design_btn_bg_color: string;
  design_btn_text_color: string | null;
  design_btn_sub_text_color: string | null;
  design_btn_radius: number | null;
  design_footer_text_color: string | null;
  design_footer_link_color: string | null;
  design_image: string | null;
  design_image_type: string | null;
  status: string;
  user_id: number;
  admin_ref: number;
  created_by: number;
  updated_by: number;
}

export interface IUpdateEmailSettingRequest {
  id: string;
  email_from_name?: string;
  email_from_email?: string;
  email_reply_email?: string;
  custom_email_domain?: string;
  custom_url_path_for_email?: string;
  design_header_title_color?: string;
  design_header_subtitle_color?: string;
  design_btn_bg_color?: string;
  design_btn_text_color?: string | null;
  design_btn_sub_text_color?: string | null;
  design_btn_radius?: number | null;
  design_footer_text_color?: string | null;
  design_footer_link_color?: string | null;
  design_image?: string | null;
  design_image_type?: string | null;
  status?: string;
  admin_ref: number;
  user_id: number;
  created_by: number;
}
