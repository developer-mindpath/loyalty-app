import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { PostModel } from "./post";
import { PostCommentLikeModel } from "./postCommentLike";
import { PostCommentReplyModel } from "./postCommentReply";

@Entity({ name: "post_comment" })
export class PostCommentModel extends ModelTemplate {
  @Column("int", { nullable: true })
  post_id: number | null;

  @Column("varchar", { nullable: true })
  post_comment_text: string | null;

  @Column("varchar", { nullable: true })
  post_comment_image: string | null;

  @Column("datetime", { nullable: true })
  post_comment_date: Date | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int", { nullable: true })
  admin_ref: number;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.postComment)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => PostModel, (post) => post.postComment)
  @JoinColumn({ name: "post_id", referencedColumnName: "id" })
  post: PostModel;

  @OneToMany(
    () => PostCommentLikeModel,
    (postCommentLike) => postCommentLike.postComment
  )
  postCommentLike: PostCommentLikeModel[];

  @OneToMany(
    () => PostCommentReplyModel,
    (postCommentReply) => postCommentReply.postComment
  )
  postCommentReply: PostCommentReplyModel[];
}
