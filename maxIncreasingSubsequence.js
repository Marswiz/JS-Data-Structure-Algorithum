function getMaxIncreasingSubsquenceLength(arr = []) {
    let s = [];
    for (let i of arr) {
        // find first >= i
        let l = 0,
            r = s.length - 1;
        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (s[m] >= i) r = m;
            else l = m + 1;
        }
        if (s[l] >= i) s[l] = i;
        else s.push(i);
    }
    return s.length;
}

function getMaxIncreasingSubsquence(arr = []) {
    if (arr.length === 0) return [];
    let s = [];
    let p = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        // find first >= i
        if (s.length === 0) {
            s.push(i);
            p[i] = null;
            continue;
        }
        let l = 0,
            r = s.length - 1;
        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (arr[s[m]] >= arr[i]) r = m;
            else l = m + 1;
        }
        if (arr[s[l]] >= arr[i]) {
            s[l] = i;
            p[i] = l - 1 >= 0 ? s[l - 1] : null;
        } else {
            s.push(i);
            p[i] = s.length - 2 >= 0 ? s[s.length - 2] : null;
        }
    }
    let res = [];
    let cur = s[s.length-1];
    while (cur !== null) {
        res.push(arr[cur]);
        cur = p[cur];
    }
    return res.reverse();
}

// test
let arr = [4,6,7,7];
console.log(getMaxIncreasingSubsquence(arr));