export default function convert(s: string, numRows: number): string {
    let flag = 1;
    let res = ["", "", ""];
    for (let i = 0, p1 = 0; i < numRows && i >= 0 && p1 < s.length; i += flag, p1++) {
        if ((i == 0 && flag == -1) || (i == numRows - 1 && flag == 1)) {
            flag = -flag;
        }
        res[i] += s[p1];
    }
    let str = '';
    for (let i = 0; i < numRows; i++) {
        str += res[i];
    }
    return str;
}