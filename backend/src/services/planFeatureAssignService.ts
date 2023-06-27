import InsertPlanFeatureAssignRequestDTO from "../dto/plan/insertPlanFeatureAssignRequestDto";
import { PlanFeatureAssignedModel } from "../database/models/planFeatureAssigned";
import PlanFeatureAssignRepository from "../repository/planFeatureAssignRepository";

export default class PlanFeatureAssignService {
  private _planFeatureAssignRepository: PlanFeatureAssignRepository;
  constructor() {
    this._planFeatureAssignRepository = new PlanFeatureAssignRepository();
  }

  public async insertPlanFeatureAssign(
    insertPlanFeatureAssignRequestDTO: InsertPlanFeatureAssignRequestDTO
  ): Promise<PlanFeatureAssignedModel> {
    return await this._planFeatureAssignRepository.insertPlanFeatureAssign(
      insertPlanFeatureAssignRequestDTO
    );
  }
}
