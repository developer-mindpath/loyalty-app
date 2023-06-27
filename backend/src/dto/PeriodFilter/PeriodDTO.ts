import { PeriodQuery } from "../../types/request/params";

export default class PeriodDTO {
  startDate: Date | undefined;
  endDate: Date | undefined;
  constructor(data: PeriodQuery) {
    this.startDate = data.startDate ? new Date(data.startDate) : undefined;
    this.endDate = data.endDate ? new Date(data.endDate) : undefined;
  }
}
