import { swap } from "../utils";

export default function insert_sort(arr: number[]) {
    if (!arr.length) return [];
    const len = arr.length;
    // i - 1 有序区间右边下标, i 表示要插入的item下标
    for (let i = 1; i <= len - 1; i++) {
        for (let j = i; j >= 1; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);
            } else {
                break;
            }
        }
    }

    return arr;
}