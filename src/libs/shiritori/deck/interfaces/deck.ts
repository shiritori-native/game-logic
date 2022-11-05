import { iWord } from "@libs/shiritori/word";

/**
 * Trie interface representing `Shiritori` game deck
 * @interface iDeck
 */
export interface iDeck {

  /**
   * The current size of the deck by the number of words in it
   */
  size: number;

  /**
   * Removes a word from the deck
   * @param word - The word to be removed from the deck
   */
  remove(word: string): void;

  /**
   * Returns if a word belongs to the deck
   * @param word - Search word to check if it is in the deck
   * @returns The boolean value if the word is in the deck
   */
  contains(word: string): boolean;

  /**
   * Returns an array of `Word` objects that start with the provided prefix
   * @param prefix - Search prefix to find words with the given prefix
   * @returns An array of words with the provided prefix
   */
  find(prefix: string): Array<iWord>;

  /**
   * Returns if the deck is out of words
   * @returns The boolean value if the deck is empty
   */
  isEmpty(): boolean;

  /**
   * Returns all words in the deck
   * @returns All words in the entire deck
   */
  getAllWords(): Array<iWord>;
}
