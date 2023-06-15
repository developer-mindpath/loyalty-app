import socialPlatforms from "./constants/socialPlatforms";

export function getSocialPlatformNameFromString(input: string): string | null {
  const lowercasedInput = input.toLowerCase();

  for (const platform of socialPlatforms) {
    for (const keyword of platform.keywords) {
      if (lowercasedInput.includes(keyword)) {
        return platform.name;
      }
    }
  }

  return null;
}
