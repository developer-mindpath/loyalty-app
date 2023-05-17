import {
  CreateDateColumn,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export abstract class ModelTemplate {
  @PrimaryGeneratedColumn("increment")
  @Index({ unique: true })
  public id: number;

  @CreateDateColumn()
  public create_at: Date;

  @UpdateDateColumn()
  public update_at: Date;
}
