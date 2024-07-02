
export default function merge_sort(arr: number[]): number[] {
    if (arr.length < 2 || !arr) return arr;
    return dividePart(0, arr.length - 1, arr);
}
function dividePart(left: number, right: number, arr: number[]): number[] {
    if (left === right) return arr;
    const mid = Math.floor((right - left ) / 2) + left;
    dividePart(left, mid, arr);
    dividePart(mid + 1, right, arr);
    merge(left, mid, right, arr);
    return arr;
}

// 默认merge的数组都是有序的
function merge(left: number, mid: number, right: number, arr: number[]) {
    let p1 = left;
    let p2 = mid + 1;
    const helper = [];
    while (p1 <= mid && p2 <= right) {
        if (arr[p1] <= arr[p2]) {
            helper.push(arr[p1++]);
        } else {
            helper.push(arr[p2++]);
        }
    }

    while (p1 <= mid) {
        helper.push(arr[p1++]);
    }

    while (p2 <= right) {
        helper.push(arr[p2++]);
    }

    // copy helper from left to right
    helper.forEach((val, index) => {
        arr[left + index] = val;
    });
}