import { IValidValue } from "@/types/program";
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

export function parseStringToObject<T>(key: string, value: IValidValue): T {
  const obj = {};

  key
    .split(".")
    .reduce((acc: any, key: string, index: number, arr: string[]) => {
      if (index === arr.length - 1) {
        acc[key] = value; // Assign the value to the final key
      } else {
        acc[key] = {}; // Create nested objects
      }

      return acc[key]; // Return the nested object for further processing
    }, obj);

  return obj as T;
}
