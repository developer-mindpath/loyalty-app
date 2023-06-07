import { UpdateChecklistActionRequest } from "../../types/request/checklist/updateChecklistActionRequest";

export default class UpdateChecklistActionRequestDTO {
  status: string;
  updated_by: number;
  checklistActionId: number;

  constructor(body: UpdateChecklistActionRequest, checklistActionId: number) {
    this.status = body.status;
    this.updated_by = body.updated_by;
    this.checklistActionId = checklistActionId;
  }
}
