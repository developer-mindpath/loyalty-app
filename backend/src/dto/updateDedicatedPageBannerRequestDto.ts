import { UpdateDedicatedPageBannerRequest } from "../types/request/dedicatedPage/updateDedicatedPageBannerRequest";

export default class UpdateDedicatedPageBannerRequestDTO {
  general_banner_image: string;
  general_banner_fontsize: number;
  general_banner_font_color: string;
  general_banner_description_fontsize: number;
  general_banner_description_font_color: string;
  guest_logout_title_text: string;
  guest_logout_description_text: string;
  guest_register_button_text: string;
  guest_register_button_font_size: number;
  guest_register_button_font_color: string;
  guest_register_button_background_color: string;
  guest_login_button_text: string;
  guest_login_button_font_size: number;
  guest_login_button_font_color: string;
  guest_login_button_background_color: string;
  member_loggedIn_title_text: string;
  member_loggedIn_description_text: string;
  member_earn_button_text: string;
  member_earn_button_font_size: number;
  member_earn_button_font_color: string;
  member_earn_button_background_color: string;
  member_redeem_button_text: string;
  member_redeem_button_font_size: number;
  member_redeem_button_font_color: string;
  member_redeem_button_background_color: string;
  status: string;
  admin_ref: number;
  updated_by: number;
  user_id: number;

  constructor(body: UpdateDedicatedPageBannerRequest, userId: number) {
    this.general_banner_image = body.general_banner_image;
    this.general_banner_fontsize = body.general_banner_fontsize;
    this.general_banner_font_color = body.general_banner_font_color;
    this.general_banner_description_fontsize =
      body.general_banner_description_fontsize;
    this.general_banner_description_font_color =
      body.general_banner_description_font_color;
    this.guest_logout_title_text = body.guest_logout_title_text;
    this.guest_logout_description_text = body.guest_logout_description_text;
    this.guest_register_button_text = body.guest_register_button_text;
    this.guest_register_button_font_size = body.guest_register_button_font_size;
    this.guest_register_button_font_color =
      body.guest_register_button_font_color;
    this.guest_register_button_background_color =
      body.guest_register_button_background_color;
    this.guest_login_button_text = body.guest_login_button_text;
    this.guest_login_button_font_size = body.guest_login_button_font_size;
    this.guest_login_button_font_color = body.guest_login_button_font_color;
    this.guest_login_button_background_color =
      body.guest_login_button_background_color;
    this.member_loggedIn_title_text = body.member_loggedIn_title_text;
    this.member_loggedIn_description_text =
      body.member_loggedIn_description_text;
    this.member_earn_button_text = body.member_earn_button_text;
    this.member_earn_button_font_size = body.member_earn_button_font_size;
    this.member_earn_button_font_color = body.member_earn_button_font_color;
    this.member_earn_button_background_color =
      body.member_earn_button_background_color;
    this.member_redeem_button_text = body.member_redeem_button_text;
    this.member_redeem_button_font_size = body.member_redeem_button_font_size;
    this.member_redeem_button_font_color = body.member_redeem_button_font_color;
    this.member_redeem_button_background_color =
      body.member_redeem_button_background_color;
    this.status = body.status;
    this.admin_ref = body.admin_ref;
    this.updated_by = body.updated_by;
    this.user_id = userId;
  }
}
