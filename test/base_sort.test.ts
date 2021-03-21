import insert_sort from '../src/排序/insert_sort'
import generateArr from '../src/utils/getRandomArray'
describe('base test', () => {
    test('10', () => {
        let input = generateArr(10, 1000);
        expect(insert_sort([...input])).toEqual(input.sort((a, b) => a - b));
    })
    test('100', () => {
        let input = generateArr(100, 1000);
        expect(insert_sort([...input])).toEqual(input.sort((a, b) => a - b));
    })
    test('1000', () => {
        let input = generateArr(1000, 1000);
        expect(insert_sort([...input])).toEqual(input.sort((a, b) => a - b));
    })
    test('[]', () => {

        expect(insert_sort([])).toEqual([]);
    })
})
