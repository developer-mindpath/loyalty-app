import moment from "moment";
import { UpdatePostRequest } from "../../types/request/post/updatePostRequest";

export default class UpdatePostRequestDTO {
  post_tagline: string;
  post_description: string;
  post_image: string;
  post_status: string;
  post_date: Date;
  status: string;
  updated_by: number;
  postId: number;

  constructor(body: UpdatePostRequest, postId: number, userId: number) {
    this.post_tagline = body.post_tagline;
    this.post_description = body.post_description;
    this.post_image = body.post_image;
    this.post_status = body.post_status;
    this.post_date = moment(body.post_date).utc().toDate();
    this.status = body.status;
    this.updated_by = userId;
    this.postId = postId;
  }
}
