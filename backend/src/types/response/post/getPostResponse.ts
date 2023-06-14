export type GetPostResponse = {
  id: number;
  post_tagline: string | null;
  post_description: string | null;
  post_image: string | null;
  post_status: string | null;
  post_date: Date | null;
  status: string | null;
  created_by: number | null;
  updated_by: number | null;
  user_id: number;
  admin_ref: number | null;
  created_at: Date;
  updated_at: Date | null;
};
