import Shiritori from "@libs/shiritori";
import Player, { Computer, User } from "@libs/shiritori/player";
import Deck from "@libs/shiritori/deck";
import Word from "@libs/shiritori/word";
import PlayerQueue from "@libs/shiritori/playerQueue";

describe("Shiritori library Shiritori class tests", () => {
	test("Can play a game of shiritori", () => {
		const deck: Deck = new Deck([new Word("hello"), new Word("open"), new Word("kitten")]);
		const playerQueue: PlayerQueue<Player> = new PlayerQueue(2);

		playerQueue.enqueue(new User("Player 1"));
		playerQueue.enqueue(new Computer("Player 2"));
		const shiritori: Shiritori = new Shiritori(deck, playerQueue);
		
		expect(shiritori.winner).toBeUndefined();
		shiritori.play();
		expect(shiritori.winner).not.toBeUndefined();
	});

	test("Can not play a game with an empty deck", () => {
		const deck: Deck = new Deck([new Word("a")]);
		const playerQueue: PlayerQueue<Player> = new PlayerQueue(1);
		playerQueue.enqueue(new User("Player 1"));
		const getCallback = (): () => void => {
			return () => new Shiritori(deck, playerQueue);
		};

		deck.remove("a");
		expect(getCallback()).toThrowError();
	});

	test("Can not play a game with an empty player queue", () => {
		const deck: Deck = new Deck([new Word("a")]);
		const getCallback = (): () => Shiritori => {
			return () => new Shiritori(deck, new PlayerQueue(1));
		};

		expect(getCallback()).toThrowError();
	});
});
