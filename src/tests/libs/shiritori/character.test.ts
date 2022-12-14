import { Character } from "@libs/shiritori/character";

describe("Shiritori library Character class tests", () => {
	test("Can create a null Character", () => {
		const character: Character = {
			character: null,
			children: {},
			end: false
		};

		expect(character.character).toBe(null);
		expect(Object.keys(character.children)).toHaveLength(0);
		expect(character.end).toBe(false);
		expect(character.word).toBeUndefined();
	});

	test("Can create a character from a string", () => {
		const str = "h";
		const character: Character = {
			character: str,
			children: {},
			end: false
		};

		expect(character.character).toBe(str);
		expect(Object.keys(character.children)).toHaveLength(0);
		expect(character.end).toBe(false);
		expect(character.word).toBeUndefined();
	});
});
