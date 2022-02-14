class MonotonousQueue {
    constructor(config = {
        type: 'accending',
    }) {
        this.queue = [];
        this.config = config;
    }
    size() {
        return this.queue.length;
    }
    getHead() {
        return this.queue.length > 0 ? this.queue[0] : undefined;
    }
    refreshTail(e) {
        if (this.queue.length === 0) {
            this.queue.push(e);
            return this.queue;
        }
        let l = 0,
            r = this.queue.length - 1;
        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (this.config.type === 'accending' ? this.queue[m] > e : this.queue[m] < e) r = m;
            else l = m + 1;
        }
        if (this.config.type === 'accending' ? this.queue[l] > e : this.queue[l] < e) this.queue = this.queue.slice(0, l);
        this.queue.push(e);
        return this.queue;
    }
    refreshHead(e) {
        if (this.queue.length === 0) return this.queue;
        if (this.queue[0] === e) this.queue.shift();
        return this.queue;
    }
}

// test
let queue = new MonotonousQueue();
let arr = [3, 2, 4, 1, 0, 5, 8, 4, 2, 34, 5, 1, 0];
let k = 4;
for (let i = 0; i < k; i++) {
    queue.refreshTail(arr[i]);
}
let res = [];
for (let i = k; i <= arr.length; i++) {
    res.push(queue.getHead());
    if (i !== arr.length) queue.refreshTail(arr[i]);
    queue.refreshHead(arr[i - k]);
}
console.log(res);
// [
//     1, 0, 0, 0, 0,
//     2, 2, 2, 1, 0 
// ]