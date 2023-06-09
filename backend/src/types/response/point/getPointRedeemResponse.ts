export type GetPointRedeemResponse = {
  id: number;
  reward_key: string | null;
  reward_key_key_display_text: string | null;
  reward_icon: string | null;
  reward_description: string | null;
  is_reward_enabled: number | null;
  fixed_points_amount: string | null;
  status: string | null;
  user_id: number;
  admin_ref: number;
  created_by: number | null;
  updated_by: number | null;
  created_at: Date;
  updated_at: Date;
};
