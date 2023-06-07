import { UpdateResult } from "typeorm";
import InsertChecklistDetailRequestDTO from "../dto/checklist/insertChecklistDetailRequestDto";
import { ChecklistDetailModel } from "../database/models/checklistDetail";
import { GetChecklistDetailResponse } from "../types/response/checklist/getChecklistDetailResponse";
import ChecklistDetailRepository from "../repository/checklistDetailRepository";
import UpdateChecklistDetailRequestDTO from "../dto/checklist/updateChecklistDetailRequestDto";

export default class ChecklistDetailService {
  private _checklistDetailRepository: ChecklistDetailRepository;
  constructor() {
    this._checklistDetailRepository = new ChecklistDetailRepository();
  }

  public async insertChecklistDetail(
    insertChecklistDetailRequestDTO: InsertChecklistDetailRequestDTO
  ): Promise<ChecklistDetailModel> {
    return await this._checklistDetailRepository.insertChecklistDetail(
      insertChecklistDetailRequestDTO
    );
  }

  public async getChecklistDetail(
    checklistId: number
  ): Promise<Array<GetChecklistDetailResponse>> {
    return await this._checklistDetailRepository.getChecklistDetail(
      checklistId
    );
  }

  public async updateChecklistDetail(
    updateChecklistDetailRequestDTO: UpdateChecklistDetailRequestDTO
  ): Promise<UpdateResult> {
    return await this._checklistDetailRepository.updateChecklistDetail(
      updateChecklistDetailRequestDTO
    );
  }
}
