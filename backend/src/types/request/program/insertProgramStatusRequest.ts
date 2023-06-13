export type InsertProgramStatusRequest = {
  is_point_program_enabled: number;
  is_referal_program_enabled: number;
  is_vip_program_enabled: number;
  reset_points_to_zero: number;
  time_period_to_reset_points_to_zero: number;
  status: string;
};
