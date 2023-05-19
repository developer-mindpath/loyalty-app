import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { PointRedeemModel } from "./pointRedeem";
import { UserModel } from "./user";

@Entity({ name: "point_redeem_detail" })
export class PointRedeemDetailModel extends ModelTemplate {
  @Column("int", { nullable: true })
  point_redeem_id: number | null;

  @Column("varchar", { nullable: true })
  points_type: string | null;

  @Column("float", { nullable: true })
  fixed_points_amount: string | null;

  @Column("float", { nullable: true })
  fixed_points_discount: string | null;

  @Column("varchar", { nullable: true })
  fixed_points_discount_type: string | null;

  @Column("float", { nullable: true })
  apply_to_maximum_shipping_amount: string | null;

  @Column("float", { nullable: true })
  incremented_points_amount: string | null;

  @Column("float", { nullable: true })
  incremented_points_money_customer_received: string | null;

  @Column("tinyint", { nullable: true })
  incremented_points_is_set_minimum_points: number | null;

  @Column("tinyint", { nullable: true })
  incremented_points_is_set_maximum_points: number | null;

  @Column("int", { nullable: true })
  incremented_points_minimum_points: number | null;

  @Column("int", { nullable: true })
  incremented_points_maximum_points: number | null;

  @Column("tinyint", { nullable: true })
  is_minimum_cart_requirement: number | null;

  @Column("int", { nullable: true })
  minimum_cart_value: number | null;

  @Column("varchar", { nullable: true })
  apply_to: string | null;

  @Column("int", { nullable: true })
  collection_id: number | null;

  @Column("varchar", { nullable: true })
  purchase_type: string | null;

  @Column("int", { nullable: true })
  reward_expiry: number | null;

  @Column("varchar", { nullable: true })
  products: string | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  admin_ref: number;

  @Column("int", { nullable: true })
  created_by: number | null;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int")
  user_id: number;

  @ManyToOne(
    () => AdminUserModel,
    (adminUserModel) => adminUserModel.pointRedeemDetail
  )
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (userModel) => userModel.pointRedeemDetail)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @OneToOne(
    () => PointRedeemModel,
    (pointRedeem) => pointRedeem.pointRedeemDetail
  )
  @JoinColumn({ name: "point_redeem_id", referencedColumnName: "id" })
  pointRedeem: PointRedeemModel;
}
