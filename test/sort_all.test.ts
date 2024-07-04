// import heap_sort from '../src/排序/heap_sort_01'
import {
    bubble_sort,
    select_sort,
    insert_sort,
    heap_sort,
    quick_sort,
    merge_sort,
    shell_sort,
    radixSort,
    countingSort1,
    countingSort,
    bucketSort,
} from '../src/排序/sort_all'
import generateArr from '../src/utils/getRandomArray'

const sort = bucketSort;
describe('base', () => {
    test('10', () => {
        let input = generateArr(5, 100);
        expect(sort([...input])).toEqual(input.sort((a, b) => a - b))
    })

    test('100', () => {
        let input = generateArr(100, 100);
        expect(sort([...input])).toEqual(input.sort((a, b) => a - b))
    })

    test('1000', () => {
        let input = generateArr(1000, 100);
        expect(sort([...input])).toEqual(input.sort((a, b) => a - b))
    })
    test('[]', () => {
        let input = []
        expect(sort([...input])).toEqual(input.sort((a, b) => a - b))
    })
})