import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ChecklistDetailModel } from "./checklistDetail";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "checklist_action" })
export class ChecklistActionModel extends ModelTemplate {
  @Column("int", { nullable: true })
  checklist_detail_id: number | null;

  @Column("int")
  user_id: number;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int", { nullable: true })
  admin_ref: number | null;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.checklistAction)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(
    () => ChecklistDetailModel,
    (checklistDetail) => checklistDetail.checklistAction
  )
  @JoinColumn({ name: "checklist_detail_id", referencedColumnName: "id" })
  checklistDetail: ChecklistDetailModel;

  @ManyToOne(() => UserModel, (user) => user.checklistAction)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
