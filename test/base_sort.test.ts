import insert_sort from '../src/排序/insert_sort'
import generateArr from '../src/utils/getRandomArray'
import { heap_sort } from '../src/数据结构/Heap';
import quickSort from '../src/排序/quick_sort_02';
import merge_sort from '../src/排序/merge_sort copy';
const sort = merge_sort;
describe('base test', () => {
    test('10', () => {
        let input = generateArr(10, 1000);
        expect(sort([...input])).toEqual(input.sort((a, b) => a - b));
    })
    test('100', () => {
        let input = generateArr(100, 1000);
        expect(sort([...input])).toEqual(input.sort((a, b) => a - b));
    })
    test('1000', () => {
        let input = generateArr(1000, 1000);
        expect(sort([...input])).toEqual(input.sort((a, b) => a - b));
    })
    test('[]', () => {

        expect(sort([])).toEqual([]);
    })
})
