import Deck from "./deck";
import Player, { PlayerType } from "./player";
import Word from "./word";

/**
 * `Computer` player class for the `Shiritori` class
 */
export default class Computer extends Player {
	playerType: PlayerType = PlayerType.COMPUTER;

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
