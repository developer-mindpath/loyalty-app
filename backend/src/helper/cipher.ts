import crypto from 'crypto';

export default class Cipher {
  static algorithm = process.env.CRYPTO_ALGORITHM || 'aes-256-ctr';
  static key = process.env.CRYPTO_SECRET_KEY || 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
  static iv = process.env.CRYPTO_IV || '0123456789abcdef';

  /**
   * @description Encrypt a string using crypto.createCipheriv.
   * @param data string to encrypt
   * @returns encrypted string
   */
  static encrypt(data: string) {
    if (!data) return data;
    const iv = Buffer.from(Cipher.iv);
    const cipher = crypto.createCipheriv(Cipher.algorithm, Cipher.key, iv);
    const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
    const encryptData = `${iv.toString('hex')}:${encrypted.toString('hex')}`;
    return encryptData;
  }

  /**
   * @description decrypt a string using crypto.createDecipheriv.
   * @param encryptData encrypted string to decrypt
   * @returns decrypted string
   */
  static decrypt(encryptData: string) {
    if (!encryptData) return encryptData;
    const [ivString, content] = encryptData.split(':');
    const iv = Buffer.from(ivString, 'hex');
    const encryptedText = Buffer.from(content, 'hex');
    const decipher = crypto.createDecipheriv(Cipher.algorithm, Cipher.key, iv);
    const decryptData = Buffer.concat([decipher.update(encryptedText), decipher.final()]);
    return decryptData.toString();
  }
}
