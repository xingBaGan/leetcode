import heap_sort from '../src/排序/heap_sort_01'
import generateArr from '../src/utils/getRandomArray'
describe('base', () => {
    test('10', () => {
        let input = generateArr(10, 100);
        expect(heap_sort([...input])).toEqual(input.sort((a, b) => a - b))
    })
    test('100', () => {
        let input = generateArr(100, 100);
        expect(heap_sort([...input])).toEqual(input.sort((a, b) => a - b))
    })
    test('1000', () => {
        let input = generateArr(1000, 100);
        expect(heap_sort([...input])).toEqual(input.sort((a, b) => a - b))
    })
    test('[]', () => {
        let input = []
        expect(heap_sort([...input])).toEqual(input.sort((a, b) => a - b))
    })

})