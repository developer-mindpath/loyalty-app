export type GetAnalyticsResponse = {
  member: number;
  pointsEarn: number;
  pointsSpent: number;
  redemptionRate: string;
  membersWithDate: Array<MembersWithDate>;
  earningPointsWithDate: Array<EarningPointsWithDate>;
  spentPointsWithDate: Array<SpentPointsWithDate>;
};

export type MembersWithDate = {
  date: Date;
  count: number;
};

export type EarningPointsWithDate = {
  points: number;
  date: Date;
};

export type SpentPointsWithDate = {
  points: number;
  date: Date;
};
