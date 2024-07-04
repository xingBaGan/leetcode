import { swap } from '../utils/index';
// 升序
export function bubble_sort(arr: number[]) {
    // 最外层，比较区域的右边界
    const len = arr.length;
    if (len <= 1) return arr;
    for (let j = len - 1; j >= 1; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)
            }
        }
    }
    return arr;
}

// 升序
export function select_sort(arr: number[]) {
    // find the max value and change with 
    const len = arr.length;
    if (len <= 1) return arr;
    // j 表示即将要被排除的点
    for (let j = len - 1; j >= 1; j--) {
        let maxIndex = 0;
        for (let i = 0; i <= j; i++) {
            if (arr[i] > arr[maxIndex]) {
                maxIndex = i;
            }
        }
        swap(arr, maxIndex, j);
    }
    return arr;
}

// 插入排序
export function insert_sort(arr: number[]) {
    const len = arr.length;
    if (len <= 1) return arr;
    // 假定前面都是有序的,j 表示即将被插入的元素
    for (let j = 1; j <= len - 1; j++) {
        for (let i = j; i >= 1; i--) {
            if (arr[i] < arr[i - 1]) {
                swap(arr, i, i - 1)
            } else {
                break;
            }
        }
    }
    return arr;
}

const getParentIndex = (index: number) => Math.floor((index - 1) / 2);

function liftUp(arr: number[], i: number) {
    let parentIndex = getParentIndex(i);
    while (arr[i] < arr[parentIndex]) {
        swap(arr, parentIndex, i);
        i = parentIndex;
        parentIndex = getParentIndex(i);
    }
}

function heapify(arr: number[], n: number, i: number) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    let smallest = i;
    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }

    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    }

    if (smallest != i) {
        swap(arr, i, smallest);
        heapify(arr, n, smallest);
    }
    return arr;
}

// 堆排序
export function heap_sort(arr: number[]) {
    const len = arr.length;
    if (len <= 1) return arr;
    for (let i = 0; i < len; i++) {
        liftUp(arr, i);
    }

    // 与最前面一个交换，然后下沉
    for (let i = len - 1; i >= 1; i--) {
        swap(arr, 0, i);
        heapify(arr, i, 0);
    }

    return arr.reverse();
}

export function quick_sort(arr: number[]) {
    const len = arr.length;
    if (len <= 1) return arr;
    multiPartition(arr, 0, len - 1);
    return arr;
}

function multiPartition(arr: number[], left, right) {
    if (left < right) {
        const [less, more] = partition(arr, left, right);
        multiPartition(arr, left, less);
        multiPartition(arr, more, right);
    }
    return arr;
}

function partition(arr: number[], left: number, right: number): [number, number] {
    let less = left - 1;
    let more = right + 1;
    const pivotIndex = Math.floor(Math.random() * (right - left + 1) + left);
    swap(arr, pivotIndex, right);
    const pivot = arr[right];
    for (let i = left; i < right && i < more; i++) {
        if (arr[i] < pivot) {
            swap(arr, less + 1, i);
            less++;
        } else if (arr[i] === pivot) {

        } else {
            swap(arr, more - 1, i);
            i--;
            more--;
        }
    }
    return [less, more];
}

function divide_part(arr: number[], left: number, right: number) {
    if (left === right) return [];
    const mid = (Math.floor((right - left) / 2) + left);
    divide_part(arr, left, mid);
    divide_part(arr, mid + 1, right);
    merge(left, mid, right, arr);
}

function merge(left: number, mid: number, right: number, arr: number[]) {
    let p1 = left;
    let p2 = mid + 1;
    const helper = [];
    while (p1 <= mid && p2 <= right) {
        if (arr[p1] <= arr[p2]) {
            helper.push(arr[p1++])
        } else {
            helper.push(arr[p2++])
        }
    }
    while (p1 <= mid) {
        helper.push(arr[p1++])
    }
    while (p2 <= right) {
        helper.push(arr[p2++])
    }
    helper.forEach((val, index) => {
        arr[left + index] = val;
    });
}

export function merge_sort(arr: number[]) {
    const len = arr.length;
    if (len <= 1) return arr;
    divide_part(arr, 0, arr.length - 1);
    return arr;
}

export function shell_sort(arr: number[]) {
    const len = arr.length;
    if (len <= 1) return arr;
    // gap 从 len/2 到 1
    for (let gap = Math.floor(len / 2); gap >= 1; gap = Math.floor(gap / 2)) {
        // groupStartIndex 表示每组起始下标
        for (let groupStartIndex = 0; groupStartIndex < gap; groupStartIndex++) {
            // currentIndex 表示要插入的
            for (let currentIndex = groupStartIndex + gap; currentIndex < len; currentIndex += gap) {
                const currentVal = arr[currentIndex];
                let prevIndex = currentIndex - gap;
                while (prevIndex >= groupStartIndex && arr[prevIndex] > currentVal) {
                    // 腾出空位
                    arr[prevIndex + gap] = arr[prevIndex];
                    prevIndex -= gap;
                }
                // 找到空位坐下
                arr[prevIndex + gap] = currentVal;
            }
        }
    }
    return arr;
}