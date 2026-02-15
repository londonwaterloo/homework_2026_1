'use strict';

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
    if (!Array.isArray(array)) {
        throw new TypeError('flatten: на входе ожидается массив');
    }

    return array.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc.push(...flatten(item));
        } else {
            acc.push(item);
        }
        return acc;
    }, []);
};