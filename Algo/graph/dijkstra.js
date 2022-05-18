function dijkstra(n = 0, edges = [], s = 0) {
    let e = new Map();
    for (let i = 0; i < n; i++) e.set(i, []);
    for (let [f, t, c] of edges) e.get(f).push([t, c]);
    let dist = new Array(n).fill(Infinity);
    dist[s] = 0;
    let seen = new Set();
    let heap = new MinHeap([
        [s, 0]
    ]);
    while (heap.getSize() > 0) {
        let cur = heap.pick()[0];
        if (seen.has(cur)) continue;
        seen.add(cur);
        for (let [t, c] of e.get(cur)) {
            if (!seen.has(t) && dist[t] > dist[cur] + c) {
                dist[t] = dist[cur] + c;
                heap.add([t, dist[t]]);
            }
        }
    }
    return dist;
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
        if (l < this.heap.length && this.heap[l][1] < this.heap[smaller][1]) smaller = l;
        if (r < this.heap.length && this.heap[r][1] < this.heap[smaller][1]) smaller = r;
        if (smaller !== i) {
            this.swap(smaller, i);
            this.down(smaller);
        }
    }
    up(i) {
        let p = this.parent(i);
        if (p >= 0 && this.heap[p][1] > this.heap[i][1]) {
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
let n = 5;
let edges = [
    [0, 1, 1],
    [0, 2, 4],
    [0, 3, 6],
    [1, 4, 4],
    [1, 3, 2],
    [3, 4, 1],
    [2, 3, 1],
    [0, 4, 0],
    [4, 2, 6]
];
let res = dijkstra(n, edges, 0);
console.log(res);