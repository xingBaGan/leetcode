//https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2skh7/
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let len =  nums.length;
    k = k%len;
    if(k === 0) return;
    reverse(nums, 0,len - 1)
    reverse(nums, 0, k-1);
    reverse(nums, k , len - 1)
};

function swap(nums: number[], index_a, index_b) {
    let temp = nums[index_a];
    nums[index_a] = nums[index_b];
    nums[index_b] = temp;
}
function reverse(nums: number[], start: number, end: number) {
    while (start < end) {
        swap(nums, start, end);
        start++;
        end--;
    }
}
export  {
    rotate,
    rotate_by_Joseph_Ring
};


function rotate_by_Joseph_Ring(nums:number[],k:number){
    let len =  nums.length;
    k = k%len;
    if(k === 0) return;
    let index = k;
    //下个要移动的值
    let hold = nums[k];
    let temp;
    let times = 0; //times 表示覆盖的次数
    while(times<len){
        // 获取之前的值
        index = (index+k)%len;
        //暂存之前的值防止被覆盖。
        temp = nums[index];
        //将需要移动的值，放到正确位置
        nums[index] = hold;
        //下个移动的值
        hold = temp;
        times++;
    }
}