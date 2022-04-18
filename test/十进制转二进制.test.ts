import CovertToOctal from '../src/栈/十进制转二进制'
test('672',()=> {
    expect(CovertToOctal(672)).toEqual("1240")
})

test.only('60', () => {
    expect(CovertToOctal(60)).toEqual("74")
})