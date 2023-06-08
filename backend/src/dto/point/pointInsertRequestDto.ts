import { PointInsertRequest } from "../../types/request/point/pointInsertRequest";

export default class PointInsertRequestDTO {
  action_key: string;
  action_key_display_text: string;
  action_visible_order: number;
  action_icon: string;
  action_description: string;
  is_action_enabled: number;
  app_id: number;
  points_amounts: string;
  limit_count: number;
  limit_count_type: string;
  url_to_share: string;
  earning_method: string;
  status: string;
  limit_count_enabled: number;
  user_id: number;
  admin_ref: number;
  created_by: number;

  constructor(body: PointInsertRequest, userId: number, adminRef: number) {
    this.action_key = body.action_key;
    this.action_key_display_text = body.action_key_display_text;
    this.action_visible_order = body.action_visible_order;
    this.action_icon = body.action_icon;
    this.action_description = body.action_description;
    this.is_action_enabled = body.is_action_enabled;
    this.status = body.status;
    this.app_id = body.app_id;
    this.points_amounts = body.points_amounts;
    this.limit_count = body.limit_count;
    this.limit_count_type = body.limit_count_type;
    this.url_to_share = body.url_to_share;
    this.earning_method = body.earning_method;
    this.limit_count_enabled = body.limit_count_enabled;
    this.user_id = userId;
    this.admin_ref = adminRef;
    this.created_by = userId;
  }
}
