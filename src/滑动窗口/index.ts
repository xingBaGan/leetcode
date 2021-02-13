/**
 * 
 * @param {type array} nums 
 * @param {type int} k 窗口大小
 */
export default function maxNumsInWindow(nums: number[], k: number): any[] {
    if (!nums) return [];
    let maxNums = [];
    let len = nums.length;
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
