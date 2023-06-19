import { InsertAppRequest } from "../../types/request/app/insertAppRequest";

export default class InsertAppRequestDTO {
  app_title: string;
  app_description: string;
  app_url: string;
  status: string;
  created_by: number;
  user_id: number;
  admin_ref: number;

  constructor(body: InsertAppRequest, userId: number, adminRef: number) {
    this.app_title = body.app_title;
    this.app_description = body.app_description;
    this.app_url = body.app_url;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.user_id = userId;
    this.created_by = userId;
  }
}
