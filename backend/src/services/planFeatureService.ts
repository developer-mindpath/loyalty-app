import { UpdateResult } from "typeorm";
import { GetPlanFeatureResponse } from "../types/response/plan/getPlanFeatureResponse";
import { PlanFeatureModel } from "../database/models/planFeature";
import PlanFeatureRepository from "../repository/planFeatureRepository";
import InsertPlanFeatureRequestDTO from "../dto/plan/insertPlanFeatureRequestDto";
import UpdatePlanFeatureRequestDTO from "../dto/plan/updatePlanFeatureRequestDto";

export default class PlanFeatureService {
  private _planFeatureRepository: PlanFeatureRepository;
  constructor() {
    this._planFeatureRepository = new PlanFeatureRepository();
  }

  public async insertPlanFeature(
    insertPlanFeatureRequestDTO: InsertPlanFeatureRequestDTO
  ): Promise<PlanFeatureModel> {
    return await this._planFeatureRepository.insertPlanFeature(
      insertPlanFeatureRequestDTO
    );
  }

  public async updatePlanFeature(
    updatePlanFeatureRequestDTO: UpdatePlanFeatureRequestDTO
  ): Promise<UpdateResult> {
    return await this._planFeatureRepository.updatePlanFeature(
      updatePlanFeatureRequestDTO
    );
  }

  public async getPlanFeatures(): Promise<Array<GetPlanFeatureResponse>> {
    return await this._planFeatureRepository.getPlanFeatures();
  }
}
