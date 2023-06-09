import { UpdateResult } from "typeorm";
import InsertProgramStatusRequestDTO from "../dto/program/insertProgramStatusRequestDto";
import ProgramRepository from "../repository/programRepository";
import { GetProgramStatusResponse } from "../types/response/program/getProgramStatusResponse";
import { ProgramModel } from "../database/models/program";
import UpdateProgramStatusRequestDTO from "../dto/program/updateProgramStatusRequestDto";

export default class ProgramService {
  private _programRepository: ProgramRepository;
  constructor() {
    this._programRepository = new ProgramRepository();
  }

  public async insertProgramStatus(
    insertProgramStatusRequestDTO: InsertProgramStatusRequestDTO
  ): Promise<ProgramModel> {
    return await this._programRepository.insertProgramStatus(
      insertProgramStatusRequestDTO
    );
  }

  public async getProgramStatus(
    userId: number
  ): Promise<GetProgramStatusResponse> {
    const programResponse = await this._programRepository.getProgramStatus(
      userId
    );
    return programResponse ? programResponse : ({} as GetProgramStatusResponse);
  }

  public async updateProgramStatus(
    updateProgramStatusRequestDTO: UpdateProgramStatusRequestDTO
  ): Promise<UpdateResult> {
    return await this._programRepository.updateProgramStatus(
      updateProgramStatusRequestDTO
    );
  }
}
