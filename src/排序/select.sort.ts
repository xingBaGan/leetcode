import { swap } from '../utils/index';

// ascending
export default function selectSort(arr: number[]) {
  const len = arr.length;
  // 找到其中最大的，和该index进行swap
  for (let i = len - 1; i > 0; i--) {
    let max_index = 0;
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[max_index]) {
        max_index = j;
      }
    }
    // 至此找到最大下标，的与最后一个交换。
    swap(arr, max_index, i);
  }
  return arr;
}