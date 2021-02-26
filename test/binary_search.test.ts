import binary_search from '../src/查找/binary_search'
let array = [-1, 0, 3, 5, 9, 12]
test('normal', () => {
    expect(binary_search(array, 9)).toBe(4)
})
test('test 2', () => {
    expect(binary_search([-1, 0, 3, 5, 9, 12], 0)).toBe(1)
})
test('not found', () => {
    expect(binary_search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
})
test('empty []', () => {
    expect(binary_search([], 2)).toBe(-1)
})