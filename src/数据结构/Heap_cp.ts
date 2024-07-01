import { swap } from "../utils";

// 下沉
export function buildMinHeap(arr: number[]) {
  const len = arr.length
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    minHeapify(arr, len, i);
  }
  return arr;
}

function minHeapify(arr: number[], n: number, i: number) {
  const left = i * 2 + 1;
  const right = i * 2 + 2;
  let smallest = i;
  if (left < n && arr[left] < arr[smallest]) {
    smallest = left;
  }

  if (right < n && arr[right] < arr[smallest]) {
    smallest = right;
  }

  if(smallest !== i) {
    swap(arr, smallest, i);
    minHeapify(arr, n, smallest);
  }
}

export function printAsBinaryTree(heap: number[]) {
  if (heap.length === 0) {
    console.log("Heap is empty.");
    return;
  }

  // Calculate levels of the tree
  let levels = Math.floor(Math.log2(heap.length)) + 1;

  // Print each level of the tree
  let level = 0;
  let levelNodes = 1;
  let printedNodes = 0;

  for (let i = 0; i < heap.length; i++) {
    if (printedNodes === 0) {
      process.stdout.write(" ".repeat((2 ** (levels - level)) - 2));
    } else {
      process.stdout.write(" ".repeat((2 ** (levels - level + 1)) - 2));
    }
    process.stdout.write(heap[i].toString());

    printedNodes++;
    if (printedNodes === levelNodes) {
      console.log();
      level++;
      levelNodes *= 2;
      printedNodes = 0;
    } else {
      process.stdout.write(" ".repeat((2 ** (levels - level + 1)) - 1));
    }
  }
}

export function buildMinHeapByLiftup(arr: number[]) {
  const len = arr.length
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    liftUp(arr, i);
  }
  return arr;
}

function liftUp(arr: number[], i: number) {
  
}