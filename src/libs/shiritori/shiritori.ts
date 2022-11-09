import Deck from "./deck";
import { iShiritori } from ".";
import Player from "./player";
import Word from "./word";
import PlayerQueue from "./playerQueue";
import Rules from "./rules";

/**
 * `Shiritori` game class
 */
export default class Shiritori implements iShiritori {
	private deck: Deck;
	private playerQueue: PlayerQueue<Player>;
	private gameIsPlaying: boolean;
	private rules: Rules;
	private lastMove?: Word;

	winner?: Player;

	/**
	 * @param deck - The starting Shiritori deck
	 * @param players - Array of all players participating in the game
	 */
	constructor(deck: Deck, playerQueue: PlayerQueue<Player>, rules: Rules = new Rules()) {
		if (deck.isEmpty()) {
			throw new Error("Invalid deck. Deck can not be empty.");
		}

		if (playerQueue.isEmpty()) {
			throw new Error("Invalid player queue. Player queue can not be empty.");
		}

		this.deck = deck;
		this.playerQueue = playerQueue;
		this.rules = rules;
		this.gameIsPlaying = false;
	}

	public play(): void {
		let currentPlayer = this.playerQueue.getCurrentPlayer();
		this.gameIsPlaying = true;
		
		while(this.gameIsPlaying) {
			const move: string = currentPlayer.getMove(this.deck);

			if (this.isValidMove(move)) {
				this.lastMove = this.deck.getWord(move);
				this.removeWord(move);
			} else {
				this.removePlayer(currentPlayer);
			}

			if (this.gameShouldEnd()) {
				this.gameIsPlaying = false;
			} else {
				currentPlayer = this.playerQueue.getCurrentPlayer();
			}
		}

		this.winner = currentPlayer;
	}

	private removePlayer(player: Player): void {
		this.playerQueue.remove(player);
	}

	private removeWord(word: string): void {
		this.deck.remove(word);
	}

	private isValidMove(move: string): boolean {
		const lastMove: string | undefined = this.lastMove?.value;
		return this.deck.contains(move) && this.rules.isValidMove(move, lastMove);
	}

	private gameShouldEnd(): boolean {
		return this.deck.isEmpty() || this.playerQueue.size <= 1;
	}
}
