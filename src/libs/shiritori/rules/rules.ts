import { RuleOptions } from "./interfaces/ruleOptions";
import { iRules } from "./interfaces/rules";

const defaultOptions: RuleOptions = {
	minimumSyllableLength: 2,
	useTimer: true,
	timerLength: 10,
	useCombinations: true
};

/**
 * `Rules` class for rules in a `Shiritori` game
 */
export default class Rules implements iRules {
	private options: RuleOptions;

	/**
	 * @param options - Base rule set to be used
	 */
	constructor(options: RuleOptions = defaultOptions) {
		if (options.useTimer && !options.timerLength) {
			throw new Error("Use timer rule is selected but no length of time is provided. Please set a timer length in the timerLength option");
		}

		this.options = options;
	}

	public isValidMove(move: string, lastMove?: string): boolean {
		return this.isEnoughSyllables(move) && this.matches(move, lastMove);
	}

	private isEnoughSyllables(move: string): boolean {
		return move.length >= this.options.minimumSyllableLength;
	}

	private matches(move: string, lastMove?: string): boolean {
		if (!lastMove) {
			return true;
		}

		return move.charAt(0) === lastMove.charAt(lastMove.length - 1);
	}
}
