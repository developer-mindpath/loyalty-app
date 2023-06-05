import { InsertDedicatedPageExplainerRequest } from "../../types/request/dedicatedPage/insertDedicatedPageExplainerRequest";

export default class InsertDedicatedPageExplainerRequestDTO {
  general_background_color: string;
  general_header_title_font_size: number;
  general_header_title_font_color: string;
  general_header_subtitle_font_size: number;
  general_header_subtitle_font_color: string;
  guest_header_text: string;
  guest_step_number_font_size: number;
  guest_step_number_font_color: string;
  guest_step_title_font_size: number;
  guest_step_title_font_color: string;
  guest_step_subtitle_font_size: number;
  guest_step_subtitle_font_color: string;
  guest_step_1_title_text: string;
  guest_step_1_subtitle_text: string;
  guest_step_2_title_text: string;
  guest_step_2_subtitle_text: string;
  guest_step_3_title_text: string;
  guest_step_3_subtitle_text: string;
  member_header_text: string;
  member_subtitle_text: string;
  member_activity_action_text: string;
  member_points_text: string;
  member_data_text: string;
  member_your_reward_title_text: string;
  member_reward_title_font_size: number;
  member_reward_title_font_color: string;
  member_no_reward_subtitle_text: string;
  member_has_reward_subtitle_text: string;
  member_reward_subtitle_font_size: string;
  member_reward_subtitle_font_color: string;
  status: string;
  created_by: number;
  user_id: number;
  admin_ref: number;

  constructor(body: InsertDedicatedPageExplainerRequest) {
    this.general_background_color = body.general_background_color;
    this.general_header_title_font_size = body.general_header_title_font_size;
    this.general_header_title_font_color = body.general_header_title_font_color;
    this.general_header_subtitle_font_size =
      body.general_header_subtitle_font_size;
    this.general_header_subtitle_font_color =
      body.general_header_subtitle_font_color;
    this.guest_header_text = body.guest_header_text;
    this.guest_step_number_font_size = body.guest_step_number_font_size;
    this.guest_step_number_font_color = body.guest_step_number_font_color;
    this.guest_step_title_font_size = body.guest_step_title_font_size;
    this.guest_step_title_font_color = body.guest_step_title_font_color;
    this.guest_step_subtitle_font_size = body.guest_step_subtitle_font_size;
    this.guest_step_subtitle_font_color = body.guest_step_subtitle_font_color;
    this.guest_step_1_title_text = body.guest_step_1_title_text;
    this.guest_step_1_subtitle_text = body.guest_step_1_subtitle_text;
    this.guest_step_2_title_text = body.guest_step_2_title_text;
    this.guest_step_2_subtitle_text = body.guest_step_2_subtitle_text;
    this.guest_step_3_title_text = body.guest_step_3_title_text;
    this.guest_step_3_subtitle_text = body.guest_step_3_subtitle_text;
    this.member_header_text = body.member_header_text;
    this.member_subtitle_text = body.member_subtitle_text;
    this.member_activity_action_text = body.member_activity_action_text;
    this.member_points_text = body.member_points_text;
    this.member_data_text = body.member_data_text;
    this.member_your_reward_title_text = body.member_your_reward_title_text;
    this.member_reward_title_font_size = body.member_reward_title_font_size;
    this.member_reward_title_font_color = body.member_reward_title_font_color;
    this.member_no_reward_subtitle_text = body.member_no_reward_subtitle_text;
    this.member_has_reward_subtitle_text = body.member_has_reward_subtitle_text;
    this.member_reward_subtitle_font_size =
      body.member_reward_subtitle_font_size;
    this.member_reward_subtitle_font_color =
      body.member_reward_subtitle_font_color;
    this.status = body.status;
    this.user_id = body.user_id;
    this.admin_ref = body.admin_ref;
    this.created_by = body.created_by;
  }
}
