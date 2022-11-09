/**
 * `Word` interface for `Shiritori` words in a game deck
 * @interface iWord
 */
export interface iWord {

  /**
   * String value of the provided word
   */
  value: string;

  /**
   * A words starting kana
   */
  startingKana: string;

  /**
   * A words ending kana
   */
  endingKana: string;

  /**
   * An array of characters in the word
   */
  characters: Array<string>;

  /**
   * Score value of the word in a game
   */
  score?: number;
}
