import { iWord } from ".";

/**
 * `Word` class for `Shiritori` words in a game deck
 */
export default class Word implements iWord {
	public readonly value: string;
	public readonly characters: Array<string>;
	public readonly score?: number | undefined;

	/**
	 * @param word - String value of the word
	 * @param score - Associated game score for the word
	 */
	constructor(word: string, score?: number) {
		this.value = word;
		this.characters = word.split("");
		this.score = score;
	}

	/**
   * A words starting kana
   */
	public get startingKana(): string {
		return this.characters[0];
	}

	/**
   * A words ending kana
   */
	public get endingKana(): string {
		return this.characters[this.characters.length - 1];
	}
}
