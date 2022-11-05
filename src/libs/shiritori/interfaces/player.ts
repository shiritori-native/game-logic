import { iDeck } from "./deck";

export interface iPlayer {
  name: string;
  type: number;

  getMove(deck: iDeck): string;
}
