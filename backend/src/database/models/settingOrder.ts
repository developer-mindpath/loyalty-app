import { Column, Entity } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "settings" })
export class SettingOrderModel extends ModelTemplate {
  @Column("int")
  store_id: number;

  @Column("varchar")
  who_can_participate: string;

  @Column("tinyint")
  orders_subtotal: number;

  @Column("tinyint")
  orders_exclude_subtoken_discount: number;

  @Column("tinyint")
  orders_include_tax: number;

  @Column("tinyint")
  orders_include_shipping: number;

  @Column("tinyint")
  points_cancelation_refunde: number;

  @Column("tinyint")
  orders_include_partialy_refunded: number;

  @Column("tinyint")
  orders_include_voided: number;

  @Column("varchar")
  reward_channel: string;

  @Column("varchar")
  status: string;

  @Column("int")
  user_id: number;

  @Column("int")
  admin_ref: number;

  @Column("int")
  created_by: number;

  @Column("int")
  updated_by: number;
}
