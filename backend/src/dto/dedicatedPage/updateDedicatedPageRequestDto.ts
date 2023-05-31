import { UpdateDedicatedPageRequest } from "../../types/request/dedicatedPage/updateDedicatedPageRequest";

export default class UpdateDedicatedPageRequestDTO {
  is_dedicated_page_on: string;
  general_settings_primary_font: string;
  general_settings_secondry_font: string;
  general_settings_full_width: string;
  general_settings_model_offset: string;
  general_settings_custome_css: string;
  status: string;
  admin_ref: number;
  updated_by: number;
  user_id: number;

  constructor(body: UpdateDedicatedPageRequest, userId: number) {
    this.is_dedicated_page_on = body.is_dedicated_page_on;
    this.general_settings_primary_font = body.general_settings_primary_font;
    this.general_settings_secondry_font = body.general_settings_secondry_font;
    this.general_settings_full_width = body.general_settings_full_width;
    this.general_settings_model_offset = body.general_settings_model_offset;
    this.general_settings_custome_css = body.general_settings_custome_css;
    this.status = body.status;
    this.admin_ref = body.admin_ref;
    this.updated_by = body.updated_by;
    this.user_id = userId;
  }
}
