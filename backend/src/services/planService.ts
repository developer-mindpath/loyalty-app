import { UpdateResult } from "typeorm";
import { GetPlanResponse } from "../types/response/plan/getPlanResponse";
import InsertPlanRequestDTO from "../dto/plan/insertPlanRequestDto";
import PlanRepository from "../repository/planRepository";
import { PlanModel } from "../database/models/plan";
import UpdatePlanRequestDTO from "../dto/plan/updatePlanRequestDto";
import { GetPlanFeatureResponse } from "../types/response/plan/getPlanFeatureResponse";
import InsertPlanFeatureRequestDTO from "../dto/plan/insertPlanFeatureRequestDto";
import { PlanFeatureModel } from "../database/models/planFeature";
import PlanFeatureService from "./planFeatureService";
import UpdatePlanFeatureRequestDTO from "../dto/plan/updatePlanFeatureRequestDto";
import InsertPlanFeatureAssignRequestDTO from "../dto/plan/insertPlanFeatureAssignRequestDto";
import PlanFeatureAssignService from "./planFeatureAssignService";
import { PlanFeatureAssignedModel } from "../database/models/planFeatureAssigned";

export default class PlanService {
  private _planRepository: PlanRepository;
  private _planFeatureService: PlanFeatureService;
  private _planFeatureAssignService: PlanFeatureAssignService;
  constructor() {
    this._planRepository = new PlanRepository();
    this._planFeatureService = new PlanFeatureService();
    this._planFeatureAssignService = new PlanFeatureAssignService();
  }

  public async insertPlan(
    insertPlanRequestDTO: InsertPlanRequestDTO
  ): Promise<PlanModel> {
    return await this._planRepository.insertPlan(insertPlanRequestDTO);
  }

  public async getPlans(): Promise<Array<GetPlanResponse>> {
    return await this._planRepository.getPlans();
  }

  public async updatePlan(
    updatePlanRequestDTO: UpdatePlanRequestDTO
  ): Promise<UpdateResult> {
    return await this._planRepository.updatePlan(updatePlanRequestDTO);
  }

  public async getPlanFeatures(): Promise<Array<GetPlanFeatureResponse>> {
    return await this._planFeatureService.getPlanFeatures();
  }

  public async insertPlanFeature(
    insertPlanFeatureRequestDTO: InsertPlanFeatureRequestDTO
  ): Promise<PlanFeatureModel> {
    return await this._planFeatureService.insertPlanFeature(
      insertPlanFeatureRequestDTO
    );
  }

  public async updatePlanFeature(
    updatePlanFeatureRequestDTO: UpdatePlanFeatureRequestDTO
  ): Promise<UpdateResult> {
    return await this._planFeatureService.updatePlanFeature(
      updatePlanFeatureRequestDTO
    );
  }

  public async insertPlanFeatureAssign(
    insertPlanFeatureAssignRequestDTO: InsertPlanFeatureAssignRequestDTO
  ): Promise<PlanFeatureAssignedModel> {
    return await this._planFeatureAssignService.insertPlanFeatureAssign(
      insertPlanFeatureAssignRequestDTO
    );
  }
}
