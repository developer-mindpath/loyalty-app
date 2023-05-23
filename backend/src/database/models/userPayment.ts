import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { PlanModel } from "./plan";
import { UserModel } from "./user";

@Entity({ name: "user_payment" })
export class UserPaymentModel extends ModelTemplate {
  @Column("int", { nullable: true })
  plan_id: number;

  @Column("int", { nullable: true })
  user_id: number;

  @Column("datetime", { nullable: true })
  payment_date: Date | null;

  @Column("float", { nullable: true })
  payment_amount: string | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int", { nullable: true })
  admin_ref: number;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.userPayment)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.userPayment)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @ManyToOne(() => PlanModel, (plan) => plan.userPayment)
  @JoinColumn({ name: "plan_id", referencedColumnName: "id" })
  plan: PlanModel;
}
