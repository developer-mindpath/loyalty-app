import { UpdateVipRequest } from "../../types/request/vip/updateVipRequest";

export default class UpdateVipRequestDTO {
  is_enabled: number;
  start_date: string;
  entry_method: string;
  expiry: number;
  status: string;
  updated_by: number;
  user_id: number;

  constructor(body: UpdateVipRequest, userId: number) {
    this.is_enabled = body.is_enabled;
    this.start_date = body.start_date;
    this.entry_method = body.entry_method;
    this.expiry = body.expiry;
    this.status = body.status;
    this.user_id = userId;
    this.updated_by = body.updated_by;
  }
}
