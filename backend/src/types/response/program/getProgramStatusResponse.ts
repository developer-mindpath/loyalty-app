export type GetProgramStatusResponse = {
  id: number;
  is_point_program_enabled: number | null;
  is_referal_program_enabled: number | null;
  is_vip_program_enabled: number | null;
  reset_points_to_zero: number | null;
  time_period_to_reset_points_to_zero: number | null;
  status: string | null;
  user_id: number;
  admin_ref: number | null;
  created_by: number | null;
  updated_by: number | null;
  created_at: Date;
};
