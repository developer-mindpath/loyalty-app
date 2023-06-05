import _ from "lodash";

interface JsonObject {
  [key: string]: JsonValue;
}

type JsonValue = null | boolean | number | string | JsonObject | JsonValue[];

class ObjectUtil {
  /**
   * Matches 2 Objects and returns changed values
   * @param {object} obj1
   * @param {object} obj2
   * @return {object}
   */
  public static getChanges(obj1: object, obj2: object): object {
    const obj1Entries = Object.entries(obj1);
    const obj2Entries = Object.entries(obj2);

    const updatedList = _.differenceWith(obj2Entries, obj1Entries, _.isEqual);

    return _.fromPairs(updatedList);
  }

  /**
   * Compare 2 objects and tells wether they are equal or not
   * @param {object} obj1
   * @param {object} obj2
   * @returns
   */
  public static compareObjects(obj1: any, obj2: any): boolean {
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
        if (!this.compareObjects(val1 as JsonObject, val2 as JsonObject)) {
          return false;
        }
      } else if (val1 !== val2) {
        return false;
      }
    }

    return true;
  }
}

export default ObjectUtil;
