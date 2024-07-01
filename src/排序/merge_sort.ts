
export default function merge_sort(arr: number[]): number[] {
    if (arr.length < 2 || !arr) return arr;
    return dividePart(0, arr.length - 1, arr);
}
function dividePart(left: number, right: number, arr: number[]): number[] {
    if (left === right) return [];
    const mid = left + ((right - left) >> 1);
    dividePart(left, mid, arr);
    dividePart(mid + 1, right, arr);
    merge(left, mid, right, arr)
    return arr;
}

// 默认merge的数组都是有序的
function merge(left: number, mid: number, right: number, arr: number[]) {
    let p1 = left;
    let p2 = mid + 1;
    const helper = [];
    // 当一方数耗尽了
    while (p1 <= mid && p2 <= right) {
        // 比较一方，较小的推入， 升序
        if (arr[p1] <= arr[p2]) {
            helper.push(arr[p1++]);
        } else {
            helper.push(arr[p2++]);
        }
    }

    // 将剩余的数，推入
    while (p1 <= mid) {
        helper.push(arr[p1]);
        p1++;
    }

    while (p2 <= right) {
        helper.push(arr[p2]);
        p2++;
    }

    helper.forEach((num, index) => {
        arr[left + index] = num;
    });
}