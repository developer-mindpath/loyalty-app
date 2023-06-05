import { UpdateResult } from "typeorm";
import { GetChecklistCategoryResponse } from "../types/response/checklist/getChecklistCategoryResponse";
import ChecklistCategoryRepository from "../repository/checklistCategoryRepository";
import InsertChecklistCategoryRequestDTO from "../dto/checklist/insertChecklistCategoryRequestDto";
import { ChecklistCategoryModel } from "../database/models/checklistCategory";
import UpdateChecklistCategoryRequestDTO from "../dto/checklist/updateChecklistCategoryRequestDto";

export default class ChecklistCategoryService {
  private _checklistCategoryRepository: ChecklistCategoryRepository;
  constructor() {
    this._checklistCategoryRepository = new ChecklistCategoryRepository();
  }

  public async insertChecklistCategory(
    insertChecklistCategoryRequestDTO: InsertChecklistCategoryRequestDTO
  ): Promise<ChecklistCategoryModel> {
    return await this._checklistCategoryRepository.insertChecklistCategory(
      insertChecklistCategoryRequestDTO
    );
  }

  public async getChecklistCategory(): Promise<
    Array<GetChecklistCategoryResponse>
  > {
    return await this._checklistCategoryRepository.getChecklistCategory();
  }

  public async updateChecklistCategory(
    updateChecklistCategoryRequestDTO: UpdateChecklistCategoryRequestDTO
  ): Promise<UpdateResult> {
    return await this._checklistCategoryRepository.updateChecklistCategory(
      updateChecklistCategoryRequestDTO
    );
  }
}
