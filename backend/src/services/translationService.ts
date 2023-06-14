import { UpdateResult } from "typeorm";
import { GetTranslationResponse } from "../types/response/translation/getTranslationResponse";
import TranslationRepository from "../repository/translationRepository";
import InsertTranslationRequestDTO from "../dto/translation/insertTranslationRequestDto";
import { TranslationModel } from "../database/models/translation";
import UpdateTranslationRequestDTO from "../dto/translation/updateTranslationRequestDto";

export default class TranslationService {
  private _translationRepository: TranslationRepository;
  constructor() {
    this._translationRepository = new TranslationRepository();
  }

  public async insertTranslation(
    insertTranslationRequestDTO: InsertTranslationRequestDTO
  ): Promise<TranslationModel> {
    return await this._translationRepository.insertTranslation(
      insertTranslationRequestDTO
    );
  }

  public async getTranslation(userId: number): Promise<GetTranslationResponse> {
    const embedResponse = await this._translationRepository.getTranslation(
      userId
    );
    return embedResponse ? embedResponse : ({} as GetTranslationResponse);
  }

  public async updateTranslation(
    updateTranslationRequestDTO: UpdateTranslationRequestDTO
  ): Promise<UpdateResult> {
    return await this._translationRepository.updateTranslation(
      updateTranslationRequestDTO
    );
  }
}
