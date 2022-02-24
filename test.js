var findLadders = function(beginWord, endWord, wordList) {
    wordList = wordList.filter(i => i.length === beginWord.length);
    wordList = Array.from(new Set(wordList));
    let bidx = wordList.indexOf(beginWord);
    if (bidx === -1) {
        wordList.push(beginWord); 
        bidx = wordList.length - 1;
    }
    let n = wordList.length;
    let dist = new Array(n).fill(0).map(i => new Array(n).fill(0));
    for (let i=0; i<dist.length; i++) {
        for (let j=i; j<dist.length; j++) {
            if (j === i) dist[i][j] = 0;
            else {
                let c = 0;
                for (let k=0; k<beginWord.length; k++) {
                    if (wordList[i][k] !== wordList[j][k]) {
                        c += 1;
                    }
                }
                dist[i][j] = c;
                dist[j][i] = c;
            }
        }
    }
    if (wordList.indexOf(endWord) === -1) return [];
    let idx = wordList.indexOf(endWord);
    let v = wordList.slice().fill(false);
    v[bidx] = true;
    function bct(path = [bidx], visited = v, res = []) {
        console.log(path);
        if (path[path.length - 1] === idx) {
            for (let i of path) {
                res.push(i);
            }
            return res;
        }
        if (res.length !== 0) return res;
        let cur = path[path.length - 1];
        for (let c=0; c<n; c++) {
            if (res.length !== 0) return res;
            if (!visited[c] && dist[cur][c] === 1) {
                path.push(c);
                visited[c] = true;
                bct(path, visited, res);
                visited[c] = false;
                path.pop();
            }
        }
        return res;
    }
    let res  = bct();
    return res.map(i => wordList[i]);
};

let a = "qa"
let b = "sq"
let c = ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]
findLadders(a,b,c);