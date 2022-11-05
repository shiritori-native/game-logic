import Word from "@libs/shiritori/word";

describe("Shiritori library Word class tests", () => {
	test("Can create a word without a value", () => {
		const word: Word = new Word("Hello");

		expect(word.value).toBe("Hello");
		expect(word.characters).toEqual(["H", "e", "l", "l", "o"]);
		expect(word.startingKana).toBe("H");
		expect(word.endingKana).toBe("o");
	});

	test("Can create a word with a value", () => {
		const word: Word = new Word("Hello", 1);

		expect(word.value).toBe("Hello");
		expect(word.characters).toEqual(["H", "e", "l", "l", "o"]);
		expect(word.startingKana).toBe("H");
		expect(word.endingKana).toBe("o");
		expect(word.score).toBe(1);
	});
});
