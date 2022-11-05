import Deck from "./deck";
import { iPlayer } from "./interfaces/player";
import Word from "./word";

/**
 * `Player` class for the `Shiritori` class
 */
export default class Player implements iPlayer {

	/**
	 * Number value for a human player type
	 */
	static readonly PLAYER_TYPE = 1;

	/**
	 * Number value for a computer player type
	 */
	static readonly COMPUTER_TYPE = 2;
	readonly type: number;
	readonly name: string;

	/**
	 * @param name - Name of the player to be created
	 * @param type - The type of the player to be created
	 */
	constructor(name: string, type: number = Player.PLAYER_TYPE) {
		if (type !== Player.PLAYER_TYPE && type !== Player.COMPUTER_TYPE) {
			throw new Error("Invalid player type " + type);
		}

		this.name = name;
		this.type = type;
	}

	public getMove(deck: Deck): string {
		if (deck.isEmpty()) {
			throw new Error("Invalid deck. Deck must not be empty.");
		}

		if (this.type === Player.COMPUTER_TYPE) {
			return this.getComputerMove(deck);
		} else {
			return this.getPlayerMove(deck);
		}
	}

	private getComputerMove(deck: Deck): string {
		const words: Array<Word> = deck.getAllWords();
		return words[0].value;
	}

	private getPlayerMove(deck: Deck): string {
		const words: Array<Word> = deck.getAllWords();
		return words[0].value;
	}
}
