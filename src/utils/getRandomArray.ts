export default function generateArr(N: number, max: number): number[] {
    let arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * max));
    }
    return arr;
}
