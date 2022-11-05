import { iWord } from "./word";

export interface iDeck {
  size: number;

  remove(word: string): void;
  contains(word: string): boolean;
  find(prefix: string): Array<iWord>;
  isEmpty(): boolean;
  getAllWords(): Array<iWord>;
}
