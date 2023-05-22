import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { PostCommentModel } from "./postComment";
import { UserModel } from "./user";

@Entity({ name: "post" })
export class PostModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  post_tagline: string | null;

  @Column("varchar", { nullable: true })
  post_description: string | null;

  @Column("varchar", { nullable: true })
  post_image: string | null;

  @Column("varchar", { nullable: true })
  post_status: string | null;

  @Column("datetime", { nullable: true })
  post_date: Date | null;

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

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.post)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.post)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @OneToMany(() => PostCommentModel, (postComment) => postComment.post)
  postComment: PostCommentModel[];
}
