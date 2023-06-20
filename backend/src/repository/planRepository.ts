import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { PlanModel } from "../database/models/plan";
import { GetPlanResponse } from "../types/response/plan/getPlanResponse";
import InsertPlanRequestDTO from "../dto/plan/insertPlanRequestDto";
import UpdatePlanRequestDTO from "../dto/plan/updatePlanRequestDto";

export default class PlanRepository {
  private _planModel: Repository<PlanModel>;
  constructor() {
    this._planModel = AppDataSource.getRepository(PlanModel);
  }

  public async insertPlan(
    insertPlanRequestDTO: InsertPlanRequestDTO
  ): Promise<PlanModel> {
    return await this._planModel.save(insertPlanRequestDTO);
  }

  public async getPlans(): Promise<Array<GetPlanResponse>> {
    return await this._planModel.find();
  }

  public async updatePlan(
    updatePlanRequestDTO: UpdatePlanRequestDTO
  ): Promise<UpdateResult> {
    const id = updatePlanRequestDTO.planId;
    const data = lodash.omit(updatePlanRequestDTO, ["planId"]);
    return await this._planModel.update({ id }, data);
  }
}
