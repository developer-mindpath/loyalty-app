import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { PlanModel } from "./plan";
import { UserModel } from "./user";

@Entity({ name: "user_current_plan" })
export class UserCurrentPlanModel extends ModelTemplate {
  @Column("int", { nullable: true })
  user_id: number;

  @Column("int", { nullable: true })
  plan_id: number | null;

  @Column("datetime", { nullable: true })
  billing_date: Date | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int", { nullable: true })
  admin_ref: number;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.userCurrentPlan)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.userCurrentPlan)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @ManyToOne(() => PlanModel, (plan) => plan.userCurrentPlan)
  @JoinColumn({ name: "plan_id", referencedColumnName: "id" })
  plan: PlanModel;
}
