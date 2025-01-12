const combinations = [
  { theme: "blue", character: "kyo" },
  { theme: "red", character: "iori" },
  { theme: "aqua", character: "kula" },
];

export function validateCookies(theme: string, character: string) {
  const correctCombinationByTheme = combinations.find((c) => c.theme === theme);
  const correctCombinationByCharacter = combinations.find(
    (c) => c.character === character
  );
  if (!correctCombinationByTheme && !correctCombinationByCharacter) {
    return { theme: "blue", character: "kyo" };
  }

  if (correctCombinationByTheme && !correctCombinationByCharacter) {
    return {
      theme: correctCombinationByTheme.theme,
      character: correctCombinationByTheme.character,
    };
  }
  if (!correctCombinationByTheme && correctCombinationByCharacter) {
    return {
      theme: correctCombinationByCharacter.theme,
      character: correctCombinationByCharacter.character,
    };
  }
  return {
    theme: correctCombinationByTheme!.theme,
    character: correctCombinationByTheme!.character,
  };
}
