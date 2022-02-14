function findMode(arr = []) {
    // 哈希计数，寻找众数集合。
    let m = new Map();
    let mode = new Set();
    let cnt = 0;
    for (let i of arr) {
        if (!m.has(i)) m.set(i, 1);
        else m.set(i, m.get(i) + 1);
        if (m.get(i) > cnt) {
            cnt = m.get(i);
            mode = new Set();
            mode.add(i);
        } else if (cnt === m.get(i)) {
            mode.add(i);
        }
    }
    return Array.from(mode);
}

// test
let arr = [1,2,3,4,5,6, 1];
console.log(findMode(arr));