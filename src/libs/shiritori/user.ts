import Deck from "./deck";
import Player, { PlayerType } from "./player";
import Word from "./word";

/**
 * `User` player class for the `Shiritori` class
 */
export default class User extends Player {
	playerType: PlayerType = PlayerType.USER;

	/**
	 * @param name - Name of the player to be created
	 */
	constructor(name: string) {
		super(name);
	}

	public getMove(deck: Deck): string {
		if (deck.isEmpty()) {
			throw new Error("Invalid deck. Deck must not be empty.");
		}

		const words: Array<Word> = deck.getAllWords();
		return words[0].value;
	}
}
