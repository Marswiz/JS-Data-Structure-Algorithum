class Trie {
    constructor(words = []) {
        this.trie = new Map();
        this.wordEnd = '*';
        for (let w of words) {
            this.add(w);
        }
    }
    add(w) {
        let cur = this.trie;
        for (let i of w) {
            if (!cur.has(i)) cur.set(i, new Map());
            cur = cur.get(i);
        }
        cur.set(this.wordEnd, new Map());
    }
    findWord(w) {
        let cur = this.trie;
        for (let i of w) {
            if (!cur.has(i)) return false;
            cur = cur.get(i);
        }
        if (cur.has(this.wordEnd)) return true;
        return false;
    }
}