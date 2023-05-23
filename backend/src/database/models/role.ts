import { Column, Entity, OneToMany } from "typeorm";
import { AssignedRoleModel } from "./assignedRole";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "role" })
export class RoleModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  title: string | null;

  @Column("varchar", { nullable: true })
  key: string | null;

  @Column("varchar", { nullable: true })
  description: string | null;

  @Column("tinyint", { nullable: true })
  is_active: number | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @OneToMany(() => AssignedRoleModel, (assignedRole) => assignedRole.role)
  assignedRole: AssignedRoleModel[];
}
