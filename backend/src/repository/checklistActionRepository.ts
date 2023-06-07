import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { ChecklistActionModel } from "../database/models/checklistAction";
import InsertChecklistActionRequestDTO from "../dto/checklist/insertChecklistActionRequestDto";
import { GetChecklistActionResponse } from "../types/response/checklist/getChecklistActionResponse";
import UpdateChecklistActionRequestDTO from "../dto/checklist/updateChecklistActionRequestDto";

export default class ChecklistActionRepository {
  private _checklistActionModel: Repository<ChecklistActionModel>;
  constructor() {
    this._checklistActionModel =
      AppDataSource.getRepository(ChecklistActionModel);
  }

  public async insertChecklistAction(
    insertChecklistActionRequestDTO: InsertChecklistActionRequestDTO
  ): Promise<ChecklistActionModel> {
    return await this._checklistActionModel.save(
      insertChecklistActionRequestDTO
    );
  }

  public async getChecklistAction(
    checklistDetailId: number
  ): Promise<Array<GetChecklistActionResponse>> {
    return await this._checklistActionModel.find({
      where: { checklist_detail_id: checklistDetailId },
    });
  }

  public async updateChecklistAction(
    updateChecklistActionRequestDTO: UpdateChecklistActionRequestDTO
  ): Promise<UpdateResult> {
    const id = updateChecklistActionRequestDTO.checklistActionId;
    const data = lodash.omit(updateChecklistActionRequestDTO, [
      "checklistActionId",
    ]);
    return await this._checklistActionModel.update({ id }, data);
  }
}
