/**
 * Rulesets for use in the `Rules` class
 * @interface RuleOptions
 */
export interface RuleOptions {

  /**
   * Number value denoting the minimum number of syllables needed for a valid word
   */
  minimumSyllableLength: number;

  /**
   * Boolean value indicating if the last two kana must be matched
   */
  lastTwoKana: boolean;

  /**
   * Boolean value indicating if a timer should be used to limit turn length
   */
  useTimer: boolean;

  /**
   * Number value indicating the timers length in seconds
   */
  timerLength: number;

  /**
   * Boolean value indicating if the game will use the vowel ending or the kana on chōonpu (a long vowel)
   */
  longVowels: boolean;

  /**
   * Boolean value indicating if dakuon or handakuon characters are needed if they end a word
   */
  ignoreTenTen: boolean;

  /**
   * Boolean value indicating if combination characters are needed if they end a word
   */
  useCombinations: boolean;

}
