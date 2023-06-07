import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { ChecklistDetailModel } from "../database/models/checklistDetail";
import InsertChecklistDetailRequestDTO from "../dto/checklist/insertChecklistDetailRequestDto";
import { GetChecklistDetailResponse } from "../types/response/checklist/getChecklistDetailResponse";
import UpdateChecklistDetailRequestDTO from "../dto/checklist/updateChecklistDetailRequestDto";

export default class ChecklistDetailRepository {
  private _checklistDetailModel: Repository<ChecklistDetailModel>;
  constructor() {
    this._checklistDetailModel =
      AppDataSource.getRepository(ChecklistDetailModel);
  }

  public async insertChecklistDetail(
    insertChecklistDetailRequestDTO: InsertChecklistDetailRequestDTO
  ): Promise<ChecklistDetailModel> {
    return await this._checklistDetailModel.save(
      insertChecklistDetailRequestDTO
    );
  }

  public async getChecklistDetail(
    checklistId: number
  ): Promise<Array<GetChecklistDetailResponse>> {
    return await this._checklistDetailModel.find({
      where: { checklist_id: checklistId },
    });
  }

  public async updateChecklistDetail(
    updateChecklistDetailRequestDTO: UpdateChecklistDetailRequestDTO
  ): Promise<UpdateResult> {
    const id = updateChecklistDetailRequestDTO.checklistDetailId;
    const data = lodash.omit(updateChecklistDetailRequestDTO, [
      "checklistDetailId",
    ]);
    return await this._checklistDetailModel.update({ id }, data);
  }
}
