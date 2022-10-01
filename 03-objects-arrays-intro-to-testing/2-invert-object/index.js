/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  return (Object.prototype.toString.call(obj) === '[object Object]')
    ? Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, value] = [value, key]))
    : undefined;
}
