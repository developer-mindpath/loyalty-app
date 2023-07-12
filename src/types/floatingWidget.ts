import { IAudit, ITimestamp } from "./api";

export interface IWidgetResponse {
  //TODO - remove any
  id: number;
  created_at: any;
  updated_at: string;
  widget_color_header_background: string;
  widget_color_header_text: string;
  widget_color_text_title: string;
  widget_color_text_description: string;
  widget_color_button_background: string;
  widget_color_button_text: string;
  widget_color_widget_button_background: string;
  widget_color_widget_button_text: string;
  widget_color_others_link_color: string;
  widget_color_others_icon_color: string;
  widget_corner_shape_screen_launcher_edge: string;
  widget_corner_shape_screen_sections: string;
  widget_corner_shape_button: any;
  widget_corner_shape_text_fields: any;
  widget_banner_image: any;
  widget_brand_icon: any;
  widget_custom_css: any;
  widget_custom_icon_rewards: any;
  widget_custom_icon_ways_to_earn: any;
  widget_custom_icon_ways_to_redeem: any;
  widget_hide_widget_unless_deep_link_activated: any;
  widget_hide_widget_launcher_on_mobile: any;
  widget_brandlift_branding: any;
  widget_font_primary_font: any;
  widget_font_secondary_font: any;
  status: any;
  created_by: number;
  updated_by: number;
  user_id: number;
  admin_ref: number;
}

export interface IWidgetButtonResponse {
  //TODO - remove any
  id: number;
  created_at: any;
  updated_at: string;
  desktop_placement: string;
  desktop_padding_side_padding: number;
  desktop_padding_bottom_padding: number;
  desktop_widget_button_type: string;
  desktop_widget_button_shape: string;
  desktop_widget_icon: string;
  mobile_placement: string;
  mobile_padding_side_padding: number;
  mobile_padding_bottom_padding: number;
  mobile_widget_button_type: any;
  mobile_widget_button_shape: any;
  mobile_widget_icon: any;
  status: any;
  created_by: number;
  updated_by: number;
  user_id: number;
  admin_ref: any;
}
export interface IWidgetTextResponse  extends IAudit, ITimestamp{
  //TODO - remove any and extend interfaces
  id: number;
  visitor_header_text_title: string;
  visitor_header_text_caption: string;
  visitor_account_creation_text_title: string;
  visitor_account_creation_text_signin: string;
  visitor_account_creation_button_create_account_text: string;
  visitor_points_text_title: string;
  visitor_points_text_description: string;
  member_header_text_caption: string;
  status: string;
  user_id: number;
  admin_ref: number;
}

export interface IFloatingDesignState {
  widgetError: boolean;
  widgetButtonError: boolean;
  widgetTextError: boolean;
  widgetLoading: boolean;
  widgetButtonLoading: boolean;
  widgetTextLoading: boolean;
  widget: IWidgetResponse;
  widgetButton: IWidgetButtonResponse;
  widgetText: IWidgetTextResponse;
}
