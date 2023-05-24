import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { PlanModel } from "./plan";
import { PlanFeatureModel } from "./planFeature";
import { UserModel } from "./user";

@Entity({ name: "plan_feature_assigned" })
export class PlanFeatureAssignedModel extends ModelTemplate {
  @Column("int", { nullable: true })
  plan_id: number | null;

  @Column("int", { nullable: true })
  plan_feature_id: number | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int", { nullable: true })
  admin_ref: number;

  @Column("int", { nullable: true })
  user_id: number;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.planFeatureAssigned)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.planFeatureAssigned)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @ManyToOne(() => PlanModel, (plan) => plan.planFeatureAssigned)
  @JoinColumn({ name: "plan_id", referencedColumnName: "id" })
  plan: PlanModel;

  @ManyToOne(
    () => PlanFeatureModel,
    (planFeature) => planFeature.planFeatureAssigned
  )
  @JoinColumn({ name: "plan_feature_id", referencedColumnName: "id" })
  planFeature: PlanFeatureModel;
}
