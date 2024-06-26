import { swap } from '../utils/index'
// ascending
export default function bubbleSort(arr: number[]) {
  const len = arr.length;
  // start from zore index, to end position. excute len - 1 round.
  for (let i = len - 1; i > 0; i--) {
    // start zore every time, campareTime = numberSize - 1
    // so if the len = n , the campareTime = (n - 1) + (n - 2 )+..+ 1 
    for (let j = 0; j < i; j++) {
      const num1 = arr[j];
      const num2 = arr[j + 1];
      if (num1 > num2) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr;
}

