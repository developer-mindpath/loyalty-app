import { UpdateAppRequest } from "../../types/request/app/updateAppRequest";

export default class UpdateAppRequestDTO {
  app_title: string;
  app_description: string;
  app_url: string;
  status: string;
  updated_by: number;
  appId: number;

  constructor(body: UpdateAppRequest, appId: number, userId: number) {
    this.app_title = body.app_title;
    this.app_description = body.app_description;
    this.app_url = body.app_url;
    this.status = body.status;
    this.appId = appId;
    this.updated_by = userId;
  }
}
