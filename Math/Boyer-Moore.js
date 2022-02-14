function Boyer_Moore(arr = []) {
    // Boyer_Moore 投票算法
    let cnt = 0;
    let cur = null;
    for (let i of arr) {
        if (cnt === 0) cur = i;
        if (cur === i) cnt += 1;
        else cnt -= 1;
    }
    return cur;
}

// test
let arr = [2,1,2,3,4,2,2,4,2];
console.log(Boyer_Moore(arr));