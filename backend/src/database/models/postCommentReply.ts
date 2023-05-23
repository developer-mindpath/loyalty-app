import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { PostCommentModel } from "./postComment";
import { UserModel } from "./user";

@Entity({ name: "post_comment_reply" })
export class PostCommentReplyModel extends ModelTemplate {
  @Column("int", { nullable: true })
  post_comment_id: number | null;

  @Column("varchar", { nullable: true })
  reply_text: string | null;

  @Column("varchar", { nullable: true })
  reply_image: string | null;

  @Column("datetime", { nullable: true })
  reply_date: Date | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int", { nullable: true })
  user_id: number;

  @Column("int", { nullable: true })
  admin_ref: number;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.postCommentReply)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.postCommentReply)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @ManyToOne(
    () => PostCommentModel,
    (postComment) => postComment.postCommentReply
  )
  @JoinColumn({ name: "post_comment_id", referencedColumnName: "id" })
  postComment: PostCommentModel;
}
