
import { swap } from "../utils";

function partition(left: number, right: number, arr: number[]): [number, number] {
    let less = left - 1;
    let more = right + 1;
    const pivotIndex = Math.floor((Math.random() * (right - left)) + left);
    const pivot = arr[pivotIndex];
    swap(arr, right, pivotIndex);
    for (let i = left; i < more && i < right; i++) {
        if (arr[i] < pivot) {
            swap(arr, less + 1, i);
            less++;
        } else if (arr[i] === pivot) {

        } else {
            swap(arr, more - 1, i);
            more--;
            i--;
        }
    }

    return [less, more];
}

// 直接修改数组
function multiPartition(left: number, right: number, arr: number[]) {
    if (left < right) {
        const [less, more] = partition(left, right, arr);
        multiPartition(left, less, arr);
        multiPartition(more, right, arr);
    }
}
// 分治思想
// 选择pivot，将数组变为，小分区，大分区。
// 当选择的数量足够小时，该部分变为有序的
export default function quickSort(arr: number[]) {
    if (arr.length <= 1) return arr;
    multiPartition(0, arr.length - 1, arr);
    return arr;
}
