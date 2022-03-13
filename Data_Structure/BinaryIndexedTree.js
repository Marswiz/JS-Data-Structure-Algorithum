class BinaryIndexedTree {
    constructor(arr = []) {
        let bit = new Array(arr.length + 1).fill(0);
        this.bit = bit;
        arr.forEach((i, idx) => this.update(idx, i));
    }
    lowbit(i) {
        // 6 -> 110 -> (110) & (010) -> 010
        return (i & -i);
    }
    query(i) {
        // query prefix sum of [0, i]
        if (i >= this.bit.length-1) {
            console.warn(`index exceed the limit.`);
            return;
        }
        let res = 0,
            c = i + 1;
        while (c > 0) {
            res += this.bit[c];
            c -= this.lowbit(c);
        }
        return res;
    }
    update(i, diff) {
        // update arr[i] with delta <diff>.
        let c = i + 1;
        while (c < this.bit.length) {
            this.bit[c] += diff;
            c += this.lowbit(c);
        }
    }
}

// test
let arr = [1,2,3,4,5,6,7,8];
let bit = new BinaryIndexedTree(arr);
console.log(bit.query(2)); // 6
bit.update(0, 10);
console.log(bit.query(7)); // 46
