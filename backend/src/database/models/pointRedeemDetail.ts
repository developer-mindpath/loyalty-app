import { Column, Entity } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "point_redeem_detail" })
export class PointRedeemDetailModel extends ModelTemplate {
  @Column("int")
  point_redeem_id: number;

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
