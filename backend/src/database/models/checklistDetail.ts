import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ChecklistModel } from "./checklist";
import { ChecklistActionModel } from "./checklistAction";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "checklist_detail" })
export class ChecklistDetailModel extends ModelTemplate {
  @Column("int", { nullable: true })
  checklist_id: number | null;

  @Column("varchar", { nullable: true })
  checklist_detail_title: string | null;

  @Column("varchar", { nullable: true })
  html_body: string | null;

  @Column("int", { nullable: true })
  order_inde: number | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int", { nullable: true })
  admin_ref: number | null;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.checklistDetail)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => ChecklistModel, (checklist) => checklist.checklistDetail)
  @JoinColumn({ name: "checklist_id", referencedColumnName: "id" })
  checklist: ChecklistModel;

  @OneToMany(
    () => ChecklistActionModel,
    (checklistAction) => checklistAction.checklistDetail
  )
  checklistAction: ChecklistActionModel[];
}
