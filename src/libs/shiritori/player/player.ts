import Deck from "@libs/shiritori/deck";
import { iPlayer } from ".";

export enum PlayerType {
	USER = 1,
	COMPUTER = 2
}

/**
 * `Player` class for the `Shiritori` class
 */
export default abstract class Player implements iPlayer {
	
	/**
	 * The type of the player.
	 */
	abstract readonly playerType: PlayerType;
	readonly name: string;

	/**
	 * @param name - Name of the player to be created
	 */
	constructor(name: string) {
		this.name = name;
	}

	public abstract getMove(deck: Deck): string
}
