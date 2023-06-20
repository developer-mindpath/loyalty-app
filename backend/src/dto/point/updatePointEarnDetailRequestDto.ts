import { UpdatePointEarnDetailRequest } from "../../types/request/point/updatePointEarnDetailRequest";

export default class UpdatePointEarnDetailRequestDTO {
  app_id: number;
  points_amounts: string;
  limit_count: number;
  limit_count_type: string;
  url_to_share: string;
  earning_method: string;
  status: string;
  limit_count_enabled: number;
  admin_ref: number;
  updated_by: number;
  point_action_id: number;
  action_icon: string;
  is_action_enabled: number;
  action_visible_order: number;

  constructor(
    body: UpdatePointEarnDetailRequest,
    pointId: number,
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
    this.updated_by = userId;
    this.point_action_id = pointId;
    this.action_icon = body.action_icon;
    this.is_action_enabled = body.is_action_enabled;
    this.action_visible_order = body.action_visible_order;
  }
}
