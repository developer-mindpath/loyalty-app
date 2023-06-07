export type GetChecklistActionResponse = {
  id: number;
  checklist_detail_id: number | null;
  status: string | null;
  created_by: number | null;
  updated_by: number | null;
  admin_ref: number | null;
  user_id: number;
  created_at: Date;
  updated_at: Date | null;
};
