import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { PlanFeatureAssignedModel } from "./planFeatureAssigned";

@Entity({ name: "plan" })
export class PlanModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  plan_title: string | null;

  @Column("varchar", { nullable: true })
  plan_description: string | null;

  @Column("int", { nullable: true })
  monthly_orders: number | null;

  @Column("float", { nullable: true })
  monthly_old_price: string | null;

  @Column("float", { nullable: true })
  montly_current_price: string | null;

  @Column("tinyint", { nullable: true })
  is_recommended: number | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int", { nullable: true })
  admin_ref: number | null;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.plan)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @OneToMany(
    () => PlanFeatureAssignedModel,
    (planFeatureAssigned) => planFeatureAssigned.plan
  )
  planFeatureAssigned: PlanFeatureAssignedModel[];
}
