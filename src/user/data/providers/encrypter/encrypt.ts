export abstract class Encrypt {
  abstract encrypt(password: string): Promise<string>;
}
