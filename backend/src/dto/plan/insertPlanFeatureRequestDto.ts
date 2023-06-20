import { InsertPlanFeatureRequest } from "../../types/request/plan/insertPlanFeatureRequest";

export default class InsertPlanFeatureRequestDTO {
  feature_title: string;
  feature_description: string;
  feature_icon: string;
  status: string;
  created_by: number;
  admin_ref: number;

  constructor(
    body: InsertPlanFeatureRequest,
    userId: number,
    adminRef: number
  ) {
    this.feature_title = body.feature_title;
    this.feature_description = body.feature_description;
    this.feature_icon = body.feature_icon;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.created_by = userId;
  }
}
