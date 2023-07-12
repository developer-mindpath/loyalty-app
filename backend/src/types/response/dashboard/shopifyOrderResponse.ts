export type ShopifyOrderResponse = {
  id: number;
  discount_codes: Array<DiscountCodes>;
  source_name: string;
  total_price: string;
  note_attributes: [];
  created_at: string;
  tags: string;
  referring_site: string;
  name: string;
  financial_status: string;
};

export type DiscountCodes = {
  code: string;
  amount: string;
  type: string;
  applicable: boolean;
};
