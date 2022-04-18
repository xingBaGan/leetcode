export default function CovertToOctal(decimal: number): string{
    let stack = [];
    while (decimal/8) {
        stack.push(decimal % 8);
        decimal = Math.floor(decimal / 8);
    }
    return stack.reverse().join('')
}