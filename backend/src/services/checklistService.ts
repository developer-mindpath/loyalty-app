import { UpdateResult } from "typeorm";
import { GetChecklistCategoryResponse } from "../types/response/checklist/getChecklistCategoryResponse";
import ChecklistCategoryService from "./checklistCategoryService";
import InsertChecklistCategoryRequestDTO from "../dto/checklist/insertChecklistCategoryRequestDto";
import { ChecklistCategoryModel } from "../database/models/checklistCategory";
import UpdateChecklistCategoryRequestDTO from "../dto/checklist/updateChecklistCategoryRequestDto";
import { GetChecklistResponse } from "../types/response/checklist/getChecklistResponse";
import InsertChecklistRequestDTO from "../dto/checklist/insertChecklistRequestDto";
import { ChecklistModel } from "../database/models/checklist";
import UpdateChecklistRequestDTO from "../dto/checklist/updateChecklistRequestDto";
import ChecklistRepository from "../repository/checklistRepository";

export default class ChecklistService {
  private _checklistRepository: ChecklistRepository;
  private _checklistCategoryService: ChecklistCategoryService;
  constructor() {
    this._checklistRepository = new ChecklistRepository();
    this._checklistCategoryService = new ChecklistCategoryService();
  }

  public async insertChecklistCategory(
    insertChecklistCategoryRequestDTO: InsertChecklistCategoryRequestDTO
  ): Promise<ChecklistCategoryModel> {
    return await this._checklistCategoryService.insertChecklistCategory(
      insertChecklistCategoryRequestDTO
    );
  }

  public async getChecklistCategory(): Promise<
    Array<GetChecklistCategoryResponse>
  > {
    return await this._checklistCategoryService.getChecklistCategory();
  }

  public async updateChecklistCategory(
    updateChecklistCategoryRequestDTO: UpdateChecklistCategoryRequestDTO
  ): Promise<UpdateResult> {
    return await this._checklistCategoryService.updateChecklistCategory(
      updateChecklistCategoryRequestDTO
    );
  }

  public async getChecklist(): Promise<Array<GetChecklistResponse>> {
    return await this._checklistRepository.getChecklist();
  }

  public async insertChecklist(
    insertChecklistRequestDTO: InsertChecklistRequestDTO
  ): Promise<ChecklistModel> {
    return await this._checklistRepository.insertChecklist(
      insertChecklistRequestDTO
    );
  }

  public async updateChecklist(
    updateChecklistRequestDTO: UpdateChecklistRequestDTO
  ): Promise<UpdateResult> {
    return await this._checklistRepository.updateChecklist(
      updateChecklistRequestDTO
    );
  }
}
