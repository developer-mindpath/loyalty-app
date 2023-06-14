import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { TranslationModel } from "../database/models/translation";
import { GetTranslationResponse } from "../types/response/translation/getTranslationResponse";
import InsertTranslationRequestDTO from "../dto/translation/insertTranslationRequestDto";
import UpdateTranslationRequestDTO from "../dto/translation/updateTranslationRequestDto";

export default class TranslationRepository {
  private _translationModel: Repository<TranslationModel>;
  constructor() {
    this._translationModel = AppDataSource.getRepository(TranslationModel);
  }

  public async insertTranslation(
    insertTranslationRequestDTO: InsertTranslationRequestDTO
  ): Promise<TranslationModel> {
    return await this._translationModel.save(insertTranslationRequestDTO);
  }

  public async getTranslation(
    userId: number
  ): Promise<GetTranslationResponse | null> {
    return await this._translationModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateTranslation(
    updateTranslationRequestDTO: UpdateTranslationRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateTranslationRequestDTO.user_id;
    const data = lodash.omit(updateTranslationRequestDTO, ["user_id"]);
    return await this._translationModel.update({ user_id }, data);
  }
}
