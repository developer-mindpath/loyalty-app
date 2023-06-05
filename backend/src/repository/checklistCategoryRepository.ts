import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { ChecklistCategoryModel } from "../database/models/checklistCategory";
import { GetChecklistCategoryResponse } from "../types/response/checklist/getChecklistCategoryResponse";
import InsertChecklistCategoryRequestDTO from "../dto/checklist/insertChecklistCategoryRequestDto";
import UpdateChecklistCategoryRequestDTO from "../dto/checklist/updateChecklistCategoryRequestDto";

export default class ChecklistCategoryRepository {
  private _checklistCategoryModel: Repository<ChecklistCategoryModel>;
  constructor() {
    this._checklistCategoryModel = AppDataSource.getRepository(
      ChecklistCategoryModel
    );
  }

  public async insertChecklistCategory(
    insertChecklistCategoryRequestDTO: InsertChecklistCategoryRequestDTO
  ): Promise<ChecklistCategoryModel> {
    return await this._checklistCategoryModel.save(
      insertChecklistCategoryRequestDTO
    );
  }

  public async getChecklistCategory(): Promise<
    Array<GetChecklistCategoryResponse>
  > {
    return await this._checklistCategoryModel.find();
  }

  public async updateChecklistCategory(
    updateChecklistCategoryRequestDTO: UpdateChecklistCategoryRequestDTO
  ): Promise<UpdateResult> {
    const id = updateChecklistCategoryRequestDTO.categoryId;
    const data = lodash.omit(updateChecklistCategoryRequestDTO, ["categoryId"]);
    return await this._checklistCategoryModel.update({ id }, data);
  }
}
