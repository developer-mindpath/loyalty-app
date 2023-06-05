export type GetPromptsResponse = {
  id: number;
  popups_title: string | null;
  popups_view: number | null;
  popups_click: number | null;
  popups_button: number | null;
  status: string | null;
  created_by: number | null;
  updated_by: number | null;
  user_id: number;
  admin_ref: number | null;
  created_at: Date;
  updated_at: Date | null;
};
