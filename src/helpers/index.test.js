import { getLetterMatchCount } from "./index";
import GuessedWords from "../GuessedWords";

describe("getLetterMatchCount", () => {
    const secretWord = 'party';

  test("returns correct count when there are no matching letters", () => {
      const letterMatchCount = getLetterMatchCount('bones', secretWord);
      expect(letterMatchCount).toBe(0)
  });
  test("returns the correct count where there are 3 matching letters", () => {
      const letterMatchCount =getLetterMatchCount('train', secretWord);
      expect(letterMatchCount).toBe(3)
  });
  test("returns correct count when there are duplicate letters in the guessedWords", () => {
      const letterMatchCount = getLetterMatchCount('parka', secretWord);
      expect(letterMatchCount).toBe(3)
  });
});
