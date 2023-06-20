export type UpdatePlanRequest = {
  plan_title: string;
  plan_description: string;
  monthly_orders: number;
  monthly_old_price: string;
  montly_current_price: string;
  is_recommended: number;
  status: string;
};
