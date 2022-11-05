import Deck from "./deck";
import { iShiritori } from "./interfaces/shiritori";
import Player from "./player";
import Word from "./word";

/**
 * `Shiritori` game class
 */
export default class Shiritori implements iShiritori {
	private deck: Deck;
	private players: Array<Player>;
	private gameIsPlaying: boolean;
	private currentPlayerTurn: number;
	private lastMove?: Word;

	winner?: Player;

	/**
	 * @param deck - The starting Shiritori deck
	 * @param players - Array of all players participating in the game
	 */
	constructor(deck: Deck, players: Array<Player>) {
		if (deck.isEmpty()) {
			throw new Error("Invalid deck. Deck can not be empty.");
		}

		if (players.length === 0) {
			throw new Error("Invalid number of players. Atleast one player is needed to play.");
		}

		this.deck = deck;
		this.players = players;
		this.gameIsPlaying = false;
		this.currentPlayerTurn = -1;
	}

	public play(): void {
		let currentPlayer = this.currentPlayer;
		this.gameIsPlaying = true;
		
		while(this.gameIsPlaying) {
			currentPlayer = this.currentPlayer;
			const move = currentPlayer.getMove(this.deck);

			if (!this.isValidMove(move)) {
				this.gameIsPlaying = false;
			}

			this.deck.remove(move);
		}

		this.winner = this.currentPlayer;
	}

	private get currentPlayer(): Player {
		return this.players[(this.currentPlayerTurn + 1) % this.players.length];
	}

	private isValidMove(move: string): boolean {
		if (this.deck.isEmpty() || !move) {
			return false;
		}

		const firstCharacter = move.charAt(0), lastCharacter = move.charAt(move.length - 1);
		return this.deck.contains(move) && this.lastMoveEndsWith(firstCharacter) && this.isValidCharacter(lastCharacter);
	}

	private lastMoveEndsWith(character: string): boolean {
		return (!this.lastMove) || character === this.lastMove.endingKana;
	}

	private isValidCharacter(character: string): boolean {
		return character !== "n";
	}
}
