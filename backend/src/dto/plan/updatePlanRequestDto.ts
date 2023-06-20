import { UpdatePlanRequest } from "../../types/request/plan/updatePlanRequest";

export default class UpdatePlanRequestDTO {
  plan_title: string;
  plan_description: string;
  monthly_orders: number;
  monthly_old_price: string;
  montly_current_price: string;
  is_recommended: number;
  status: string;
  updated_by: number;
  planId: number;

  constructor(body: UpdatePlanRequest, planId: number, userId: number) {
    this.plan_title = body.plan_title;
    this.plan_description = body.plan_description;
    this.monthly_orders = body.monthly_orders;
    this.monthly_old_price = body.monthly_old_price;
    this.montly_current_price = body.montly_current_price;
    this.is_recommended = body.is_recommended;
    this.status = body.status;
    this.updated_by = userId;
    this.planId = planId;
  }
}
