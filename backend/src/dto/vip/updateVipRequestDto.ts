import { UpdateVipRequest } from "../../types/request/vip/updateVipRequest";
import moment from "moment";

export default class UpdateVipRequestDTO {
  is_enabled: number;
  start_date: Date;
  entry_method: string;
  expiry: number;
  status: string;
  updated_by: number;
  user_id: number;

  constructor(body: UpdateVipRequest, userId: number) {
    this.is_enabled = body.is_enabled;
    this.start_date = moment(body.start_date).utc().toDate();
    this.entry_method = body.entry_method;
    this.expiry = body.expiry;
    this.status = body.status;
    this.user_id = userId;
    this.updated_by = userId;
  }
}
