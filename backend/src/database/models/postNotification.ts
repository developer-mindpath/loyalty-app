import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { PostModel } from "./post";

@Entity({ name: "post_notification" })
export class PostNotificationModel extends ModelTemplate {
  @Column("int", { nullable: true })
  post_id: number | null;

  @Column("int", { nullable: true })
  notification_source_id: number | null;

  @Column("varchar", { nullable: true })
  notification_type: string | null;

  @Column("datetime", { nullable: true })
  notification_date: Date | null;

  @Column("int", { nullable: true })
  admin_ref: number;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.postNotification)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => PostModel, (post) => post.postNotification)
  @JoinColumn({ name: "post_id", referencedColumnName: "id" })
  post: PostModel;
}
