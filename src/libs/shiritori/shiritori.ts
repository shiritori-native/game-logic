import Deck from "./deck";
import { iShiritori } from "./interfaces/shiritori";
import Player from "./player";
import Word from "./word";

export default class Shiritori implements iShiritori {
	private deck: Deck;
	private gameIsPlaying: boolean;
	private currentPlayerTurn: number;
	private lastMove?: Word;

	constructor(deck: Deck) {
		if (deck.isEmpty()) {
			throw new Error("Invalid deck. Deck can not be empty.");
		}

		this.deck = deck;
		this.gameIsPlaying = false;
		this.currentPlayerTurn = -1;
	}

	public play(players: Array<Player>): Player {
		if (players.length === 0) {
			throw new Error("Invalid number of players. Atleast one player is needed to play.");
		}
		
		while(this.gameIsPlaying) {
			const currentPlayer = players[this.getCurrentPlayerTurn(players)];
			const move = currentPlayer.getMove();

			if (!this.isValidMove(move)) {
				this.gameIsPlaying = false;
			}

			this.deck.remove(move);
		}

		return players[this.currentPlayerTurn];
	}

	private getCurrentPlayerTurn(players: Array<Player>) {
		return (this.currentPlayerTurn + 1) % players.length;
	}

	private isValidMove(move: string): boolean {
		if (this.deck.isEmpty() || !move) {
			return false;
		}

		const firstCharacter = move.charAt(0), lastCharacter = move.charAt(move.length - 1);
		return this.deck.contains(move) && this.lastMoveEndsWith(firstCharacter) && this.isValidCharacter(lastCharacter);
	}

	private lastMoveEndsWith(character: string): boolean {
		return (!this.lastMove) || character === this.lastMove.getEndingKana();
	}

	private isValidCharacter(character: string): boolean {
		return character !== "n";
	}

	public getLegalMoves(prefix: string): Array<Word> {
		return this.deck.find(prefix);
	}
}
