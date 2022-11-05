import Deck from "@libs/shiritori/deck";
import Player from "@libs/shiritori/player";
import Word from "@libs/shiritori/word";

describe("Shiritori library Player class tests", () => {
	test("Can create a new human player", () => {
		const player1: Player = new Player("My player");
		const player2: Player = new Player("My other player", Player.PLAYER_TYPE);

		expect(player1.type).toBe(Player.PLAYER_TYPE);
		expect(player2.type).toBe(Player.PLAYER_TYPE);
	});

	test("Can create a new computer player", () => {
		const player: Player = new Player("Computer player", Player.COMPUTER_TYPE);

		expect(player.type).toBe(Player.COMPUTER_TYPE);
	});

	test("Can not create a player with an invalid type", () => {
		expect(() => new Player("Invalid player", 3)).toThrowError();
	});

	test("Can get a human players move", () => {
		const player: Player = new Player("My player");
		const deck: Deck = new Deck([new Word("Hello"), new Word("World")]);
		const words: Array<string> = deck.getAllWords().map(word => word.value);

		expect(words).toContain(player.getMove(deck));
	});

	test("Can get a computer players move", () => {
		const player: Player = new Player("Computer Player", Player.COMPUTER_TYPE);
		const deck: Deck = new Deck([new Word("Hello"), new Word("World")]);
		const words: Array<string> = deck.getAllWords().map(word => word.value);

		expect(words).toContain(player.getMove(deck));
	});

	test("Can not get a move if the deck is empty", () => {
		const player1: Player = new Player("My player");
		const player2: Player = new Player("Computer player", Player.COMPUTER_TYPE);
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
