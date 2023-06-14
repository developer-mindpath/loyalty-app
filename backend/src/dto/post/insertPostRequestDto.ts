import moment from "moment";
import { InsertPostRequest } from "../../types/request/post/insertPostRequest";

export default class InsertPostRequestDTO {
  post_tagline: string;
  post_description: string;
  post_image: string;
  post_status: string;
  post_date: Date;
  status: string;
  created_by: number;
  user_id: number;
  admin_ref: number;

  constructor(body: InsertPostRequest, userId: number, adminRef: number) {
    this.post_tagline = body.post_tagline;
    this.post_description = body.post_description;
    this.post_image = body.post_image;
    this.post_status = body.post_status;
    this.post_date = moment(body.post_date).utc().toDate();
    this.status = body.status;
    this.admin_ref = adminRef;
    this.user_id = userId;
    this.created_by = userId;
  }
}
