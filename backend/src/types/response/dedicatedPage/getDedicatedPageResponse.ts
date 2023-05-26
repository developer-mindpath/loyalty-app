export type GetDedicatedPageResponse = {
  id: number;
  is_dedicated_page_on: string | null;
  general_settings_primary_font: string | null;
  general_settings_secondry_font: string | null;
  general_settings_full_width: string | null;
  general_settings_model_offset: string | null;
  general_settings_custome_css: string | null;
  status: string | null;
  user_id: number;
  admin_ref: number | null;
  created_by: number | null;
  created_at: Date | null;
  updated_at: Date | null;
  updated_by: number | null;
};
