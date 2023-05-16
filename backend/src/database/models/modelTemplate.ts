import {
  Column,
  CreateDateColumn,
  Generated,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from "typeorm";

export abstract class ModelTemplate {
  @PrimaryGeneratedColumn("increment")
  public key: number;
  @Index({ unique: true })
  @Column("uuid")
  @Generated("uuid")
  public id: string;

  @CreateDateColumn()
  public create_at: Date;

  @UpdateDateColumn()
  public update_at: Date;
}
