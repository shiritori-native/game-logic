import { RuleOptions } from "./interfaces/ruleOptions";
import { iRules } from "./interfaces/rules";

const defaultOptions: Partial<RuleOptions> = {
	minimumSyllableLength: 2,
	useTimer: true,
	timerLength: 10,
	useCombinations: true
};

/**
 * `Rules` class for rules in a `Shiritori` game
 */
export default class Rules implements iRules {
	private options: Partial<RuleOptions>;

	/**
	 * @param options - Base rule set to be used
	 */
	constructor(options: Partial<RuleOptions> = defaultOptions) {
		this.options = options;
	}

	public isValidMove(move: string, lastMove?: string): boolean {
		return move !== lastMove;
	}
}
