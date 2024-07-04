function shellSort(arr) {
    let n = arr.length;

    // 初始间隔
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // 针对每个间隔序列进行插入排序, 使用插入排序，默认为第一个为有序的。
        for (let i = gap; i < n; i++) {
            // 记录原值
            let temp = arr[i];
            let j;
            
            // 将当前元素与其前面的元素进行比较，如果当前元素较小，则将前面的元素向后移动
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }

            // 将当前元素放到正确的位置
            arr[j] = temp;
        }
    }

    return arr;
}

// [1, 2, 3, 4]