class ST {
    constructor(arr = []) {
        let JMAX = Math.ceil(Math.log2(arr.length)) + 1;
        let d = new Array(arr.length).fill(0).map(i => new Array(JMAX).fill(0));
        arr.forEach((i, idx) => {
            d[idx][0] = i;
        });
        for (let j = 1; j <= JMAX; j++) {
            for (let i = 0; i + (1 << j) - 1 < arr.length; i++) {
                // [i, i+2^j-1] -> [i, i+2^(j-1)-1] + [i+2^(j-1), i+2^j-1]
                d[i][j] = Math.max(d[i][j - 1], d[i + (1 << (j - 1))][j - 1]); // 这里执行对应的可重复贡献逻辑: max, min, gcd...
            }
        }
        this.d = d;
    }
    query(l, r) {
        let j = Math.floor(Math.log2(r - l + 1));
        return Math.max(this.d[l][j], this.d[r - (1 << j) + 1][j]);
    }
}

// test
let arr = [1, 2, 3, 4, 5, 6, 7];
let st = new ST(arr);
console.log(st.query(0, 6));