export type InsertVipTierRewardRequest = {
  vip_tier_id: number;
  point_redeemed_id: number;
  reward_key: string;
  reward_key_key_display_text: string;
  reward_icon: string;
  reward_description: string;
  is_reward_enabled: string;
  status: string;
  created_by: number;
  admin_ref: number;
};
