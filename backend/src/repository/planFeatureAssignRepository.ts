import { Repository } from "typeorm";
import AppDataSource from "../database";
import { PlanFeatureAssignedModel } from "../database/models/planFeatureAssigned";
import InsertPlanFeatureAssignRequestDTO from "../dto/plan/insertPlanFeatureAssignRequestDto";

export default class PlanFeatureAssignRepository {
  private _planFeatureAssignModel: Repository<PlanFeatureAssignedModel>;
  constructor() {
    this._planFeatureAssignModel = AppDataSource.getRepository(
      PlanFeatureAssignedModel
    );
  }

  public async insertPlanFeatureAssign(
    insertPlanFeatureAssignRequestDTO: InsertPlanFeatureAssignRequestDTO
  ): Promise<PlanFeatureAssignedModel> {
    return await this._planFeatureAssignModel.save(
      insertPlanFeatureAssignRequestDTO
    );
  }
}
