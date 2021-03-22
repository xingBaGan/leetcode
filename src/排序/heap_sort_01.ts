export default function heap_sort(arr: number[]) {
    if (arr.length < 2) return [];
    for (let i = 1; i < arr.length; i++) {//建立大根堆
        heap_insert(arr, i)
    }
    for (let i = arr.length - 1; i >= 1; i--) {//i代表即将被排除的点
        [arr[0], arr[i]] = [arr[i], arr[0]];//将最大的放到最后
        heapify(arr, 0, i);
    }
    return arr;
}
function heapify(arr: number[], start_index: number, heapSize: number) {
    let left = start_index * 2 + 1;
    while (left < heapSize) {
        let lagger = (left + 1 < heapSize && arr[left + 1] > arr[left]) ? left + 1 : left;
        if ((arr[lagger] > arr[start_index])) {
            [arr[lagger], arr[start_index]] = [arr[start_index], arr[lagger]]//swap
        } else {
            break;
        }
        start_index = lagger;
        left = start_index * 2 + 1;
    }

}
function heap_insert(arr: number[], insert_index: number) {
    let pIndex = getParentIndex(insert_index);
    while (insert_index != 0 && arr[insert_index] > arr[pIndex]) {
        [arr[insert_index], arr[pIndex]] = [arr[pIndex], arr[insert_index]]//swap
        insert_index = pIndex;
        pIndex = getParentIndex(insert_index);
    }
}
function getParentIndex(childIndex: number) {
    return (childIndex - 1) >> 1;
}
