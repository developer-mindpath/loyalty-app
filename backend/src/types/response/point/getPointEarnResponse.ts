export type GetPointEarnResponse = {
  id: number;
  action_key: string | null;
  action_key_display_text: string | null;
  action_visible_order: number | null;
  action_icon: string | null;
  points_amounts: number | null;
  action_description: string | null;
  is_action_enabled: number | null;
  status: string | null;
  user_id: number;
  admin_ref: number | null;
  created_by: number | null;
  updated_by: number | null;
  created_at: Date;
};
