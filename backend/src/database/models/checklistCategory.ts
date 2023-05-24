import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ChecklistModel } from "./checklist";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "checklist_category" })
export class ChecklistCategoryModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  title: string | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int", { nullable: true })
  admin_ref: number | null;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.checklistCategory)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @OneToMany(() => ChecklistModel, (checklist) => checklist.checklistCategory)
  checklist: ChecklistModel[];
}
