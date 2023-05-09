import { NextFunction, Request, Response } from "express";
import ReferralService from "../services/referralService";

export default class ReferralController {
  private _referralService: ReferralService;

  constructor() {
    this._referralService = new ReferralService();
  }

  public async getReferral(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const response = await this._referralService.getReferral(id);
      res.status(200).send(response);
    } catch (e) {
      next(e);
    }
  }

  public async updateReferral(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { body } = req;
      await this._referralService.updateReferral(id, body);
      res.status(200).send({ body: "Success" });
    } catch (e) {
      next(e);
    }
  }
}
