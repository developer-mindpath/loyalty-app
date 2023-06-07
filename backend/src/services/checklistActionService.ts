import { UpdateResult } from "typeorm";
import InsertChecklistActionRequestDTO from "../dto/checklist/insertChecklistActionRequestDto";
import { ChecklistActionModel } from "../database/models/checklistAction";
import { GetChecklistActionResponse } from "../types/response/checklist/getChecklistActionResponse";
import UpdateChecklistActionRequestDTO from "../dto/checklist/updateChecklistActionRequestDto";
import ChecklistActionRepository from "../repository/checklistActionRepository";

export default class ChecklistActionService {
  private _checklistActionRepository: ChecklistActionRepository;
  constructor() {
    this._checklistActionRepository = new ChecklistActionRepository();
  }

  public async insertChecklistAction(
    insertChecklistActionRequestDTO: InsertChecklistActionRequestDTO
  ): Promise<ChecklistActionModel> {
    return await this._checklistActionRepository.insertChecklistAction(
      insertChecklistActionRequestDTO
    );
  }

  public async getChecklistAction(
    checklistDetailId: number
  ): Promise<Array<GetChecklistActionResponse>> {
    return await this._checklistActionRepository.getChecklistAction(
      checklistDetailId
    );
  }

  public async updateChecklistAction(
    updateChecklistActionRequestDTO: UpdateChecklistActionRequestDTO
  ): Promise<UpdateResult> {
    return await this._checklistActionRepository.updateChecklistAction(
      updateChecklistActionRequestDTO
    );
  }
}
