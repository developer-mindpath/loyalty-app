import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

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

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.settingOrder)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.settingOrder)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
