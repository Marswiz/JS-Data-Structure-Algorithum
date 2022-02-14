class DiGraph {
    static BuildFromStdInput(ipt) {
        let {
            v,
            e,
            edges,
        } = JSON.parse(ipt);
        return new DiGraph(v, edges);
    }
    constructor(v = 0, edges = []) {
        this.v = v; // num of vertices.
        this.e = edges.length; // num of edges.
        this.edges = new Map(); // edges: vertice -> Set of target vertice.
        for (let i = 0; i < v; i++) {
            this.edges.set(i, new Set());
        }
        for (let [f, t] of edges) {
            this.edges.get(f).add(t);
        }
    }
    getVNum() {
        return this.v;
    }
    getENum() {
        return this.e;
    }
    addV() {
        this.edges.set(this.v, new Set());
        this.v += 1;
    }
    addEdge(v1, v2) {
        // v1 -> v2
        if (v1 >= this.v || v2 >= this.v) {
            console.warn(`All vertices of the both side of the edge added must already exist in the graph.`);
            return;
        }
        if (this.edges.get(v1).has(v2)) return;
        this.edges.get(v1).add(v2);
        this.e += 1;
    }
    getAdjV(v) {
        return v < this.v ? Array.from(this.edges.get(v)) : [];
    }
    getReversedGraph() {
        let res = new DiGraph(this.v, []);
        for (let [k, v] of this.edges) {
            for (let i of v) {
                res.addEdge(i, k);
            }
        }
        return res;
    }
    toString() {
        // [[v,e],[edges]]
        let res = {};
        res.v = this.v;
        res.e = this.e;
        res.edges = [];
        let map = new Map();
        for (let [k, v] of this.edges) {
            // k -> i
            for (let i of v) {
                res.edges.push([k, i]);
            }
        }
        return JSON.stringify(res);
    }
}

// test
let v = 5;
let edges = [
    [1, 3],
    [0, 3],
    [0, 4],
    [2, 3],
    [2, 4],
    [3, 4],
];
let graph = new DiGraph(v, edges);
graph.addV();
graph.addEdge(5, 2);
graph.addEdge(5, 4);
let reGraph = graph.getReversedGraph();
console.log(reGraph.toString());