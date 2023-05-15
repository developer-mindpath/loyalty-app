import { StoreModel } from "../database/models/store";
import { Repository } from "typeorm";
import AppDataSource from "../database";

export default class StoreRepository {
  private _storeModel: Repository<StoreModel>;
  constructor() {
    this._storeModel = AppDataSource.getRepository(StoreModel);
  }

  public async insertStore(storeModel: StoreModel): Promise<StoreModel> {
    return await this._storeModel.save(storeModel);
  }
}
