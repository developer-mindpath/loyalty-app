import { Repository } from "typeorm";
import AppDataSource from "../database";
import { PointActionModel } from "../database/models/pointAction";
import PointInsertRequestDTO from "../dto/pointInsertRequestDto";
import { GetPointEarnResponse } from "../types/response/point/getPointEarnResponse";

export default class PointRepository {
  private _pointActionModel: Repository<PointActionModel>;
  constructor() {
    this._pointActionModel = AppDataSource.getRepository(PointActionModel);
  }

  public async insertEarningPoint(
    pointInsertRequestDTO: PointInsertRequestDTO
  ): Promise<PointActionModel> {
    return await this._pointActionModel.save(pointInsertRequestDTO);
  }

  public async getAllEarningPoints(
    userId: number
  ): Promise<GetPointEarnResponse[]> {
    return await this._pointActionModel.find({
      where: { user_id: userId },
    });
  }
}
