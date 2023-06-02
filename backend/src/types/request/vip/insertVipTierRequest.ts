export type InsertVipTierRequest = {
  tier_key: string;
  tier_key_display_text: string;
  tier_key_icon: string;
  tier_key_description: string;
  goals_to_achieve_tier: number;
  status: string;
  created_by: number;
  user_id: number;
  admin_ref: number;
};
