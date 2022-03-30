class UnionFindSet {
    constructor(arr = []){
        this.map = new Map();
        this.size = arr.length;
        for (let i of arr) {
            this.map.set(i, {
                parent: i,
                rank: 1,
            });
        }
    }
    add(e) {
        if (this.map.has(e)) return;
        this.map.set(e, {
            parent: e,
            rank: 1,
        });
        this.size += 1;
    }
    findParent(e) {
        if (!this.map.has(e)) return null;
        if(this.map.get(e).parent === e) return e;
        let p = this.findParent(this.map.get(e).parent);
        this.map.get(e).parent = p;
        return p;
    }
    isSame(a,b) {
        return this.findParent(a) === this.findParent(b);
    }
    merge(a,b) {
        let p1 = this.findParent(a);
        let p2 = this.findParent(b);
        if (p1 === p2) return;
        let r1 = this.map.get(p1).rank;
        let r2 = this.map.get(p2).rank;
        if (r1 <= r2) {
            this.map.get(p1).parent = p2;
            if (r1 === r2) this.map.get(p2).rank += 1;
        } else {
            this.map.get(p2).parent = p1;
        }
        this.size -= 1;
    }
    getSize() {
        return this.size;
    }
}
