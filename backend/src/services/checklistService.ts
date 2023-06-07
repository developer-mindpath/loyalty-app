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
import InsertChecklistDetailRequestDTO from "../dto/checklist/insertChecklistDetailRequestDto";
import { ChecklistDetailModel } from "../database/models/checklistDetail";
import { GetChecklistDetailResponse } from "../types/response/checklist/getChecklistDetailResponse";
import ChecklistDetailService from "./checklistDetailService";
import UpdateChecklistDetailRequestDTO from "../dto/checklist/updateChecklistDetailRequestDto";
import InsertChecklistActionRequestDTO from "../dto/checklist/insertChecklistActionRequestDto";
import { ChecklistActionModel } from "../database/models/checklistAction";
import { GetChecklistActionResponse } from "../types/response/checklist/getChecklistActionResponse";
import UpdateChecklistActionRequestDTO from "../dto/checklist/updateChecklistActionRequestDto";
import ChecklistActionService from "./checklistActionService";

export default class ChecklistService {
  private _checklistRepository: ChecklistRepository;
  private _checklistCategoryService: ChecklistCategoryService;
  private _checklistDetailService: ChecklistDetailService;
  private _checklistActionService: ChecklistActionService;
  constructor() {
    this._checklistRepository = new ChecklistRepository();
    this._checklistCategoryService = new ChecklistCategoryService();
    this._checklistDetailService = new ChecklistDetailService();
    this._checklistActionService = new ChecklistActionService();
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

  public async getChecklist(
    categoryId: number
  ): Promise<Array<GetChecklistResponse>> {
    return await this._checklistRepository.getChecklist(categoryId);
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

  public async insertChecklistDetail(
    insertChecklistDetailRequestDTO: InsertChecklistDetailRequestDTO
  ): Promise<ChecklistDetailModel> {
    return await this._checklistDetailService.insertChecklistDetail(
      insertChecklistDetailRequestDTO
    );
  }

  public async getChecklistDetail(
    checklistId: number
  ): Promise<Array<GetChecklistDetailResponse>> {
    return await this._checklistDetailService.getChecklistDetail(checklistId);
  }

  public async updateChecklistDetail(
    updateChecklistDetailRequestDTO: UpdateChecklistDetailRequestDTO
  ): Promise<UpdateResult> {
    return await this._checklistDetailService.updateChecklistDetail(
      updateChecklistDetailRequestDTO
    );
  }

  public async insertChecklistAction(
    insertChecklistActionRequestDTO: InsertChecklistActionRequestDTO
  ): Promise<ChecklistActionModel> {
    return await this._checklistActionService.insertChecklistAction(
      insertChecklistActionRequestDTO
    );
  }

  public async getChecklistAction(
    checklistDetailId: number
  ): Promise<Array<GetChecklistActionResponse>> {
    return await this._checklistActionService.getChecklistAction(
      checklistDetailId
    );
  }

  public async updateChecklistAction(
    updateChecklistActionRequestDTO: UpdateChecklistActionRequestDTO
  ): Promise<UpdateResult> {
    return await this._checklistActionService.updateChecklistAction(
      updateChecklistActionRequestDTO
    );
  }
}
