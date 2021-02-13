import maxNumsInWindow from '../src/滑动窗口/index'
let arr = [1, 3, -1, -3, 5, 3, 6, 7]
let k = 3
test('暴力解法:1', () => {
    expect(maxNumsInWindow(arr, k)).toEqual([3, 3, 5, 5, 6, 7])
})

test('暴力解法:2', () => {
    expect(maxNumsInWindow([1, 2, 3, 4, 5], 2)).toEqual([2, 3, 4, 5])
})
test('暴力解法:3', () => {
    expect(maxNumsInWindow([1, 2, 3, 4, 5], 5)).toEqual([5])
})