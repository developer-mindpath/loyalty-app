import { UpdateChecklistRequest } from "../../types/request/checklist/updateChecklistRequest";

export default class UpdateChecklistRequestDTO {
  checklist_title: string;
  checklist_icon: string;
  action_duration: number;
  status: string;
  updated_by: number;
  checklistId: number;

  constructor(body: UpdateChecklistRequest, checklistId: number) {
    this.checklist_title = body.checklist_title;
    this.checklist_icon = body.checklist_icon;
    this.action_duration = body.action_duration;
    this.status = body.status;
    this.updated_by = body.updated_by;
    this.checklistId = checklistId;
  }
}
