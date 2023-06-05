import { InsertFloatingWidgetRequest } from "../../types/request/widget/insertFloatingWidgetRequest";

export default class InsertFloatingWidgetRequestDTO {
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
  widget_corner_shape_button: string;
  widget_corner_shape_text_fields: string;
  widget_banner_image: string;
  widget_brand_icon: string;
  widget_custom_css: string;
  widget_custom_icon_rewards: string;
  widget_custom_icon_ways_to_earn: string;
  widget_custom_icon_ways_to_redeem: string;
  widget_hide_widget_unless_deep_link_activated: number;
  widget_hide_widget_launcher_on_mobile: number;
  widget_brandlift_branding: number;
  widget_font_primary_font: string;
  widget_font_secondary_font: string;
  status: string;
  created_by: number;
  user_id: number;
  admin_ref: number;

  constructor(body: InsertFloatingWidgetRequest) {
    this.widget_color_header_background = body.widget_color_header_background;
    this.widget_color_header_text = body.widget_color_header_text;
    this.widget_color_text_title = body.widget_color_text_title;
    this.widget_color_text_description = body.widget_color_text_description;
    this.widget_color_button_background = body.widget_color_button_background;
    this.widget_color_button_text = body.widget_color_button_text;
    this.widget_color_widget_button_background =
      body.widget_color_widget_button_background;
    this.widget_color_widget_button_text = body.widget_color_widget_button_text;
    this.widget_color_others_link_color = body.widget_color_others_link_color;
    this.widget_color_others_icon_color = body.widget_color_others_icon_color;
    this.widget_corner_shape_screen_launcher_edge =
      body.widget_corner_shape_screen_launcher_edge;
    this.widget_corner_shape_screen_sections =
      body.widget_corner_shape_screen_sections;
    this.widget_corner_shape_button = body.widget_corner_shape_button;
    this.widget_corner_shape_text_fields = body.widget_corner_shape_text_fields;
    this.widget_banner_image = body.widget_banner_image;
    this.widget_brand_icon = body.widget_brand_icon;
    this.widget_custom_css = body.widget_custom_css;
    this.widget_custom_icon_rewards = body.widget_custom_icon_rewards;
    this.widget_custom_icon_ways_to_earn = body.widget_custom_icon_ways_to_earn;
    this.widget_custom_icon_ways_to_redeem =
      body.widget_custom_icon_ways_to_redeem;
    this.widget_hide_widget_unless_deep_link_activated =
      body.widget_hide_widget_unless_deep_link_activated;
    this.widget_hide_widget_launcher_on_mobile =
      body.widget_hide_widget_launcher_on_mobile;
    this.widget_brandlift_branding = body.widget_brandlift_branding;
    this.widget_font_primary_font = body.widget_font_primary_font;
    this.widget_font_secondary_font = body.widget_font_secondary_font;
    this.status = body.status;
    this.admin_ref = body.admin_ref;
    this.user_id = body.user_id;
    this.created_by = body.created_by;
  }
}
