import convert from "../src/字符串类型/z字转化";
test("base", () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR")
})