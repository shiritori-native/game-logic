/**
 * `Rules` interface for rules in a `Shiritori` game
 * @interface iRules
 */
export interface iRules {

  /**
   * Returns if a move is valid based on the provided ruleset
   * @param currentMove - The current move being made
   * @param lastMove - The last move that was made
   */
  isValidMove(currentMove: string, lastMove?: string): boolean;

}
