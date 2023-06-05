export type GetFloatingWidgetTextResponse = {
  id: number;
  visitor_header_text_title: string | null;
  visitor_header_text_caption: string | null;
  visitor_account_creation_text_title: string | null;
  visitor_account_creation_text_signin: string | null;
  visitor_account_creation_button_create_account_text: string | null;
  visitor_points_text_title: string | null;
  visitor_points_text_description: string | null;
  member_header_text_caption: string | null;
  status: string | null;
  created_by: number | null;
  updated_by: number | null;
  user_id: number;
  admin_ref: number | null;
  created_at: Date;
  updated_at: Date | null;
};
