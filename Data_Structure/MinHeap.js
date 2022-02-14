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
        if (l < this.heap.length && this.heap[l] < this.heap[smaller]) smaller = l;
        if (r < this.heap.length && this.heap[r] < this.heap[smaller]) smaller = r;
        if (smaller !== i) {
            this.swap(smaller, i);
            this.down(smaller);
        }
    }
    up(i) {
        let p = this.parent(i);
        if (p >= 0 && this.heap[p] > this.heap[i]) {
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
        this.swap(0, this.getSize()-1);
        let r = this.heap.pop();
        this.down(0);
        return r;
    }
}

// test
let a = [9,8,7,6,5,4,3,2,1,0];
let heap = new MinHeap(a, 4);
console.log(heap);
heap.add(0);
heap.add(-1);
// heap.pick();
console.log(heap.top());;
console.log(heap);