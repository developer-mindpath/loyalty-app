import { InsertPointEarnDetailRequest } from "../../types/request/point/insertPointEarnDetailRequest";

export default class InsertPointEarnDetailRequestDTO {
  app_id: number;
  points_amounts: string;
  limit_count: number;
  limit_count_type: string;
  url_to_share: string;
  earning_method: string;
  status: string;
  limit_count_enabled: number;
  admin_ref: number;
  created_by: number;
  point_action_id: number;
  user_id: number;

  constructor(
    body: InsertPointEarnDetailRequest,
    userId: number,
    adminRef: number
  ) {
    this.app_id = body.app_id;
    this.points_amounts = body.points_amounts;
    this.limit_count = body.limit_count;
    this.limit_count_type = body.limit_count_type;
    this.url_to_share = body.url_to_share;
    this.earning_method = body.earning_method;
    this.status = body.status;
    this.limit_count_enabled = body.limit_count_enabled;
    this.admin_ref = adminRef;
    this.created_by = userId;
    this.point_action_id = body.point_action_id;
    this.user_id = userId;
  }
}
