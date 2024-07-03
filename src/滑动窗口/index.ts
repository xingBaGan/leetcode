//https://leetcode-cn.com/problems/sliding-window-maximum/
/**
 * 
 * @param {type array} nums 
 * @param {type int} k 窗口大小
 */
export default function maxNumsInWindow(nums: number[], k: number): any[] {
    let len = nums.length;
    if (!nums||!len) return [];
    let maxNums = [];
    for (let i = 0; i <= len - k; i++) {
        let max = Number.MIN_SAFE_INTEGER;
        for (let j = 0; j < k; j++) {
            if (nums[i + j] > max) {
                max = nums[i + j]
            }
        }
        maxNums.push(max);
    }
    return maxNums;
}
