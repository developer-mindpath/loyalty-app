export type GetReferralProgramActivityResponse = {
  customerId: number;
  referralProgramId: number;
  referralId: number;
  ReferredFriend: string;
  status: string;
  orderAmount: number;
  referredAt: Date;
};
