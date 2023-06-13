import { InsertProgramStatusRequest } from "../../types/request/program/insertProgramStatusRequest";

export default class InsertProgramStatusRequestDTO {
  is_point_program_enabled: number;
  is_referal_program_enabled: number;
  is_vip_program_enabled: number;
  reset_points_to_zero: number;
  time_period_to_reset_points_to_zero: number;
  status: string;
  created_by: number;
  user_id: number;
  admin_ref: number;

  constructor(
    body: InsertProgramStatusRequest,
    userId: number,
    adminRef: number
  ) {
    this.is_point_program_enabled = body.is_point_program_enabled;
    this.is_referal_program_enabled = body.is_referal_program_enabled;
    this.is_vip_program_enabled = body.is_vip_program_enabled;
    this.reset_points_to_zero = body.reset_points_to_zero;
    this.time_period_to_reset_points_to_zero =
      body.time_period_to_reset_points_to_zero;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.user_id = userId;
    this.created_by = userId;
  }
}
