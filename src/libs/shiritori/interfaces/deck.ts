import { iWord } from "./word";

export interface iDeck {
  remove(word: string): void;
  contains(word: string): boolean;
  find(prefix: string): Array<iWord>;
  isEmpty(): boolean;
}
