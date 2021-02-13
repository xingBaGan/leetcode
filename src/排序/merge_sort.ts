function merge(left: number, mid: number, right: number, arr: number[]) {
    let p1 = left, p2 = mid + 1;
    let helper = []; //空间复杂度 O(n)
    while (p1 <= mid && p2 <= right) {//一旦有一部分结束
        if (arr[p1] < arr[p2]) {
            helper.push(arr[p1++]);
        } else {
            helper.push(arr[p2++]);
        }
    }
    while (p1 <= mid) {//，将剩余有序的部分放入
        helper.push(arr[p1++]);
    }
    while (p2 <= right) {
        helper.push(arr[p2++]);
    }
    helper.forEach((val, index) => {//将排好的放回原位
        arr[left + index] = val;
    })



}
/** 通过先分而治之，将局部有序的个体，合并最终得到一个整体有限的 */
function dividePart(left: number, right: number, arr: number[]): number[] {
    if (left === right) return;
    let mid = left + ((right - left) >> 1);//使用left,mid,right 将这个数组划分为两部分
    //并且传入原始数组，能够存储最终的结果【优化了空间】
    dividePart(left, mid, arr);
    dividePart(mid + 1, right, arr);
    merge(left, mid, right, arr);
}

export default function mergeSort(arr: number[]): number[] {
    if (arr == null || arr.length < 2) return arr;
    dividePart(0, arr.length - 1, arr)
    return arr;
}