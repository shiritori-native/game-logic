import Character from "./character";
import Word from "./word";
import { iDeck } from "./interfaces/deck";

export default class Deck implements iDeck {
	private root: Character;
	
	constructor(words: Array<Word>) {
		this.root = new Character(null);
		words.forEach(word => this.insert(word));
	}

	private insert(word: Word): void {
		let node = this.root;
		const characters = word.characters;

		for (let i = 0; i < characters.length; i++) {
			if (!node.children[characters[i]]) {
				node.children[characters[i]] = new Character(characters[i]);
				node.children[characters[i]].parent = node;
			}

			node = node.children[characters[i]];

			if (i === characters.length - 1) {
				node.end = true;
				node.word = word;
			}
		}
	}

	public remove(word: Word): boolean {
		const root = this.root;
		if (word.characters.length === 0) return true;

		const removeWord = function(node: Character): boolean {
			if (node.end && node.word === word) {
				const hasChildren = Object.keys(node.children).length > 0;

				if (hasChildren) {
					node.end = false;
				} else {
					if (node.parent !== null) node.parent.children = {};
				}

				return true;
			}

			for (const key in node.children) {
				removeWord(node.children[key]);
			}

			return false;
		};

		return removeWord(root);
	}

	public contains(word: Word): boolean {
		let node = this.root;
		const characters = word.characters;

		for (let i = 0; i < characters.length; i++) {
			if (!node.children[characters[i]]) {
				return false;
			}

			node = node.children[characters[i]];
		}

		return node.end;
	}

	public find(prefix: Word): Array<Word> {
		let node = this.root;
		const characters = prefix.characters;
		const output: Array<Word> = [];

		for (let i = 0; i < characters.length; i++) {
			if (!node.children[characters[i]]) {
				return output;
			}

			node = node.children[characters[i]];
		}

		this.findAllWords(node, output);
		return output;
	}

	private findAllWords(node: Character, output: Array<Word>): void {
		if (node.end && node.word) {
			output.unshift(node.word);
		}

		for (const child in node.children) {
			this.findAllWords(node.children[child], output);
		}
	}
}
