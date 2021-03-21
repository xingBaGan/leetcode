export default function shell_sort(arr: number[]) {
    if (!arr.length) return [];
    let gap = 4;
    do {
        if (arr.length < gap) continue;
        for (let i = gap; i < arr.length; i += gap) {
            for (let j = i; j > 0; j -= gap) {//arr[j]代表开始比较的数
                if (arr[j] < arr[j - gap]) {
                    [arr[j - gap], arr[j]] = [arr[j], arr[j - gap]]//swap
                }
            }
        }
    } while (gap >>= 1);
    return arr
}



