/**
 * Рекурсивно выпрямляет вложенный массив любой глубины
 * @param {Array<any>} array - вложенный массив
 * 
 * @example
 * // returns [1, 2, 3, 4]
 * flatten([1, [2, [3]], 4]);
 * 
 * @returns {Array<any>}
 */
const flatten = function (array) {
    const result = [];

    array.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    });

    return result;
};