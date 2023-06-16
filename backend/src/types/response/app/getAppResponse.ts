export type GetAppResponse = {
  id: number;
  app_title: string | null;
  app_description: string | null;
  app_url: string | null;
  status: string | null;
  created_by: number | null;
  updated_by: number | null;
  user_id: number;
  admin_ref: number | null;
  created_at: Date;
  updated_at: Date | null;
};
