function BinaryTreeSerialization_Pre_order(root) {
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
    dfs();
    return res.join('');
}
