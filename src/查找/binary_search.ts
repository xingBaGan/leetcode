export default function binary_search(arr: number[], target: number) {
    //双指针
    let p1 = 0;
    let p2 = arr.length - 1;
    //使用闭包
    function searchInRange(left: number, right: number) {
        if (right < left) return -1;
        left === right && arr[left] === target ? left : -1;
        let mid = ((right - left) >> 1) + left;
        if (arr[mid] === target) return mid;
        arr[mid] > target ? right = mid - 1 : left = mid + 1;
        return searchInRange(left, right);
    }
    return searchInRange(p1, p2)
}
