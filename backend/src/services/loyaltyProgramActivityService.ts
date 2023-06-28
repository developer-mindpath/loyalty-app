import { GetLoyaltyProgramActivityResponse } from "../types/response/activity/getLoyaltyProgramActivityResponse";
import LoyaltyProgramActivityRepository from "../repository/loyaltyProgramActivityRepository";
import PaginationDTO from "../dto/paginationDTO";
import { PointsCustomer } from "../types/response/customer/getCustomerDetailsResponse";

export default class LoyaltyProgramActivityService {
  private _loyaltyProgramActivityRepository: LoyaltyProgramActivityRepository;
  constructor() {
    this._loyaltyProgramActivityRepository =
      new LoyaltyProgramActivityRepository();
  }

  public async getLoyaltyProgramActivity(
    userId: number,
    paginationDTO: PaginationDTO
  ): Promise<Array<GetLoyaltyProgramActivityResponse>> {
    return await this._loyaltyProgramActivityRepository.getLoyaltyProgramActivity(
      userId,
      paginationDTO
    );
  }

  public async getCustomerPointDetails(
    customerId: number
  ): Promise<Array<PointsCustomer>> {
    const pointRecords =
      await this._loyaltyProgramActivityRepository.getCustomerPointDetails(
        customerId
      );
    const pointCustomer = new Array<PointsCustomer>();
    for (let index = 0; index < pointRecords.length; index++) {
      const pointRecord = pointRecords[index];
      const pointCustomerRecord = {
        action: pointRecord.action ? pointRecord.action : "",
        points: pointRecord.points ? Number(pointRecord.points) : 0,
        date: new Date(pointRecord.date),
      } as PointsCustomer;
      pointCustomer.push(pointCustomerRecord);
    }
    return pointCustomer;
  }
}
