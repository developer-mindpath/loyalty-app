import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { PlanFeatureModel } from "../database/models/planFeature";
import { GetPlanFeatureResponse } from "../types/response/plan/getPlanFeatureResponse";
import InsertPlanFeatureRequestDTO from "../dto/plan/insertPlanFeatureRequestDto";
import UpdatePlanFeatureRequestDTO from "../dto/plan/updatePlanFeatureRequestDto";

export default class PlanFeatureRepository {
  private _planFeatureModel: Repository<PlanFeatureModel>;
  constructor() {
    this._planFeatureModel = AppDataSource.getRepository(PlanFeatureModel);
  }

  public async insertPlanFeature(
    insertPlanFeatureRequestDTO: InsertPlanFeatureRequestDTO
  ): Promise<PlanFeatureModel> {
    return await this._planFeatureModel.save(insertPlanFeatureRequestDTO);
  }

  public async getPlanFeatures(): Promise<Array<GetPlanFeatureResponse>> {
    return await this._planFeatureModel.find();
  }

  public async updatePlanFeature(
    updatePlanFeatureRequestDTO: UpdatePlanFeatureRequestDTO
  ): Promise<UpdateResult> {
    const id = updatePlanFeatureRequestDTO.planFeatureId;
    const data = lodash.omit(updatePlanFeatureRequestDTO, ["planFeatureId"]);
    return await this._planFeatureModel.update({ id }, data);
  }
}
