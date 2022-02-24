class BinaryIndexedTree {
    constructor(arr = []) {
        // this.arr[i] -> this.bit[i+1]
        this.arr = new Array(arr.length).fill(0);
        this.bit = new Array(arr.length + 1).fill(0);
        for (let i = 0; i < arr.length; i++) {
            this.update(i, arr[i]);
        }
        this.arr = arr.slice();
    }
    lowbit(i) {
        // 6 -> 110 -> 10 -> 2
        return i & (-i);
    }
    update(i, v) {
        let c = i + 1;
        let delta = v - this.arr[i];
        if (delta === 0) return;
        while (c < this.bit.length) {
            this.bit[c] += delta;
            c += this.lowbit(c);
        }
    }
    query(i) {
        let c = i + 1;
        let res = 0;
        while (c > 0) {
            res += this.bit[c];
            c -= this.lowbit(c);
        }
        return res;
    }
}

// test
let arr = [1,2,3,4,5,6,7,8];
let bit = new BinaryIndexedTree(arr);
console.log(bit.query(2)); // 6
bit.update(0, 10);
console.log(bit.query(7)); // 45
