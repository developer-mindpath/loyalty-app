import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { PlanFeatureAssignedModel } from "./planFeatureAssigned";

@Entity({ name: "plan_feature" })
export class PlanFeatureModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  feature_title: string | null;

  @Column("varchar", { nullable: true })
  feature_description: string | null;

  @Column("varchar", { nullable: true })
  feature_icon: string | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int", { nullable: true })
  admin_ref: number;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.planFeature)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @OneToMany(
    () => PlanFeatureAssignedModel,
    (planFeatureAssigned) => planFeatureAssigned.planFeature
  )
  planFeatureAssigned: PlanFeatureAssignedModel[];
}
