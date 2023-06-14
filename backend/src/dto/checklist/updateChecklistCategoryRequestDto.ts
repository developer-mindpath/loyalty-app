import { UpdateChecklistCategoryRequest } from "../../types/request/checklist/updateChecklistCategoryRequest";

export default class UpdateChecklistCategoryRequestDTO {
  title: string;
  status: string;
  updated_by: number;
  categoryId: number;

  constructor(
    body: UpdateChecklistCategoryRequest,
    categoryId: number,
    userId: number
  ) {
    this.title = body.title;
    this.status = body.status;
    this.updated_by = userId;
    this.categoryId = categoryId;
  }
}
