import Computer from "@libs/shiritori/computer";
import Deck from "@libs/shiritori/deck";
import { PlayerType } from "@libs/shiritori/player";
import Word from "@libs/shiritori/word";

describe("Shiritori library Computer class tests", () => {
	test("Can create a new computer player", () => {
		const player: Computer = new Computer("Computer player");

		expect(player.playerType).toBe(PlayerType.COMPUTER);
	});

	test("Can get a computer players move", () => {
		const player: Computer = new Computer("Computer Player");
		const deck: Deck = new Deck([new Word("Hello"), new Word("World")]);
		const words: Array<string> = deck.getAllWords().map(word => word.value);

		expect(words).toContain(player.getMove(deck));
	});
});
