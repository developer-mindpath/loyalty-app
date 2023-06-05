export type InsertChecklistRequest = {
  checklist_category_id: number;
  checklist_title: string;
  checklist_icon: string;
  action_duration: number;
  status: string;
  created_by: number;
  admin_ref: number;
};
