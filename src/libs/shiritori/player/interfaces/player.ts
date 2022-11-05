import { iDeck } from "@libs/shiritori/deck";

/**
 * `Player` interface for the `Shiritori` class
 * @interface iPlayer
 */
export interface iPlayer {

  /**
   * The players name to appear on the screen
   */
  name: string;

  /**
   * Returns the players current move from the deck of available moves
   * @param deck - The current `Shiritori` playing deck
   * @returns The players current move
   */
  getMove(deck: iDeck): string;
}
