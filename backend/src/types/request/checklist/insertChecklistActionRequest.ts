export type InsertChecklistActionRequest = {
  checklist_detail_id: number;
  status: string;
  created_by: number;
  user_id: number;
  admin_ref: number;
};
