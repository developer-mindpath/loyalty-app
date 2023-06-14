import Joi from "joi";
import { InsertFloatingWidgetRequest } from "../types/request/widget/insertFloatingWidgetRequest";
import { UpdateFloatingWidgetRequest } from "../types/request/widget/updateFloatingWidgetRequest";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { InsertFloatingWidgetButtonRequest } from "../types/request/widget/insertFloatingWidgetButtonRequest";
import { UpdateFloatingWidgetButtonRequest } from "../types/request/widget/updateFloatingWidgetButtonRequest";
import { InsertFloatingWidgetTextRequest } from "../types/request/widget/insertFloatingWidgetTextRequest";
import { UpdateFloatingWidgetTextRequest } from "../types/request/widget/updateFloatingWidgetTextRequest";

export = {
  0: joiValidationRequest<
    IEmptyObject,
    InsertFloatingWidgetRequest,
    IEmptyObject
  >({
    body: {
      widget_color_header_background: Joi.string().optional(),
      widget_color_header_text: Joi.string().optional(),
      widget_color_text_title: Joi.string().optional(),
      widget_color_text_description: Joi.string().optional(),
      widget_color_button_background: Joi.string().optional(),
      widget_color_button_text: Joi.string().optional(),
      widget_color_widget_button_background: Joi.string().optional(),
      widget_color_widget_button_text: Joi.string().optional(),
      widget_color_others_link_color: Joi.string().optional(),
      widget_color_others_icon_color: Joi.string().optional(),
      widget_corner_shape_screen_launcher_edge: Joi.string().optional(),
      widget_corner_shape_screen_sections: Joi.string().optional(),
      widget_corner_shape_button: Joi.string().optional(),
      widget_corner_shape_text_fields: Joi.string().optional(),
      widget_banner_image: Joi.string().optional(),
      widget_brand_icon: Joi.string().optional(),
      widget_custom_css: Joi.string().optional(),
      widget_custom_icon_rewards: Joi.string().optional(),
      widget_custom_icon_ways_to_earn: Joi.string().optional(),
      widget_custom_icon_ways_to_redeem: Joi.string().optional(),
      widget_hide_widget_unless_deep_link_activated: Joi.number().optional(),
      widget_hide_widget_launcher_on_mobile: Joi.number().optional(),
      widget_brandlift_branding: Joi.number().optional(),
      widget_font_primary_font: Joi.string().optional(),
      widget_font_secondary_font: Joi.string().optional(),
      status: Joi.string().optional(),
    },
  }),
  1: joiValidationRequest<
    IEmptyObject,
    UpdateFloatingWidgetRequest,
    IEmptyObject
  >({
    body: {
      widget_color_header_background: Joi.string().optional(),
      widget_color_header_text: Joi.string().optional(),
      widget_color_text_title: Joi.string().optional(),
      widget_color_text_description: Joi.string().optional(),
      widget_color_button_background: Joi.string().optional(),
      widget_color_button_text: Joi.string().optional(),
      widget_color_widget_button_background: Joi.string().optional(),
      widget_color_widget_button_text: Joi.string().optional(),
      widget_color_others_link_color: Joi.string().optional(),
      widget_color_others_icon_color: Joi.string().optional(),
      widget_corner_shape_screen_launcher_edge: Joi.string().optional(),
      widget_corner_shape_screen_sections: Joi.string().optional(),
      widget_corner_shape_button: Joi.string().optional(),
      widget_corner_shape_text_fields: Joi.string().optional(),
      widget_banner_image: Joi.string().optional(),
      widget_brand_icon: Joi.string().optional(),
      widget_custom_css: Joi.string().optional(),
      widget_custom_icon_rewards: Joi.string().optional(),
      widget_custom_icon_ways_to_earn: Joi.string().optional(),
      widget_custom_icon_ways_to_redeem: Joi.string().optional(),
      widget_hide_widget_unless_deep_link_activated: Joi.number().optional(),
      widget_hide_widget_launcher_on_mobile: Joi.number().optional(),
      widget_brandlift_branding: Joi.number().optional(),
      widget_font_primary_font: Joi.string().optional(),
      widget_font_secondary_font: Joi.string().optional(),
      status: Joi.string().optional(),
    },
  }),
  2: joiValidationRequest<
    IEmptyObject,
    InsertFloatingWidgetButtonRequest,
    IEmptyObject
  >({
    body: {
      desktop_placement: Joi.string().optional(),
      desktop_padding_side_padding: Joi.number().optional(),
      desktop_padding_bottom_padding: Joi.number().optional(),
      desktop_widget_button_type: Joi.string().optional(),
      desktop_widget_button_shape: Joi.string().optional(),
      desktop_widget_icon: Joi.string().optional(),
      mobile_placement: Joi.string().optional(),
      mobile_padding_side_padding: Joi.number().optional(),
      mobile_padding_bottom_padding: Joi.number().optional(),
      mobile_widget_button_type: Joi.string().optional(),
      mobile_widget_button_shape: Joi.string().optional(),
      mobile_widget_icon: Joi.string().optional(),
      status: Joi.string().optional(),
    },
  }),
  3: joiValidationRequest<
    IEmptyObject,
    UpdateFloatingWidgetButtonRequest,
    IEmptyObject
  >({
    body: {
      desktop_placement: Joi.string().optional(),
      desktop_padding_side_padding: Joi.number().optional(),
      desktop_padding_bottom_padding: Joi.number().optional(),
      desktop_widget_button_type: Joi.string().optional(),
      desktop_widget_button_shape: Joi.string().optional(),
      desktop_widget_icon: Joi.string().optional(),
      mobile_placement: Joi.string().optional(),
      mobile_padding_side_padding: Joi.number().optional(),
      mobile_padding_bottom_padding: Joi.number().optional(),
      mobile_widget_button_type: Joi.string().optional(),
      mobile_widget_button_shape: Joi.string().optional(),
      mobile_widget_icon: Joi.string().optional(),
      status: Joi.string().optional(),
    },
  }),
  4: joiValidationRequest<
    IEmptyObject,
    InsertFloatingWidgetTextRequest,
    IEmptyObject
  >({
    body: {
      visitor_header_text_title: Joi.string().optional(),
      visitor_header_text_caption: Joi.string().optional(),
      visitor_account_creation_text_title: Joi.string().optional(),
      visitor_account_creation_text_signin: Joi.string().optional(),
      visitor_account_creation_button_create_account_text:
        Joi.string().optional(),
      visitor_points_text_title: Joi.string().optional(),
      visitor_points_text_description: Joi.string().optional(),
      member_header_text_caption: Joi.string().optional(),
      status: Joi.string().optional(),
    },
  }),
  5: joiValidationRequest<
    IEmptyObject,
    UpdateFloatingWidgetTextRequest,
    IEmptyObject
  >({
    body: {
      visitor_header_text_title: Joi.string().optional(),
      visitor_header_text_caption: Joi.string().optional(),
      visitor_account_creation_text_title: Joi.string().optional(),
      visitor_account_creation_text_signin: Joi.string().optional(),
      visitor_account_creation_button_create_account_text:
        Joi.string().optional(),
      visitor_points_text_title: Joi.string().optional(),
      visitor_points_text_description: Joi.string().optional(),
      member_header_text_caption: Joi.string().optional(),
      status: Joi.string().optional(),
    },
  }),
};
