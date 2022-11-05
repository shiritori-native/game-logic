import Computer from "@libs/shiritori/computer";
import Deck from "@libs/shiritori/deck";
import Player, { PlayerType } from "@libs/shiritori/player";
import User from "@libs/shiritori/user";
import Word from "@libs/shiritori/word";

describe("Shiritori library Player class tests", () => {
	test("Can create a new human player", () => {
		const player1: User = new User("My player");

		expect(player1.playerType).toBe(PlayerType.USER);
	});

	test("Can create a new computer player", () => {
		const player: Computer = new Computer("Computer player");

		expect(player.playerType).toBe(PlayerType.COMPUTER);
	});

	test("Can get a human players move", () => {
		const player: User = new User("My player");
		const deck: Deck = new Deck([new Word("Hello"), new Word("World")]);
		const words: Array<string> = deck.getAllWords().map(word => word.value);

		expect(words).toContain(player.getMove(deck));
	});

	test("Can get a computer players move", () => {
		const player: Computer = new Computer("Computer Player");
		const deck: Deck = new Deck([new Word("Hello"), new Word("World")]);
		const words: Array<string> = deck.getAllWords().map(word => word.value);

		expect(words).toContain(player.getMove(deck));
	});

	test("Can not get a move if the deck is empty", () => {
		const player1: User = new User("My player");
		const player2: Computer = new Computer("Computer player");
		const deck: Deck = new Deck([new Word("a"), new Word("b")]);
		const getCallback = (player: Player): () => string => {
			return () => player.getMove(deck);
		};

		deck.remove("a");
		deck.remove("b");
		expect(getCallback(player1)).toThrowError();
		expect(getCallback(player2)).toThrowError();
	});
});
