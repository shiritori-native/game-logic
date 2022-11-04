import { iPlayer } from "./interfaces/player";

export default class Player implements iPlayer {
	private readonly PLAYER_TYPE = 1;
	private readonly COMPUTER_TYPE = 2;

	name: string;
	private type: number;

	constructor(name: string, type: number) {
		if (type !== this.PLAYER_TYPE && type !== this.COMPUTER_TYPE) {
			throw new Error("Invalid player type " + type);
		}

		this.name = name;
		this.type = type;
	}

	public getMove(): string {
		return "";
	}
}
