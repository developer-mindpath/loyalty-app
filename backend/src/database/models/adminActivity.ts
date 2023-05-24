import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminActivityTypeModel } from "./adminActivityType";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "admin_activity" })
export class AdminActivityModel extends ModelTemplate {
  @Column("int", { nullable: true })
  type_id: number | null;

  @Column("int", { nullable: true })
  admin_user_id: number | null;

  @Column("varchar", { nullable: true })
  activity_status: string | null;

  @Column("datetime", { nullable: true })
  activity_date: Date | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @ManyToOne(
    () => AdminUserModel,
    (adminUserModel) => adminUserModel.adminActivity
  )
  @JoinColumn({ name: "admin_user_id", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(
    () => AdminActivityTypeModel,
    (adminActivityType) => adminActivityType.adminActivity
  )
  @JoinColumn({ name: "type_id", referencedColumnName: "id" })
  adminActivityType: AdminActivityTypeModel;
}
