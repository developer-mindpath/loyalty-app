import { InsertAccountEmbedRequest } from "../../types/request/accountEmbed/insertAccountEmbedRequest";

export default class InsertAccountEmbedRequestDTO {
  is_show_lpr_page: string;
  lpr_page_title: string;
  available_points: string;
  view_my_reward_page: string;
  redirect_path: string;
  freeform_text: string;
  custome_css: string;
  widget_selecter: string;
  widget_position: string;
  widget_page_appear: string;
  status: string;
  created_by: number;
  user_id: number;
  admin_ref: number;

  constructor(body: InsertAccountEmbedRequest) {
    this.is_show_lpr_page = body.is_show_lpr_page;
    this.lpr_page_title = body.lpr_page_title;
    this.available_points = body.available_points;
    this.view_my_reward_page = body.view_my_reward_page;
    this.redirect_path = body.redirect_path;
    this.freeform_text = body.freeform_text;
    this.custome_css = body.custome_css;
    this.widget_selecter = body.widget_selecter;
    this.widget_position = body.widget_position;
    this.widget_page_appear = body.widget_page_appear;
    this.status = body.status;
    this.admin_ref = body.admin_ref;
    this.user_id = body.user_id;
    this.created_by = body.created_by;
  }
}
