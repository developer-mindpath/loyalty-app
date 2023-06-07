export type InsertChecklistDetailRequest = {
  checklist_id: number;
  checklist_detail_title: string;
  html_body: string;
  order_inde: number;
  status: string;
  created_by: number;
  admin_ref: number;
};
