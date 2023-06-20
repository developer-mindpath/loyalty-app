export type GetPlanResponse = {
  id: number;
  plan_title: string | null;
  plan_description: string | null;
  monthly_orders: number | null;
  monthly_old_price: string | null;
  montly_current_price: string | null;
  is_recommended: number | null;
  status: string | null;
  created_by: number | null;
  updated_by: number | null;
  admin_ref: number | null;
  created_at: Date;
  updated_at: Date | null;
};
