import bcrypt from "bcryptjs";

export async function createHashPassword(
  password: string,
  length: number
): Promise<string> {
  return await bcrypt.hash(password, length);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}
