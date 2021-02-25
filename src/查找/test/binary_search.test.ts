import binary_search from '../binary_search'
let array = [-1, 0, 3, 5, 9, 12]
test('normal', () => {
    expect(binary_search(array, 9)).toBe(4)
})
test('not found', () => {
    expect(binary_search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
})