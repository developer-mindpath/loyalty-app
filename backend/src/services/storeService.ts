import { StoreModel } from "../database/models/store";
import StoreRepository from "../repository/storeRepository";

export default class StoreService {
  private _storeRepository: StoreRepository;
  constructor() {
    this._storeRepository = new StoreRepository();
  }

  public async insertStore(storeModel: StoreModel): Promise<StoreModel> {
    return await this._storeRepository.insertStore(storeModel);
  }
}
