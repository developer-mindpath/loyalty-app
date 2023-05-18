import { InsertOrderSettingRequest } from "../types/request/setting/insertOrderSettingRequest";

export default class InsertOrderSettingRequestDTO {
  store_id: number;
  who_can_participate: string;
  orders_subtotal: number;
  orders_exclude_subtoken_discount: number;
  orders_include_tax: number;
  orders_include_shipping: number;
  points_cancelation_refunde: number;
  orders_include_partialy_refunded: number;
  orders_include_voided: number;
  reward_channel: string;
  status: string;
  admin_ref: number;
  created_by: number;
  user_id: number;

  constructor(body: InsertOrderSettingRequest) {
    this.store_id = body.store_id;
    this.who_can_participate = body.who_can_participate;
    this.orders_subtotal = body.orders_subtotal;
    this.orders_exclude_subtoken_discount =
      body.orders_exclude_subtoken_discount;
    this.orders_include_tax = body.orders_include_tax;
    this.orders_include_shipping = body.orders_include_shipping;
    this.points_cancelation_refunde = body.points_cancelation_refunde;
    this.orders_include_partialy_refunded =
      body.orders_include_partialy_refunded;
    this.orders_include_voided = body.orders_include_voided;
    this.reward_channel = body.reward_channel;
    this.status = body.status;
    this.admin_ref = body.admin_ref;
    this.created_by = body.created_by;
    this.user_id = body.user_id;
  }
}
