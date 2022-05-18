function floyd(n = 10, edges = [], query = [0, 0]) {
    let dp = new Array(n).fill(0).map(i => new Array(n).fill(Infinity));
    for (let i = 0; i < n; i++) dp[i][i] = 0;
    for (let [f, t, cost] of edges) dp[f][t] = cost;
    for (let k=0; k<n; k++) {
        for (let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
                dp[i][j] = Math.min(dp[i][j], dp[i][k]+dp[k][j]);
            }
        }
    }
    return query.map(i => dp[i[0]][i[1]]);
}

// test
let n = 4;
let edges = [[0,1,1],[0,2,4],[0,3,6],[1,3,2],[2,3,1]];
query = [[0,3],[1,2],[2,3], [0,2]];
console.log(floyd(n, edges, query));