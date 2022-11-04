import { iCharacter } from "./interfaces/character";
import Word from "./word";

export default class Character implements iCharacter {
	parent: Character | null;
	character: string | null;
	children: { [key: string]: Character};
	end: boolean;
	word?: Word;

	constructor(character: string | null) {
		this.parent = null;
		this.character = character;
		this.children = {};
		this.end = false;
	}
}
