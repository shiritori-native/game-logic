import { iWord } from "@libs/shiritori/word";

/**
 * Character trie nodes for the `Deck` class
 */
export interface iCharacter {

  /**
   * Parent Character trie node
   */
  parent: iCharacter | null;

  /**
   * String representing the characters value
   */
  character: string | null;

  /**
   * Child Character Trie nodes
   */
  children: { [key: string]: iCharacter };

  /**
   * Boolean indicating if Character Trie node is the end of a word
   */
  end: boolean;

  /**
   * Associated `Word` object for the specified word
   */
  word?: iWord;
}
