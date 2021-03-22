import generateArr from '../src/utils/getRandomArray'
import quick_sort, { partition } from '../src/排序/quick_sort_01'
test('partition', () => {
    let arr = [3, 2, 5, 6, 5, 9, 1, 5]
    //[3, 2, 1, 5, 5, 5, 6, 9]
    expect(partition(arr, 0, arr.length - 1)).toEqual([2, 6])
    let arr2 = [3, 2, 5, 6, 5, 9, 1, 1]
    expect(partition(arr2, 0, arr.length - 1)).toEqual([-1, 2])
})
test('base', () => {
    let input = generateArr(10, 1000);
    expect(quick_sort([...input])).toEqual(input.sort((a, b) => a - b))
})

test('base', () => {
    let input = generateArr(100, 1000);
    expect(quick_sort([...input])).toEqual(input.sort((a, b) => a - b))
})

test('base', () => {
    let input = generateArr(1000, 100000);
    expect(quick_sort([...input])).toEqual(input.sort((a, b) => a - b))
})
