export type GetOrderSettingResponse = {
  id: number;
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
  user_id: number;
  admin_ref: number;
  created_by: number;
  updated_by: number;
};
