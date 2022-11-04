export interface iWord {
  word: string;
  characters: Array<string>;
  value?: number;

  getStartingKana(): string;
  getEndingKana(): string;
}
