export default function quick_sort(arr: number[]) {
    if (arr.length < 2) return arr;
    muti_partition(arr, 0, arr.length - 1);
    return arr;
}
function muti_partition(arr: number[], left: number, right: number) {
    if (left >= right) return;
    let border: number[] = partition(arr, left, right);
    muti_partition(arr, left, border[0])
    muti_partition(arr, border[1], right)
}
export function partition(arr: number[], left: number, right: number): number[] {
    let less = left - 1;
    let more = right + 1;
    let pivot = arr[right];
    //节省一个变量 arr[right] 为 pivot
    for (let i = left; i < more; i++) {
        if (arr[i] < pivot) {
            [arr[less + 1], arr[i]] = [arr[i], arr[less + 1]];//需要交换用来将相等的提前
            less++;
        } else if (arr[i] == pivot) {

        } else {
            [arr[i], arr[more - 1]] = [arr[more - 1], arr[i]]//swap
            more--;
            i--;
        }
    }
    return [less, more];
}