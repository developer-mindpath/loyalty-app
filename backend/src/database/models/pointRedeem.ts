import { Column, Entity } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "point_redeem" })
export class PointRedeemModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  reward_key: string | null;

  @Column("varchar", { nullable: true })
  reward_key_key_display_text: string | null;

  @Column("varchar", { nullable: true })
  reward_icon: string | null;

  @Column("varchar", { nullable: true })
  reward_description: string | null;

  @Column("tinyint", { nullable: true })
  is_reward_enabled: number | null;

  @Column("varchar")
  status: string;

  @Column("int")
  user_id: number;

  @Column("int")
  admin_ref: number;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;
}
