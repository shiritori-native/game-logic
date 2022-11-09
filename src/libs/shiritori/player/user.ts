import Deck from "@libs/shiritori/deck";
import Player, { PlayerType } from "./player";
import Word from "@libs/shiritori/word";

/**
 * `User` player class for the `Shiritori` class
 */
export default class User extends Player {
	readonly playerType: PlayerType = PlayerType.USER;

	/**
	 * @param name - Name of the player to be created
	 */
	constructor(name: string) {
		super(name);
	}

	public getMove(deck: Deck): string {
		const words: Array<Word> = deck.getAllWords();
		return words[0].value;
	}
}
