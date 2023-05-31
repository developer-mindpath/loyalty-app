import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { LprPageEmbedModel } from "../database/models/lprPageEmbed";
import InsertAccountEmbedRequestDTO from "../dto/accountEmbed/insertAccountEmbedRequestDto";
import { GetAccountEmbedResponse } from "../types/response/accountEmbed/getAccountEmbedResponse";
import UpdateAccountEmbedRequestDTO from "../dto/accountEmbed/updateAccountEmbedRequestDto";

export default class AccountEmbedRepository {
  private _accountEmbedModel: Repository<LprPageEmbedModel>;
  constructor() {
    this._accountEmbedModel = AppDataSource.getRepository(LprPageEmbedModel);
  }

  public async insertAccountEmbed(
    insertAccountEmbedRequestDTO: InsertAccountEmbedRequestDTO
  ): Promise<LprPageEmbedModel> {
    return await this._accountEmbedModel.save(insertAccountEmbedRequestDTO);
  }

  public async getAccountEmbed(
    userId: number
  ): Promise<GetAccountEmbedResponse | null> {
    return await this._accountEmbedModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateAccountEmbed(
    updateAccountEmbedRequestDTO: UpdateAccountEmbedRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateAccountEmbedRequestDTO.user_id;
    const data = lodash.omit(updateAccountEmbedRequestDTO, ["user_id"]);
    return await this._accountEmbedModel.update({ user_id }, data);
  }
}
