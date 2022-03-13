class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    static _buildFromPreorderSerialzation(str) {
        if (str.length === 1 && str[0] === '#') return null;
        str = str.split('');
        let res = new Node(+str[0], '$', '$');
        let stk = [res];
        for (let i = 1; i < str.length; i++) {
            let cur = str[i] === '#' ? null : new Node(+str[i], '$', '$');
            if (stk[stk.length - 1].left === '$') stk[stk.length - 1].left = cur;
            else stk[stk.length - 1].right = cur;
            if (cur !== null) stk.push(cur);
            while (stk.length > 0 && stk[stk.length - 1].right !== '$' && stk[stk.length - 1].left !== '$') stk.pop();
        }
        return res;
    }
    static _preOrderSerialization(root) {
        let res = [];

        function dfs(node = root) {
            if (node === null) {
                res.push('#');
                return;
            }
            res.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
        dfs(this.root);
        return res.join('');
    }
    constructor(bfs = []) {
        if (bfs.length === 0) {
            this.root = null;
            return;
        }

        function build(rootIdx = 0) {
            if (rootIdx >= bfs.length) return null;
            let root = bfs[rootIdx] === null ? null : new Node(bfs[rootIdx]);
            if (root !== null) root.left = build(2 * rootIdx + 1);
            if (root !== null) root.right = build(2 * rootIdx + 2);
            return root;
        }
        this.root = build();
    }
    preOrderSerialization() {
        let res = [];

        function dfs(node) {
            if (node === null) {
                res.push('#');
                return;
            }
            res.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
        dfs(this.root);
        return res.join('');
    }
}

// test
let a = [1, 2, null, 3, 5, null, null, 4];
let str = '1234###5###';
console.log(BinaryTree._preOrderSerialization(BinaryTree._buildFromPreorderSerialzation(str)));