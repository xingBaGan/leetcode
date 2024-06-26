import selectSort from '../src/排序/select.sort'
import generateArr from '../src/utils/getRandomArray'
describe('base test', () => {
  test('10', () => {
    let input = generateArr(10, 1000);
    // 如果 a > b ,则 a - b > 0 交换，那么 大的总是在后面，就是升序
    expect(selectSort([...input])).toEqual(input.sort((a, b) => a - b));
  })
  test('100', () => {
    let input = generateArr(100, 1000);
    expect(selectSort([...input])).toEqual(input.sort((a, b) => a - b));
  })
  test('1000', () => {
    let input = generateArr(1000, 1000);
    expect(selectSort([...input])).toEqual(input.sort((a, b) => a - b));
  })
  test('[]', () => {
    expect(selectSort([])).toEqual([]);
  })
})
