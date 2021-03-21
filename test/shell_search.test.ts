import shell_search from '../src/排序/shell_sort'
import generateArr from '../src/utils/getRandomArray'
test('10', () => {
    let input = generateArr(10, 1000)
    expect(shell_search([...input])).toEqual(input.sort((a, b) => a - b))
})
test('100', () => {
    let input = generateArr(100, 1000)
    expect(shell_search([...input])).toEqual(input.sort((a, b) => a - b))
})
test('10000', () => {
    let input = generateArr(10000, 1000)
    expect(shell_search([...input])).toEqual(input.sort((a, b) => a - b))
})
test('[]', () => {
    let input = []
    expect(shell_search([...input])).toEqual(input.sort((a, b) => a - b))
})