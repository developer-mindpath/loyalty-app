import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { OnsitePopupModel } from "../database/models/onsitePopups";
import InsertPromptsRequestDTO from "../dto/prompts/insertPromptsRequestDto";
import { GetPromptsResponse } from "../types/response/prompts/getPromptsResponse";
import UpdatePromptsRequestDTO from "../dto/prompts/updatePromptsRequestDto";

export default class PromptRepository {
  private _promptModel: Repository<OnsitePopupModel>;
  constructor() {
    this._promptModel = AppDataSource.getRepository(OnsitePopupModel);
  }

  public async insertPromptsSetting(
    insertPromptsRequestDTO: InsertPromptsRequestDTO
  ): Promise<OnsitePopupModel> {
    return await this._promptModel.save(insertPromptsRequestDTO);
  }

  public async getPromptsSetting(
    userId: number
  ): Promise<GetPromptsResponse | null> {
    return await this._promptModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updatePromptsSetting(
    updatePromptsRequestDTO: UpdatePromptsRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updatePromptsRequestDTO.user_id;
    const data = lodash.omit(updatePromptsRequestDTO, ["user_id"]);
    return await this._promptModel.update({ user_id }, data);
  }
}
