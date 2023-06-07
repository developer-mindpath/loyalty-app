export type GetVipTierResponse = {
  id: number;
  tier_key: string | null;
  tier_key_display_text: string | null;
  tier_key_icon: string | null;
  tier_key_description: string | null;
  goals_to_achieve_tier: number | null;
  status: string | null;
  created_by: number | null;
  updated_by: number | null;
  user_id: number;
  admin_ref: number | null;
  created_at: Date;
  updated_at: Date | null;
};
