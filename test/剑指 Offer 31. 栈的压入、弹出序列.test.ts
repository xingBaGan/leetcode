import validateStackSequences from "../src/栈/剑指 Offer 31. 栈的压入、弹出序列";

describe("the true suit", () => {
    test("base", () => {
        expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])).toBe(true)
    })
    test("base", () => {
        expect(validateStackSequences([1, 2], [2, 1])).toBe(true)
    })
    test("base", () => {
        expect(validateStackSequences([], [])).toBe(true)
    })
    test("base", () => {
        expect(validateStackSequences([1, 2, 3], [1, 3, 2])).toBe(true)
    })
    test("", () => {
        expect(validateStackSequences([2, 1, 0], [1, 2, 0])).toBe(true)
    })
})

describe("the error suit", () => {
    test("has error len", () => {
        expect(validateStackSequences([1, 2, 3, 4], [4, 5, 3, 2, 1])).toBe(false)
    })
    test("base", () => {
        expect(validateStackSequences([1, 2,3,4], [4,1,3, 2])).toBe(false)
    })
})
test("false", () => {
    expect(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])).toBe(false)
})