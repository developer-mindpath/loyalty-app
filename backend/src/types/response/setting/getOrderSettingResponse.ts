export type GetOrderSettingResponse = {
  id: number;
  store_id: number | null;
  who_can_participate: string | null;
  orders_subtotal: number | null;
  orders_exclude_subtoken_discount: number | null;
  orders_include_tax: number | null;
  orders_include_shipping: number | null;
  points_cancelation_refunde: number | null;
  orders_include_partialy_refunded: number | null;
  orders_include_voided: number | null;
  reward_channel: string | null;
  status: string;
  user_id: number;
  admin_ref: number;
  created_by: number;
  updated_by: number | null;
};
