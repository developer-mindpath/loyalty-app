import { IAudit, ITimestamp } from "@/types";

export type IValidValue = string | number | boolean;

export interface IAppListItem {
  id: number;
  app_title: string;
}

export interface IWithAction<T> {
  pointAction: T;
}

export interface IWithRedeem<T> {
  pointRedeem: T;
}

export interface IProgramStatus extends IAudit, ITimestamp {
  id: number;
  status: string;
  user_id: number;
  admin_ref: number;
  reset_points_to_zero: number;
  is_vip_program_enabled: number;
  is_point_program_enabled: number;
  is_referal_program_enabled: number;
  time_period_to_reset_points_to_zero: number;
}
