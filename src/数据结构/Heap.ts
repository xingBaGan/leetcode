import { swap } from '../utils/index';
/** 堆保证每个子树的根节点为最大小值 */
function getParentIndex(index: number): number {
  return Math.floor((index - 1) / 2)
}

function liftup(arr, index) {
  let parentIndex = getParentIndex(index);
  while(arr[index] < arr[parentIndex]) {
    swap(arr, index, parentIndex);
    index = parentIndex;
    parentIndex = getParentIndex(index);
  }
}

export function buildMinHeapByInsert(arr: number[]){
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    liftup(arr, i);
  }
  return arr;
}

// 下沉操作
export function buildMinHeap(arr: number[]) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    minHeapify(arr, n, i);
  }
  return arr;
}

function minHeapify(arr: number[], n: number, i: number) {
  let smallest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] < arr[smallest]) {
    smallest = left;
  }

  if (right < n && arr[right] < arr[smallest]) {
    smallest = right;
  }

  if (smallest !== i) {
    swap(arr, i, smallest);
    minHeapify(arr, n, smallest);
  }
}

