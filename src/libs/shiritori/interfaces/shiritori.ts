import { iPlayer } from "./player";

export interface iShiritori {
  winner?: iPlayer;

  play(): void;
}