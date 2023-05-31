import { UpdateResult } from "typeorm";
import InsertPromptsRequestDTO from "../dto/prompts/insertPromptsRequestDto";
import { GetPromptsResponse } from "../types/response/prompts/getPromptsResponse";
import UpdatePromptsRequestDTO from "../dto/prompts/updatePromptsRequestDto";
import { OnsitePopupModel } from "../database/models/onsitePopups";
import PromptRepository from "../repository/promptRepository";

export default class PromptService {
  private _promptRepository: PromptRepository;
  constructor() {
    this._promptRepository = new PromptRepository();
  }

  public async insertPromptsSetting(
    insertPromptsRequestDTO: InsertPromptsRequestDTO
  ): Promise<OnsitePopupModel> {
    return await this._promptRepository.insertPromptsSetting(
      insertPromptsRequestDTO
    );
  }

  public async getPromptsSetting(userId: number): Promise<GetPromptsResponse> {
    const promptResponse = await this._promptRepository.getPromptsSetting(
      userId
    );
    return promptResponse ? promptResponse : ({} as GetPromptsResponse);
  }

  public async updatePromptsSetting(
    updatePromptsRequestDTO: UpdatePromptsRequestDTO
  ): Promise<UpdateResult> {
    return await this._promptRepository.updatePromptsSetting(
      updatePromptsRequestDTO
    );
  }
}
