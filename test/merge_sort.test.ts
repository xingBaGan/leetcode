import mergeSort from '../src/排序/merge_sort'
import quickSort from '../src/排序/quick_sort'
import heapSort from '../src/排序/heap_sort'
import generateArr from '../src/utils/getRandomArray'

let randomArr = generateArr(100, 200);

test.skip('get random array', () => {
    expect(randomArr.length).toBe(100)
})


test.skip('merge sort', () => {
    expect(mergeSort(randomArr)).toEqual(randomArr.sort((a, b) => a - b));
    expect(mergeSort([1, 99, 2, 4, 56, 12])).toEqual([1, 99, 2, 4, 56, 12].sort((a, b) => a - b));
    expect(mergeSort([])).toEqual([]);
})

describe.skip('quick sort', () => {
    test('base sort', () => {
        expect(quickSort([1, 99, 2, 4, 56, 12])).toEqual([1, 99, 2, 4, 56, 12].sort((a, b) => a - b));
    })
    test('random sort', () => {
        expect(quickSort(randomArr)).toEqual(randomArr.sort((a, b) => a - b));
    })
    test('null', () => {
        expect(mergeSort([])).toEqual([]);
    })
})

describe('heap sort', () => {
    test('base sort', () => {
        expect(heapSort([1, 99, 2, 4, 56, 12])).toEqual([1, 99, 2, 4, 56, 12].sort((a, b) => a - b));
    })
    test('random sort', () => {
        expect(heapSort(randomArr)).toEqual(randomArr.sort((a, b) => a - b));
    })
    test('null', () => {
        expect(heapSort([])).toEqual([]);
    })
})