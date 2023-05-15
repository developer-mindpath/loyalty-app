import { Column, Entity } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "stores" })
export class StoreModel extends ModelTemplate {
  @Column("varchar")
  name: string;

  @Column("varchar")
  store: string;

  @Column("varchar")
  token: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  phone: string;
}
