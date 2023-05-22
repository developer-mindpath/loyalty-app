import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ChecklistCategoryModel } from "./checklistCategory";
import { ChecklistDetailModel } from "./checklistDetail";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "checklist" })
export class ChecklistModel extends ModelTemplate {
  @Column("int", { nullable: true })
  checklist_category_id: number | null;

  @Column("varchar", { nullable: true })
  checklist_title: string | null;

  @Column("varchar", { nullable: true })
  checklist_icon: string | null;

  @Column("int", { nullable: true })
  action_duration: number | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int", { nullable: true })
  admin_ref: number | null;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.checklist)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(
    () => ChecklistCategoryModel,
    (checklistCategory) => checklistCategory.checklist
  )
  @JoinColumn({ name: "checklist_category_id", referencedColumnName: "id" })
  checklistCategory: ChecklistCategoryModel;

  @OneToMany(
    () => ChecklistDetailModel,
    (checklistDetail) => checklistDetail.checklist
  )
  checklistDetail: ChecklistDetailModel[];
}
