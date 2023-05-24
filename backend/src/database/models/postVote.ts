import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { PostModel } from "./post";
import { UserModel } from "./user";

@Entity({ name: "post_vote" })
export class PostVoteModel extends ModelTemplate {
  @Column("int", { nullable: true })
  post_id: number | null;

  @Column("datetime", { nullable: true })
  vote_date: Date | null;

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

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.postVote)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.postVote)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @ManyToOne(() => PostModel, (post) => post.postVote)
  @JoinColumn({ name: "post_id", referencedColumnName: "id" })
  post: PostModel;
}
