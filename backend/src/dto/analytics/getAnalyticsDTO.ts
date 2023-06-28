import { PeriodQuery } from "../../types/request/params";
import PeriodDTO from "../PeriodFilter/PeriodDTO";

export default class GetAnalyticsDTO {
  periodDTO: PeriodDTO;
  user_id: number;

  constructor(queryParams: PeriodQuery, userId: number) {
    this.periodDTO = new PeriodDTO(queryParams);
    this.user_id = userId;
  }
}
