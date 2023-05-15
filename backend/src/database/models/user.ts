import { Column, Entity, Index } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "users" })
export class UserModel extends ModelTemplate {
  @Column("varchar")
  userName: string;

  @Column("varchar")
  password: string;

  @Column("uuid")
  @Index({ unique: true })
  userId: string;
}
