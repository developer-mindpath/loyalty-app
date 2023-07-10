import { AnalyticsReferralsParams } from "../../types/request/params";
import PeriodDTO from "../PeriodFilter/PeriodDTO";

export default class GetReferralsAnalyticsDTO {
  periodDTO: PeriodDTO;
  shopName: string;
  referralSource: string;
  referralCompletedTag: string;
  referredCustomerTag: string;

  constructor(queryParams: AnalyticsReferralsParams) {
    this.periodDTO = new PeriodDTO(queryParams);
    this.shopName = queryParams.shopName;
    this.referralSource = queryParams.referralSource;
    this.referralCompletedTag = queryParams.referralCompletedTag;
    this.referredCustomerTag = queryParams.referredCustomerTag;
  }
}
