import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { CustomerModel } from "./customer";
import { ModelTemplate } from "./modelTemplate";
import { PointActionModel } from "./pointAction";
import { UserModel } from "./user";

@Entity({ name: "customer_loyality_program_activity" })
export class LoyalityProgramActivityModel extends ModelTemplate {
  @Column("int")
  customer_id: number;

  @Column("int")
  point_action_id: number;

  @Column("int", { nullable: true })
  point: number | null;

  @Column("varchar", { nullable: true })
  point_action: number | null;

  @Column("datetime", { nullable: true })
  activity_date: Date | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  admin_ref: number;

  @Column("int")
  user_id: number;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @ManyToOne(
    () => CustomerModel,
    (customerModel) => customerModel.loyalityProgramActivity
  )
  @JoinColumn({ name: "customer_id", referencedColumnName: "id" })
  customer: CustomerModel;

  @ManyToOne(
    () => PointActionModel,
    (pointAction) => pointAction.loyalityProgramActivity
  )
  @JoinColumn({ name: "point_action_id", referencedColumnName: "id" })
  pointAction: CustomerModel;

  @ManyToOne(() => UserModel, (userModel) => userModel.loyalityProgramActivity)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @ManyToOne(
    () => AdminUserModel,
    (adminUser) => adminUser.loyalityProgramActivity
  )
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;
}
