import { InsertDedicatedPageVipTierRequest } from "../../types/request/dedicatedPage/insertDedicatedPageVipTierRequest";

export default class InsertDedicatedPageVipTierRequestDTO {
  general_background_color: string;
  general_title_text: string;
  general_subtitle_text: string;
  general_title_font_size: number;
  general_title_font_color: string;
  general_subtitle_font_size: number;
  general_subtitle_font_color: string;
  status: string;
  user_id: number;
  admin_ref: number;
  created_by: number;

  constructor(
    body: InsertDedicatedPageVipTierRequest,
    userId: number,
    adminRef: number
  ) {
    this.general_background_color = body.general_background_color;
    this.general_title_text = body.general_title_text;
    this.general_subtitle_text = body.general_subtitle_text;
    this.general_title_font_size = body.general_title_font_size;
    this.general_title_font_color = body.general_title_font_color;
    this.general_subtitle_font_size = body.general_subtitle_font_size;
    this.general_subtitle_font_color = body.general_subtitle_font_color;
    this.status = body.status;
    this.user_id = userId;
    this.admin_ref = adminRef;
    this.created_by = userId;
  }
}
