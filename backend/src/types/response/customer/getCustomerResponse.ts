export type GetCustomerResponse = {
  customerId: number;
  customerName: string;
  customerEmail: string;
  status: string;
  points: number;
  vipTier: string;
  createdAt: Date;
};
