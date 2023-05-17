import { Column, Entity } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "referral" })
export class ReferralModel extends ModelTemplate {
  @Column("boolean")
  enable: boolean;

  @Column("decimal")
  points_amount: number;

  @Column("decimal", { default: 0 })
  points_limit: number;

  @Column("varchar", { default: "" })
  selected_option: string;

  @Column("varchar")
  review_app: string;

  @Column("boolean")
  limit_count_enabled: boolean;
}
