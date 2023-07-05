import { AfterLoad, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, Index } from 'typeorm';
import { ModelTemplate } from './modelTemplate';
import Cipher from '../../helper/cipher';
@Entity({ name: 'accessTokenConfiguration' })
export class AccessTokenConfigurationModel extends ModelTemplate {
  @Column('text', { nullable: false })
  accessToken: string;

  @CreateDateColumn({ nullable: true })
  @Index()
  expiryDate: Date | null;

  @Column('text', { nullable: false })
  tokenType: string;

  @Column('text', { nullable: false })
  refreshToken: string;

  @Column('varchar', { unique: true, nullable: false, length: 250 })
  serviceName: string;

  @BeforeInsert()
  @BeforeUpdate()
  async encryptData() {
    if (this.accessToken) {
      this.accessToken = Cipher.encrypt(this.accessToken);
    }
    if (this.refreshToken) {
      this.refreshToken = Cipher.encrypt(this.refreshToken);
    }
  }

  @AfterLoad()
  async decryptData() {
    this.accessToken = Cipher.decrypt(this.accessToken);
    this.refreshToken = Cipher.decrypt(this.refreshToken);
  }
}
