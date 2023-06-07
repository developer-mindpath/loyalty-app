export type GetChecklistDetailResponse = {
  id: number;
  checklist_id: number | null;
  checklist_detail_title: string | null;
  html_body: string | null;
  order_inde: number | null;
  status: string | null;
  created_by: number | null;
  updated_by: number | null;
  admin_ref: number | null;
  created_at: Date;
  updated_at: Date | null;
};
