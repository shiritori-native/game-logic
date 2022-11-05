import Word from "./word";

/**
 * Character trie nodes for the Deck class.
 */
export type Character = {

	/**
   * Parent Character trie node
   */
	parent?: Character | null;

	/**
   * String representing the characters value
   */
	character: string | null;

	/**
   * Child Character Trie nodes
   */
	children: { [key: string]: Character};

	/**
   * Boolean indicating if Character Trie node is the end of a word
   */
	end: boolean;

	/**
   * Associated `Word` object for the specified word
   */
	word?: Word;
}
