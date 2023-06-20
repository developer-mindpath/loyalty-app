import { UpdatePlanFeatureRequest } from "../../types/request/plan/updatePlanFeatureRequest";

export default class UpdatePlanFeatureRequestDTO {
  feature_title: string;
  feature_description: string;
  feature_icon: string;
  status: string;
  updated_by: number;
  planFeatureId: number;

  constructor(
    body: UpdatePlanFeatureRequest,
    planFeatureId: number,
    userId: number
  ) {
    this.feature_title = body.feature_title;
    this.feature_description = body.feature_description;
    this.feature_icon = body.feature_icon;
    this.status = body.status;
    this.updated_by = userId;
    this.planFeatureId = planFeatureId;
  }
}
