import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { RoleModel } from "./role";

@Entity({ name: "assigned_role" })
export class AssignedRoleModel extends ModelTemplate {
  @Column("int", { nullable: true })
  role_id: number | null;

  @Column("int", { nullable: true })
  admin_user_id: number | null;

  @Column("datetime", { nullable: true })
  assigned_date: Date | null;

  @Column("tinyint", { nullable: true })
  is_active: number | null;

  @Column("int", { nullable: true })
  assigned_by: number | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @ManyToOne(() => RoleModel, (role) => role.assignedRole)
  @JoinColumn({ name: "role_id", referencedColumnName: "id" })
  role: RoleModel;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.assignedRole)
  @JoinColumn({ name: "admin_user_id", referencedColumnName: "id" })
  adminUser: AdminUserModel;
}
