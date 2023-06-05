import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { ChecklistModel } from "../database/models/checklist";
import { GetChecklistResponse } from "../types/response/checklist/getChecklistResponse";
import InsertChecklistRequestDTO from "../dto/checklist/insertChecklistRequestDto";
import UpdateChecklistRequestDTO from "../dto/checklist/updateChecklistRequestDto";

export default class ChecklistRepository {
  private _checklistModel: Repository<ChecklistModel>;
  constructor() {
    this._checklistModel = AppDataSource.getRepository(ChecklistModel);
  }

  public async insertChecklist(
    insertChecklistRequestDTO: InsertChecklistRequestDTO
  ): Promise<ChecklistModel> {
    return await this._checklistModel.save(insertChecklistRequestDTO);
  }

  public async getChecklist(): Promise<Array<GetChecklistResponse>> {
    return await this._checklistModel.find();
  }

  public async updateChecklist(
    updateChecklistRequestDTO: UpdateChecklistRequestDTO
  ): Promise<UpdateResult> {
    const id = updateChecklistRequestDTO.checklistId;
    const data = lodash.omit(updateChecklistRequestDTO, ["checklistId"]);
    return await this._checklistModel.update(
      { checklist_category_id: id },
      data
    );
  }
}
