export type GetLoyaltyProgramActivityResponse = {
  customerId: number;
  loyaltyProgramId: number;
  customerName: string;
  pointAction: string;
  points: number;
  occurredAt: Date;
};
