export type GetVipResponse = {
  is_enabled: number | null;
  start_date: Date | null;
  entry_method: string | null;
  expiry: number | null;
  status: string | null;
  created_by: number | null;
  updated_by: number | null;
  user_id: number;
  admin_ref: number | null;
  created_at: Date;
  updated_at: Date | null;
};
