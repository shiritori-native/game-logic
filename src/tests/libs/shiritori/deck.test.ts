import Deck from "@libs/shiritori/deck";
import Word from "@libs/shiritori/word";

describe("Shiritori library Deck class tests", () => {
	test("Can insert words into a deck", () => {
		const words: Array<Word> = [new Word("Word 1"), new Word("Word 2")];
		const deck: Deck = new Deck(words);

		expect(deck.size).toBe(2);
		expect(deck.contains("Word 1")).toBe(true);
		expect(deck.contains("Word 2")).toBe(true);
	});

	test("Duplicate words are not added", () => {
		const words: Array<Word> = [new Word("Word 1"), new Word("Word 1")];
		const deck: Deck = new Deck(words);

		expect(deck.size).toBe(1);
	});

	test("Can remove words in a deck", () => {
		const words: Array<Word> = [new Word("Word 1"), new Word("Word 2"), new Word("Word 20")];
		const deck: Deck = new Deck(words);

		deck.remove("Word 2");
		expect(deck.contains("Word 1")).toBe(true);
		expect(deck.contains("Word 2")).toBe(false);
		expect(deck.contains("Word 20")).toBe(true);

		deck.remove("Word 1");
		expect(deck.contains("Word 1")).toBe(false);
	});

	test("Can not remove words that are not in deck", () => {
		const words: Array<Word> = [new Word("Word 1")];
		const deck: Deck = new Deck(words);

		expect(deck.remove("Made up")).toBe(false);
		expect(deck.remove("")).toBe(false);
	});

	test("Can use a prefix to find words in a deck", () => {
		const words: Array<Word> = [new Word("Word 1"), new Word("Word 2"), new Word("Not found")];
		const deck: Deck = new Deck(words);
		const find: Array<Word> = deck.find("W");

		expect(find).toContain(words[0]);
		expect(find).toContain(words[1]);
		expect(find).not.toContain(words[2]);
		expect(deck.find("A")).toHaveLength(0);
	});

	test("Can get an associated word in a deck", () => {
		const words: Array<Word> = [new Word("Word 1"), new Word("Word 2")];
		const deck: Deck = new Deck(words);

		expect(deck.getWord("Word 1")).toBe(words[0]);
		expect(deck.getWord("Not here")).toBeUndefined();
	});

	test("Throws an error if no words are passed into a deck", () => {
		const getCallback = (words: Array<Word>): () => Deck => {
			return () => new Deck(words);
		};

		expect(getCallback([])).toThrowError();
	});
});
