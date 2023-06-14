import { InsertFloatingWidgetButtonRequest } from "../../types/request/widget/insertFloatingWidgetButtonRequest";

export default class InsertFloatingWidgetButtonRequestDTO {
  desktop_placement: string;
  desktop_padding_side_padding: number;
  desktop_padding_bottom_padding: number;
  desktop_widget_button_type: string;
  desktop_widget_button_shape: string;
  desktop_widget_icon: string;
  mobile_placement: string;
  mobile_padding_side_padding: number;
  mobile_padding_bottom_padding: number;
  mobile_widget_button_type: string;
  mobile_widget_button_shape: string;
  mobile_widget_icon: string;
  status: string;
  created_by: number;
  admin_ref: number;
  user_id: number;

  constructor(
    body: InsertFloatingWidgetButtonRequest,
    userId: number,
    adminRef: number
  ) {
    this.desktop_placement = body.desktop_placement;
    this.desktop_padding_side_padding = body.desktop_padding_side_padding;
    this.desktop_padding_bottom_padding = body.desktop_padding_bottom_padding;
    this.desktop_widget_button_type = body.desktop_widget_button_type;
    this.desktop_widget_button_shape = body.desktop_widget_button_shape;
    this.desktop_widget_icon = body.desktop_widget_icon;
    this.mobile_placement = body.mobile_placement;
    this.mobile_padding_side_padding = body.mobile_padding_side_padding;
    this.mobile_padding_bottom_padding = body.mobile_padding_bottom_padding;
    this.mobile_widget_button_type = body.mobile_widget_button_type;
    this.mobile_widget_button_shape = body.mobile_widget_button_shape;
    this.mobile_widget_icon = body.mobile_widget_icon;
    this.status = body.status;
    this.user_id = userId;
    this.created_by = userId;
    this.admin_ref = adminRef;
  }
}
