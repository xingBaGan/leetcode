import binary_search from '../src/查找/binary_search copy'
let array = [-1, 0, 3, 5, 9, 12]
test('normal', () => {
    expect(binary_search(array, 9)).toBe(4)
})
test('test 2', () => {
    expect(binary_search([-1, 0, 3, 5, 9, 12], 0)).toBe(1)
})

test('test 3', () => {
    expect(binary_search([-1, 0, 3, 5, 9, 10, 12], 5)).toBe(3)
})

test('test 4', () => {
    expect(binary_search([-1, 0, 3, 5, 9, 10, 12], 5)).toBe(3)
})

test('test 5', () => {
    expect(binary_search([-1, 0, 3, 5, 9, 10, 12], -1)).toBe(0)
})

test('test 6', () => {
    expect(binary_search([-1, 0, 3, 5, 9, 10, 12], 12)).toBe(6)
})

test('not found', () => {
    expect(binary_search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
})
test('empty []', () => {
    expect(binary_search([], 2)).toBe(-1)
})