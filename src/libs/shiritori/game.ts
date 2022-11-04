import Deck from "./deck";
import { iGame } from "./interfaces/game";

export default class Game implements iGame {
	private deck: Deck;

	constructor(deck: Deck) {
		this.deck = deck;
	}



}
