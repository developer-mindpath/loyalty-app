export type GetCustomerDetailsResponse = {
  customerId: number;
  customerName: string;
  customerEmail: string;
  customerType: string;
  customerBirthday: Date;
  points: Array<PointsCustomer>;
  // rewards: Array<RewardsCustomer>;
  vip: Array<VipCustomer>;
  // recentOrders: Array<RecentOrdersCustomer>;
  createdAt: Date;
};

export type PointsCustomer = {
  action: string;
  points: number;
  date: Date;
};

export type RewardsCustomer = {
  reward: string;
  code: string;
  status: string;
  date: Date;
};

export type VipCustomer = {
  achievedTier: string;
  internalNote: string;
  startedAt: Date;
  endedAt: Date;
};

export type RecentOrdersCustomer = {
  order: string;
  patmentStatus: string;
  total: string;
  date: Date;
};
