import { UpdateResult } from "typeorm";
import InsertAccountEmbedRequestDTO from "../dto/accountEmbed/insertAccountEmbedRequestDto";
import { GetAccountEmbedResponse } from "../types/response/accountEmbed/getAccountEmbedResponse";
import UpdateAccountEmbedRequestDTO from "../dto/accountEmbed/updateAccountEmbedRequestDto";
import AccountEmbedRepository from "../repository/accountEmbedRepository";
import { LprPageEmbedModel } from "../database/models/lprPageEmbed";

export default class AccountEmbedService {
  private _accountEmbedRepository: AccountEmbedRepository;
  constructor() {
    this._accountEmbedRepository = new AccountEmbedRepository();
  }

  public async insertAccountEmbed(
    insertAccountEmbedRequestDTO: InsertAccountEmbedRequestDTO
  ): Promise<LprPageEmbedModel> {
    return await this._accountEmbedRepository.insertAccountEmbed(
      insertAccountEmbedRequestDTO
    );
  }

  public async getAccountEmbed(
    userId: number
  ): Promise<GetAccountEmbedResponse> {
    const embedResponse = await this._accountEmbedRepository.getAccountEmbed(
      userId
    );
    return embedResponse ? embedResponse : ({} as GetAccountEmbedResponse);
  }

  public async updateAccountEmbed(
    updateAccountEmbedRequestDTO: UpdateAccountEmbedRequestDTO
  ): Promise<UpdateResult> {
    return await this._accountEmbedRepository.updateAccountEmbed(
      updateAccountEmbedRequestDTO
    );
  }
}
