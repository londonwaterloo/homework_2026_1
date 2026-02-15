'use strict';

QUnit.module('Тестируем функцию flatten', function() {
    QUnit.test('Работает правильно с плоским массивом', function(assert) {
        const result = flatten([1, 2, 3]);
        assert.deepEqual(result, [1, 2, 3]);
    });

    QUnit.test('Работает правильно с вложенным массивом с несколькими уровнями', function(assert) {
        const result = flatten([1, [2, [3, 4], 5], 6]);
        assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
    });

    QUnit.test('Работает правильно с пустым массивом', function(assert) {
        const result = flatten([]);
        assert.deepEqual(result, []);
    });

    QUnit.test('Работает правильно с глубокой вложенностью', function (assert) {
        const result = flatten([1, [2, [3, [4]]]]);
        assert.deepEqual(result, [1, 2, 3, 4]);
    });

    QUnit.test('Работает правильно со смешанными типами', function (assert) {
        const result = flatten([1, ['a', [true]], null]);
        assert.deepEqual(result, [1, 'a', true, null]);
    });

    QUnit.test('Работает правильно, когда все элементы — массивы', function (assert) {
        const result = flatten([[1], [2], [3]]);
        assert.deepEqual(result, [1, 2, 3]);
    });

    QUnit.test('Кидает TypeError, если аргумент - не массив', function (assert) {
        assert.throws(
            () => flatten(null),
            TypeError,
            'Кидает TypeError на невалидный аргумент'
        );
    });
});
