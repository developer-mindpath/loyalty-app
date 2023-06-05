import { UpdateChecklistCategoryRequest } from "../../types/request/checklist/updateChecklistCategoryRequest";

export default class UpdateChecklistCategoryRequestDTO {
  title: string;
  status: string;
  updated_by: number;
  categoryId: number;

  constructor(body: UpdateChecklistCategoryRequest, categoryId: number) {
    this.title = body.title;
    this.status = body.status;
    this.updated_by = body.updated_by;
    this.categoryId = categoryId;
  }
}
