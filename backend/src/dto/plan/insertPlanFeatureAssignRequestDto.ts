import { InsertPlanFeatureAssignRequest } from "../../types/request/plan/insertPlanFeatureAssignRequest";

export default class InsertPlanFeatureAssignRequestDTO {
  plan_id: number;
  plan_feature_id: number;
  status: string;
  created_by: number;
  admin_ref: number;
  user_id: number;

  constructor(
    body: InsertPlanFeatureAssignRequest,
    userId: number,
    adminRef: number
  ) {
    this.plan_id = body.plan_id;
    this.plan_feature_id = body.plan_feature_id;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.created_by = userId;
    this.user_id = userId;
  }
}
