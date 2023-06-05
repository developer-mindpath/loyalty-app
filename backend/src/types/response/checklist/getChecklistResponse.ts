export type GetChecklistResponse = {
  id: number;
  checklist_category_id: number | null;
  checklist_title: string | null;
  checklist_icon: string | null;
  action_duration: number | null;
  status: string | null;
  created_by: number | null;
  updated_by: number | null;
  admin_ref: number | null;
  created_at: Date;
  updated_at: Date | null;
};
