function findMedian(arr = [], l = 0, r = arr.length - 1, res = []) {
    if (arr.length === 0) {
        return null;
    }
    if (res.length === 2) return;
    if (l > r) return;
    let m = Math.floor((l + r) / 2);
    if (arr[l] > arr[m])[arr[l], arr[m]] = [arr[m], arr[l]];
    if (arr[m] > arr[r])[arr[r], arr[m]] = [arr[m], arr[r]];
    if (arr[l] > arr[m])[arr[l], arr[m]] = [arr[m], arr[l]];
    if (r - l > 2) {
        [arr[r - 1], arr[m]] = [arr[m], arr[r - 1]];
        let left = l,
            right = r - 2;
        let midVal = arr[r - 1];
        while (left < right) {
            // < midVal / >= midVal
            while (arr[left] < midVal) left += 1;
            while (arr[right] >= midVal) right -= 1;
            if (left < right)[arr[left], arr[right]] = [arr[right], arr[left]];
        }
        [arr[r - 1], arr[left]] = [arr[left], arr[r - 1]];
        if (left === Math.floor(arr.length / 2) && arr.length % 2 !== 0) {
            res.push(arr[left], arr[left]);
        } else if (arr.length % 2 === 0 && (left === Math.floor(arr.length / 2) || left === Math.floor(arr.length / 2) - 1)) {
            res.push(arr[left]);
        }
        findMedian(arr, l, left - 1, res);
        findMedian(arr, left + 1, r, res);
    } else {
        let s = new Set([l, m, r]);
        for (let i of s) {
            if (i === Math.floor(arr.length / 2) && arr.length % 2 !== 0) {
                res.push(arr[i], arr[i]);
            } else if (arr.length % 2 === 0 && (i === Math.floor(arr.length / 2) || i === Math.floor(arr.length / 2) - 1)) {
                res.push(arr[i]);
            }
        }
    }
    return (res[0] + res[1]) / 2;
}

// test
let arr = [6,5,4,3,2,1,1,1,1,11,0,0,0,0,0,12,23,23,23,2,2,323,23,23];
console.log(findMedian(arr));