import { Character } from "@libs/shiritori/character";
import Word from "@libs/shiritori/word";
import { iDeck } from ".";

/**
 * Trie class representing `Shiritori` game deck
 */
export default class Deck implements iDeck {
	private root: Character;
	
	/**
	 * @param words Array of words to put into the deck
	 */
	constructor(words: Array<Word>) {
		if (words.length < 1) {
			throw new Error("Invalid word count. There needs to be atleast a single word in a deck.");
		}

		this.root = {
			character: null,
			children: {},
			end: false
		};

		words.forEach(word => this.insert(word));
	}

	/**
   * The current size of the deck by the number of words in it
   */
	public get size(): number {
		return this.getAllWords().length;
	}

	private insert(word: Word): void {
		let node = this.root;
		const characters = word.characters;

		for (let i = 0; i < characters.length; i++) {
			if (!node.children[characters[i]]) {
				node.children[characters[i]] = {
					parent: node,
					character: characters[i],
					children: {},
					end: false
				};
				node.children[characters[i]].parent = node;
			}

			node = node.children[characters[i]];

			if (i === characters.length - 1) {
				node.end = true;
				node.word = word;
			}
		}
	}

	public remove(word: string): boolean {
		const root = this.root;
		if (!word) return true;

		const removeWord = function(node: Character): boolean {
			if (node.end && node.word?.value === word) {
				const hasChildren = Object.keys(node.children).length > 0;

				if (hasChildren) {
					node.end = false;
				} else {
					if (node.parent && node.character) delete node.parent.children[node.character];
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

	public contains(word: string): boolean {
		let node = this.root;
		const characters = word.split("");

		for (let i = 0; i < characters.length; i++) {
			if (!node.children[characters[i]]) {
				return false;
			}

			node = node.children[characters[i]];
		}

		return node.end;
	}

	public find(prefix: string): Array<Word> {
		let node = this.root;
		const characters = prefix.split("");
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

	public isEmpty(): boolean {
		return this.size === 0;
	}

	public getAllWords(): Array<Word> {
		const output: Array<Word> = [];

		this.findAllWords(this.root, output);
		return output;
	}
}
