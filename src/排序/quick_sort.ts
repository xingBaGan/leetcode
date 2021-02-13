function partition(left: number, right: number, arr: number[]): number[] {
    let less = left - 1;
    let more = right + 1;
    let randomIndex = parseInt(String(Math.random() * (right - left + 1) + left));
    [arr[randomIndex], arr[right]] = [arr[right], arr[randomIndex]];
    let num = arr[right];
    for (let i = left; i < right && i < more; i++) {
        if (arr[i] < num) {
            [arr[less + 1], arr[i]] = [arr[i], arr[less + 1]];
            less++;
        } else if (arr[i] === num) {

        } else {
            [arr[i], arr[more - 1]] = [arr[more - 1], arr[i]]
            i--;
            more--;
        }
    }
    return [less, more];
}

function mutPartition(left: number, right: number, arr: number[]) {
    if (left < right) {
        let border: number[] = partition(left, right, arr);
        mutPartition(left, border[0], arr);
        mutPartition(border[1], right, arr);
    }

}
export default function quickSort(arr: number[]) {
    if (!arr || arr.length < 2) return;
    mutPartition(0, arr.length - 1, arr);
    return arr;
}