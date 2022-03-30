class SkipList {
    MAX_LAYER = 32;
    P = 1 / 4;
    constructor(data = []) {
        this.tail = new Node(Infinity, new Array(this.MAX_LAYER).fill(0).map(i => null));
        this.head = new Node(-Infinity, new Array(this.MAX_LAYER).fill(0).map(i => this.tail));
        for (let i of data) {
            this.addNode(i);
        }
    }
    addNode(val) {
        let p = this.P;
        let nextLayer = [null];
        while (nextLayer.length < this.MAX_LAYER && Math.random() <= p) nextLayer.push(null);
        let curNode = new Node(val, nextLayer);
        let curLayer = this.MAX_LAYER - 1;
        let cur = this.head;
        while (curLayer >= 0) {
            while (this.getNext(cur, curLayer).val <= val) {
                cur = this.getNext(cur, curLayer);
            }
            if (curLayer < nextLayer.length) {
                curNode.next[curLayer] = cur.next[curLayer];
                cur.next[curLayer] = curNode;
            }
            curLayer -= 1;
        }
    }
    getNext(node, layer) {
        return node.next[layer];
    }
    show() {
        let cur = this.head;
        let res = [];
        while (cur !== null) {
            res.push(cur.val);
            cur = cur.next;
        }
        console.log(res);
    }
}

class Node {
    constructor(val = 0, next = [null]) {
        this.val = val;
        this.next = next;
    }
}

// test
let skiplist = new SkipList([1, 2, 3]);
console.log(skiplist);
// skiplist.show();