export type GetReferralsAnalyticsResponse = {
  revenueAttributed: number;
  referralsTraffic: number;
  referralsCompleted: number;
  ordersGenerated: number;
  // revenueAttributedWithDate: Array<RevenueAttributedWithDate>;
  // referralsTrafficWithDate: Array<ReferralsTrafficWithDate>;
  // referralsCompletedWithDate: Array<ReferralsCompletedWithDate>;
  // ordersGeneratedWithDate: Array<OrdersGeneratedWithDate>;
};

export type RevenueAttributedWithDate = {
  date: Date;
  value: number;
};

export type ReferralsTrafficWithDate = {
  date: Date;
  traffic: number;
};

export type ReferralsCompletedWithDate = {
  date: Date;
  completed: number;
};

export type OrdersGeneratedWithDate = {
  date: Date;
  order: number;
};
