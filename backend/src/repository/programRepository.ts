import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { ProgramModel } from "../database/models/program";
import InsertProgramStatusRequestDTO from "../dto/program/insertProgramStatusRequestDto";
import { GetProgramStatusResponse } from "../types/response/program/getProgramStatusResponse";
import UpdateProgramStatusRequestDTO from "../dto/program/updateProgramStatusRequestDto";

export default class ProgramRepository {
  private _programModel: Repository<ProgramModel>;
  constructor() {
    this._programModel = AppDataSource.getRepository(ProgramModel);
  }

  public async insertProgramStatus(
    insertProgramStatusRequestDTO: InsertProgramStatusRequestDTO
  ): Promise<ProgramModel> {
    return await this._programModel.save(insertProgramStatusRequestDTO);
  }

  public async getProgramStatus(
    userId: number
  ): Promise<GetProgramStatusResponse | null> {
    return await this._programModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateProgramStatus(
    updateProgramStatusRequestDTO: UpdateProgramStatusRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateProgramStatusRequestDTO.user_id;
    const data = lodash.omit(updateProgramStatusRequestDTO, ["user_id"]);
    return await this._programModel.update({ user_id }, data);
  }
}
