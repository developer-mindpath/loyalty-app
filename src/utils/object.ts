interface JsonObject {
  [key: string]: JsonValue;
}

type JsonValue = null | boolean | number | string | JsonObject | JsonValue[];

export function compareObjects(obj1: any, obj2: any): boolean {
  // Check if both arguments are objects
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    throw new Error("Both arguments must be objects.");
  }

  // Check if the number of keys is the same
  const obj1Keys = Object.keys(obj1 as object);
  const obj2Keys = Object.keys(obj2 as object);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  // Recursively compare the properties of the objects
  for (const key of obj1Keys) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (typeof val1 === "object" && typeof val2 === "object") {
      if (!compareObjects(val1 as JsonObject, val2 as JsonObject)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
}
