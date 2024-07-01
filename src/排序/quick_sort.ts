
import { swap } from "../utils";

function partition(left: number, right: number, arr: number[]): [number, number] {
    // less 为左边界index，more 为大区域的右边界index
    // 不一定存在区域
    let less = left - 1;
    let more = right + 1;
    // convert float to interge
    const pivotIndex = parseInt(String(Math.random() * (right - left + 1) + left));
    swap(arr, pivotIndex, right);
    const pivotValue = arr[right];
    for (let i = left; i < right && i < more; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, less + 1, i);
            less++;
        } else if (arr[i] === pivotValue) {

        } else {
            swap(arr, more - 1, i);
            i--;
            more--;
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
