import { UserModel } from "../database/models/user";
import { Repository } from "typeorm";
import AppDataSource from "../database";

export default class LoginRepository {
  private _userModel: Repository<UserModel>;
  constructor() {
    this._userModel = AppDataSource.getRepository(UserModel);
  }

  public async login(email: string): Promise<UserModel | null> {
    return await this._userModel.findOne({
      select: ["password", "id", "admin_ref"],
      where: { email },
    });
  }
}
