/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

export default function validateStackSequences(pushed: number[], popped: number[]) {
    if (pushed.length == 0) return true;
    if (pushed.length !== popped.length) return false;
    let stack = [];
    let p = 0;
    let len = pushed.length;
    for (let i = 0; i < len; i++) {
        stack.push(pushed[i]);
        while (p < len && stack[stack.length - 1] === popped[p]) { stack.pop(); p++};
    }
    return stack.length == 0 ? true : false;
};

