export type GetPlanFeatureResponse = {
  id: number;
  feature_title: string | null;
  feature_description: string | null;
  feature_icon: string | null;
  status: string | null;
  created_by: number | null;
  updated_by: number | null;
  admin_ref: number | null;
  created_at: Date;
  updated_at: Date | null;
};
