export default function binary_search(arr: number[], target: number) {
    //双指针
    let p1 = 0;
    let p2 = arr.length - 1;
    
    //使用闭包
    function searchInRange(left: number, right: number) {
        if (right < left) return -1;
        if (left === right && arr[left] === target) return left;
        const mid = Math.floor((right - left) / 2) + left;
        if (arr[mid] === target) return mid;
        if(arr[mid] < target) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
        return searchInRange(left, right)
    }
    return searchInRange(p1, p2);
}
