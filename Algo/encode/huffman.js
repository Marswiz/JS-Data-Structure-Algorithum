function huffmanEncode(str) {
    // 1. count the number of each ltr.
    let cnt = new Map();
    for (let i of str) {
        if (!cnt.has(i)) cnt.set(i, 1);
        else cnt.set(i, cnt.get(i) + 1);
    }
    // 2. build min heap.
    let heap = new MinHeap();
    for (let [k, v] of cnt) {
        heap.add(new Node(v, k));
    }
    // 3. pick & build.
    while (heap.getSize() > 1) {
        let a = heap.pick(),
            b = heap.pick();
        let root = new Node(a.val + b.val, null, a, b);
        heap.add(root);
    }
    // 4. get code of each ltr.
    let dict = new Map();
    let root = heap.pick();
    function dfs(node = root, path = []) {
        if (node === null) return;
        if (node.ltr !== null) {
            dict.set(node.ltr, path.join(''));
            return;
        }
        path.push(0);
        dfs(node.left, path);
        path[path.length-1] = 1;
        dfs(node.right, path);
        path.pop();
    }
    dfs();
    // 5. merge result.
    // [ltr_number, {ltr,code...}, `_`, stringEncoded]
    let res = [dict.size];
    for (let [k,v] of dict) {
        res.push(k,v);
    }
    res.push('_');
    for (let i of str) {
        res.push(dict.get(i));
    }
    return res.join('');
}

class Node {
    constructor(val, ltr = null, left = null, right = null) {
        this.val = val;
        this.ltr = ltr;
        this.left = left;
        this.right = right;
    }
}

class MinHeap {
    constructor(arr = [], size = Infinity) {
        this.heap = arr;
        this.size = size;
        for (let i = Math.floor(this.heap.length / 2) + 1; i >= 0; i--) {
            this.down(i);
        }
        while (this.heap.length > this.size) this.heap.pop();
    }
    left(i) {
        return 2 * i + 1;
    }
    right(i) {
        return 2 * i + 2;
    }
    parent(i) {
        return Math.floor((i - 1) / 2);
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    down(i) {
        let l = this.left(i);
        let r = this.right(i);
        let smaller = i;
        if (l < this.heap.length && this.heap[l].val < this.heap[smaller].val) smaller = l;
        if (r < this.heap.length && this.heap[r].val < this.heap[smaller].val) smaller = r;
        if (smaller !== i) {
            this.swap(smaller, i);
            this.down(smaller);
        }
    }
    up(i) {
        let p = this.parent(i);
        if (p >= 0 && this.heap[p].val > this.heap[i].val) {
            this.swap(p, i);
            this.up(p);
        }
    }
    add(e) {
        this.heap.push(e);
        this.up(this.heap.length - 1);
        while (this.heap.length > this.size) this.heap.pop();
    }
    top() {
        return this.heap.length > 0 ? this.heap[0] : undefined;
    }
    getSize() {
        return this.heap.length;
    }
    pick() {
        this.swap(0, this.getSize() - 1);
        let r = this.heap.pop();
        this.down(0);
        return r;
    }
}

// test
let dict = huffmanEncode('Marswiz');
console.log(dict);