function floydRing(head) {
    // floyd 寻环算法
    let s = head.next, f = head.next.next;
    while (s !== f) {
        s = s.next;
        f = f.next.next;
    }
    s = head;
    while (s !== f) {
        s = s.next;
        f = f.next;
    }
    return s;
}

// test
class Node {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

let head = new Node(1);
head.next = new Node(2, new Node(3, new Node(4, head)));
let h = new Node(5, head);
console.log(floydRing(h).val);