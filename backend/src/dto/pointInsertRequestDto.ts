import { PointInsertRequest } from "src/types/request/point/pointInsertRequest";

export default class PointInsertRequestDTO {
  action_key: string;
  action_key_display_text: string;
  action_visible_order: number;
  action_icon: string;
  action_description: string;
  is_action_enabled: number;
  status: string;
  user_id: number;
  admin_ref: number;
  created_by: number;
  updated_by: number;

  constructor(body: PointInsertRequest) {
    this.action_key = body.action_key;
    this.action_key_display_text = body.action_key_display_text;
    this.action_visible_order = body.action_visible_order;
    this.action_icon = body.action_icon;
    this.action_description = body.action_description;
    this.is_action_enabled = body.is_action_enabled;
    this.status = body.status;
    this.user_id = body.user_id;
    this.admin_ref = body.admin_ref;
    this.created_by = body.created_by;
    this.updated_by = body.updated_by;
  }
}
