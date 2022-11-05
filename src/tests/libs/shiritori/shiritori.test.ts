import Shiritori from "@libs/shiritori";
import Deck from "@libs/shiritori/deck";
import Player from "@libs/shiritori/player";
import Word from "@libs/shiritori/word";

describe("Shiritori library Shiritori class tests", () => {
	test("Can create a game of shiritori", () => {
		const deck: Deck = new Deck([new Word("Hello")]);
		const shiritori: Shiritori = new Shiritori(deck, [new Player("Player 1"), new Player("Player 2")]);
		
		expect(shiritori.winner).toBeUndefined();
		shiritori.play();
		expect(shiritori.winner).not.toBeUndefined();
	});

	test("Can not play a game with an empty deck", () => {
		const deck: Deck = new Deck([new Word("a")]);
		const getCallback = (): () => void => {
			return () => new Shiritori(deck, [new Player("Player 1")]);
		};

		deck.remove("a");
		expect(getCallback()).toThrowError();
	});

	test("Can not play with no players", () => {
		const deck: Deck = new Deck([new Word("a")]);
		const getCallback = (): () => Shiritori => {
			return () => new Shiritori(deck, []);
		};

		expect(getCallback()).toThrowError();
	});
});