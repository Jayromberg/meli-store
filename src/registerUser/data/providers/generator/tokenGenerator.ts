export abstract class TokenGenerator {
  abstract generator(id: string | number, role: string): string;
}
