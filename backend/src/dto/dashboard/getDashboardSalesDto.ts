import { SalesGeneratedParams } from "../../types/request/params";

export default class GetDashboardSalesDTO {
  storeName: string;
  utmCampaign: string;
  utmMedium: string;
  utmSource: string;
  trackingTimeFrame: number;
  discountCode: string;
  interactionTimeFrame: number;
  referralSource: string;
  constructor(query: SalesGeneratedParams) {
    this.storeName = query.storeName;
    this.utmCampaign = query.utmCampaign;
    this.utmMedium = query.utmMedium;
    this.utmSource = query.utmSource;
    this.trackingTimeFrame = query.trackingTimeFrame;
    this.discountCode = query.discountCode;
    this.interactionTimeFrame = query.interactionTimeFrame;
    this.referralSource = query.referralSource;
  }
}
