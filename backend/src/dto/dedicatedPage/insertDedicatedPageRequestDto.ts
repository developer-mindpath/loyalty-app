import { InsertDedicatedPageRequest } from "../../types/request/dedicatedPage/insertDedicatedPageRequest";

export default class InsertDedicatedPageRequestDTO {
  is_dedicated_page_on: string;
  general_settings_primary_font: string;
  general_settings_secondry_font: string;
  general_settings_full_width: string;
  general_settings_model_offset: string;
  general_settings_custome_css: string;
  status: string;
  user_id: number;
  admin_ref: number;
  created_by: number;

  constructor(body: InsertDedicatedPageRequest) {
    this.is_dedicated_page_on = body.is_dedicated_page_on;
    this.general_settings_primary_font = body.general_settings_primary_font;
    this.general_settings_secondry_font = body.general_settings_secondry_font;
    this.general_settings_full_width = body.general_settings_full_width;
    this.general_settings_model_offset = body.general_settings_model_offset;
    this.general_settings_custome_css = body.general_settings_custome_css;
    this.status = body.status;
    this.user_id = body.user_id;
    this.admin_ref = body.admin_ref;
    this.created_by = body.created_by;
  }
}
