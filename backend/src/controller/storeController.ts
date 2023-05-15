import { Request, Response } from "express";
import { StoreModel } from "../database/models/store";
import StoreService from "../services/storeService";

export default class StoreController {
  private _storeService: StoreService;

  constructor() {
    this._storeService = new StoreService();
  }
  public async insertStore(req: Request, res: Response): Promise<void> {
    try {
      const reqBody = req.body;
      const storeModel = new StoreModel();
      storeModel.name = reqBody.name;
      storeModel.store = reqBody.store;
      storeModel.token = reqBody.token;
      storeModel.phone = reqBody.phone;
      storeModel.email = reqBody.email;
      const getStoreResponse = await this._storeService.insertStore(storeModel);
      res.status(200).send(getStoreResponse);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
