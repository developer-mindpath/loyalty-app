declare global {
  interface Array<T> {
    swapItems: (oldIndex: number, newIndex: number) => Array<T>;
  }
}

/**
 * Swap Items in Array
 * @param {unknown[]} array
 * @param {number} index1
 * @param {number} index2
 * @return {unknown[]}
 */
export function swapItems<T>(oldIndex: number, newIndex: number): Array<T> {
  const array = this;
  const temp = array[oldIndex];
  array[oldIndex] = array[newIndex];
  array[newIndex] = temp;
  return array;
}

export function loadArrayMethods() {
  Object.defineProperty(Array.prototype, "swapItems", {
    value: swapItems,
    enumerable: false,
  });
}
