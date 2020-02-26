/**
 * Lint function helper to verify a property in a object.
 * @param object
 * @param key
 * @returns {boolean}
 */
export function hasOwnProperty (object, key) {
  return Object.prototype.hasOwnProperty.call(object, key)
}
