import { iPlayer } from "@libs/shiritori/player";

/**
 * `Shiritori` game interface
 * @interface iShiritori
 */
export interface iShiritori {

  /**
   * The winner of the current `Shiritori` game instance
   */
  winner?: iPlayer;

  /**
   * Plays a game of shiritori using the provided deck and players
   */
  play(): void;
}
