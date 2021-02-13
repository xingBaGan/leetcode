export default function heapSort(arr: number[]) {
    let heapSize = arr.length;
    if (!arr || heapSize < 2) return [];
    for (let i = 1; i < heapSize; i++) {//建立大根堆
        heapInsert(arr, i);
    }
    for (let i = heapSize - 1; i >= 1; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]]; //将最大的往后放，进行排序
        heapSize--;
        heapify(arr, 0, heapSize);
    }
    return arr;

}
//此操作是将小的的尽可能后移
export function heapify(arr: number[], index: number, heapSize: number) {//heapSize 为堆的大小
    let left = index * 2 + 1;
    while (left < heapSize) {
        let larger = (left + 1 < heapSize && arr[left + 1] > arr[left])
            ? left + 1
            : left;
        larger = arr[larger] > arr[index] ? larger : index;
        if (larger === index) {
            break;
        }
        [arr[larger], arr[index]] = [arr[index], arr[larger]];
        index = larger;
        left = index * 2 + 1;
    }
}
function getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2)
}
function heapInsert(arr, index) {
    let parentIndex = getParentIndex(index)
    while (arr[index] > arr[parentIndex]) {
        [arr[index], arr[parentIndex]] = [arr[parentIndex], arr[index]];
        index = parentIndex;
        parentIndex = getParentIndex(index)
    }
}