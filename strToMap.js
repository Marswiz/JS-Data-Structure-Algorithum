function strToMap(str = '') {
    let m = new Map();
    for (let i = 0; i < str.length; i++) {
        if (!m.has(str[i])) m.set(str[i], 1);
        else m.set(str[i], m.get(str[i]) + 1);
    }
    return m;
}

function arrayToMap(arr = []) {
    let m = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!m.has(arr[i])) m.set(arr[i], 1);
        else m.set(arr[i], m.get(arr[i]) + 1);
    }
    return m;
}

// test
let arr = [1,2,3,4,5,5,4,3,2,1,1,1];
let str = 'lorem, code, textArea, codeing, processing.';
console.log(strToMap(str));
console.log(arrayToMap(arr));