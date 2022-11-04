import { iWord } from "./word";

export interface iCharacter {
  parent: iCharacter | null;
  character: string | null;
  children: { [key: string]: iCharacter };
  end: boolean;
  word?: iWord;
}
