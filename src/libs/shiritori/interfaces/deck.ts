import { iWord } from "./word";

export interface iDeck {
  remove(word: iWord): void;
  contains(word: iWord): boolean;
  find(prefix: iWord): Array<iWord>;
}
