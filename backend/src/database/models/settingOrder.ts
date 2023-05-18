import { Column, Entity } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "settings" })
export class SettingOrderModel extends ModelTemplate {
  @Column("int", { nullable: true })
  store_id: number | null;

  @Column("varchar", { nullable: true })
  who_can_participate: string | null;

  @Column("tinyint", { nullable: true })
  orders_subtotal: number | null;

  @Column("tinyint", { nullable: true })
  orders_exclude_subtoken_discount: number | null;

  @Column("tinyint", { nullable: true })
  orders_include_tax: number | null;

  @Column("tinyint", { nullable: true })
  orders_include_shipping: number | null;

  @Column("tinyint", { nullable: true })
  points_cancelation_refunde: number | null;

  @Column("tinyint", { nullable: true })
  orders_include_partialy_refunded: number | null;

  @Column("tinyint", { nullable: true })
  orders_include_voided: number | null;

  @Column("varchar", { nullable: true })
  reward_channel: string | null;

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
