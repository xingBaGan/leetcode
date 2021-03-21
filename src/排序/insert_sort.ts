export default function insert_sort(arr: number[]) {
    if (!arr.length) return []
    //i代表即将插入的下标
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {//arr[j]代表开始比较的数
            if (arr[j] < arr[j - 1]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]//swap
            }
        }
    }
    return arr;
}