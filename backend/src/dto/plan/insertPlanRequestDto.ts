import { InsertPlanRequest } from "../../types/request/plan/insertPlanRequest";

export default class InsertPlanRequestDTO {
  plan_title: string;
  plan_description: string;
  monthly_orders: number;
  monthly_old_price: string;
  montly_current_price: string;
  is_recommended: number;
  status: string;
  created_by: number;
  admin_ref: number;

  constructor(body: InsertPlanRequest, userId: number, adminRef: number) {
    this.plan_title = body.plan_title;
    this.plan_description = body.plan_description;
    this.monthly_orders = body.monthly_orders;
    this.monthly_old_price = body.monthly_old_price;
    this.montly_current_price = body.montly_current_price;
    this.is_recommended = body.is_recommended;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.created_by = userId;
  }
}
