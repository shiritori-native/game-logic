import { iPlayer } from "./player";

export interface iShiritori {
  play(players: Array<iPlayer>): iPlayer;
}