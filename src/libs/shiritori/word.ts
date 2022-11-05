import { iWord } from "./interfaces/word";

export default class Word implements iWord {
	public word: string;
	public characters: Array<string>;
	public value?: number;

	constructor(word: string, value?: number) {
		this.word = word;
		this.characters = word.split("");
		this.value = value;
	}

	public get startingKana(): string {
		return this.characters[0];
	}

	public get endingKana(): string {
		return this.characters[this.characters.length - 1];
	}
}
