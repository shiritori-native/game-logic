import Rules, { RuleOptions } from "@libs/shiritori/rules";

describe("Shiritori library Rules class tests", () => {
	test("Can create a default ruleset", () => {
		const rules: Rules = new Rules();

		expect(rules.isValidMove("end", "hope")).toBe(true);
		expect(rules.isValidMove("end", "last")).toBe(false);
		expect(rules.isValidMove("end")).toBe(true);
	});

	test("Can set the minimum number of syllables", () => {
		const options: RuleOptions = {
			minimumSyllableLength: 3
		};
		const rules = new Rules(options);

		expect(rules.isValidMove("end")).toBe(true);
		expect(rules.isValidMove("no")).toBe(false);
	});

	test("Can not use a timer without a specified length", () => {
		const options: RuleOptions = {
			minimumSyllableLength: 2,
			useTimer: true
		};
		const getCallback = (): () => Rules => {
			return () => new Rules(options);
		};

		expect(getCallback()).toThrowError();
	});
});
