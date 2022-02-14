class SegmentTree {
    constructor(arr = []) {
        this.arr = arr;
        this.tree = new Array(4 * this.arr.length).fill(null);
        this.build();
    }
    build(idx = 0, start = 0, end = this.arr.length - 1) {
        if (start === end) {
            this.tree[idx] = arr[start];
            return;
        }
        let leftIdx = 2 * idx + 1;
        let rightIdx = 2 * idx + 2;
        let m = Math.floor((start + end) / 2);
        // [start, m] [m+1, end]
        this.build(leftIdx, start, m);
        this.build(rightIdx, m + 1, end);
        this.tree[idx] = this.tree[leftIdx] + this.tree[rightIdx];
    }
    update(arrIdx, val) {
        if (val === this.arr[arrIdx]) return;
        let delta = val - this.arr[arrIdx];
        this.arr[arrIdx] = val; // refresh arr self
        // refresh tree
        this._treeUpdate(arrIdx, delta);
        console.log(this.tree);
    }
    query(start = 0, end = this.arr.length - 1) {
        if (start > end) {
            console.warn(`Start must be smaller than or equal to End.`);
            return null;
        }
        return this._query(start, end);
    }
    _treeUpdate(arrIdx, delta, idx = 0, start = 0, end = this.arr.length - 1) {
        if (arrIdx < start || arrIdx > end) return;
        if (start === end) {
            this.tree[idx] += delta;
            return;
        }
        this.tree[idx] += delta;
        let leftIdx = 2 * idx + 1;
        let rightIdx = 2 * idx + 2;
        let m = Math.floor((start + end) / 2);
        this._treeUpdate(arrIdx, delta, leftIdx, start, m);
        this._treeUpdate(arrIdx, delta, rightIdx, m + 1, end);
    }
    _query(qStart, qEnd, idx = 0, start = 0, end = this.arr.length - 1, res = [0]) {
        if (qStart === start && qEnd === end) {
            res[0] += this.tree[idx];
            return res[0];
        }
        let leftIdx = 2 * idx + 1;
        let rightIdx = 2 * idx + 2;
        let m = Math.floor((start + end) / 2); // [start, m] [m+1, end]
        if (m >= qEnd) {
            this._query(qStart, qEnd, leftIdx, start, m, res);
        } else if (m+1 <= qStart) {
            this._query(qStart, qEnd, rightIdx, m+1, end, res);
        } else {
            this._query(qStart, m, leftIdx, start, m, res);
            this._query(m+1, qEnd, rightIdx, m+1, end, res);
        }
        return res[0];
    }
}

// test
let arr = [1, 3, 5, 7, 9, 11];
let tree = new SegmentTree(arr);
console.log(tree.query(1,1));
console.log(tree.query(1,0));