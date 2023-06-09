import { InsertVipRequest } from "../../types/request/vip/insertVipRequest";

export default class InsertVipRequestDTO {
  is_enabled: number;
  start_date: string;
  entry_method: string;
  expiry: number;
  status: string;
  created_by: number;
  user_id: number;
  admin_ref: number;

  constructor(body: InsertVipRequest, userId: number, adminRef: number) {
    this.is_enabled = body.is_enabled;
    this.start_date = body.start_date;
    this.entry_method = body.entry_method;
    this.expiry = body.expiry;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.user_id = userId;
    this.created_by = userId;
  }
}
