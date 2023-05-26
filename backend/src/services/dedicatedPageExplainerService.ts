import { UpdateResult } from "typeorm";
import InsertDedicatedPageExplainerRequestDTO from "../dto/insertDedicatedPageExplainerRequestDto";
import { OnsiteDedicatedPageExplainerModel } from "../database/models/onsiteDedicatedPageExplainer";
import { GetDedicatedPageExplainerResponse } from "../types/response/dedicatedPage/getDedicatedPageExplainerResponse";
import UpdateDedicatedPageExplainerRequestDTO from "../dto/updateDedicatedPageExplainerRequestDto";
import DedicatedPageExplainerRepository from "../repository/dedicatedPageExplainerRepository";

export default class DedicatedPageExplainerService {
  private _dedicatedPageExplainerRepository: DedicatedPageExplainerRepository;
  constructor() {
    this._dedicatedPageExplainerRepository =
      new DedicatedPageExplainerRepository();
  }

  public async insertDedicatedPageExplainer(
    insertDedicatedPageExplainerRequestDTO: InsertDedicatedPageExplainerRequestDTO
  ): Promise<OnsiteDedicatedPageExplainerModel> {
    return await this._dedicatedPageExplainerRepository.insertDedicatedPageExplainer(
      insertDedicatedPageExplainerRequestDTO
    );
  }

  public async getDedicatedPageExplainer(
    userId: number
  ): Promise<GetDedicatedPageExplainerResponse | null> {
    return await this._dedicatedPageExplainerRepository.getDedicatedPageExplainer(
      userId
    );
  }

  public async updateDedicatedPageExplainer(
    updateDedicatedPageExplainerRequestDTO: UpdateDedicatedPageExplainerRequestDTO
  ): Promise<UpdateResult> {
    return await this._dedicatedPageExplainerRepository.updateDedicatedPageExplainer(
      updateDedicatedPageExplainerRequestDTO
    );
  }
}
