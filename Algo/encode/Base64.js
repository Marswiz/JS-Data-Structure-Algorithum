function Base64(str = '') {
    let b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let binary = [];
    for (let i of str) binary.push(i.charCodeAt(0));
    if (binary.length % 3 !== 0) {
        while (binary.length % 3 !== 0) binary.push(0);
    }
    binary = binary.map(i => i.toString(2).padStart(8, '0'));
    let res = [];
    let cur = [];
    let c = 0;
    while (c < binary.length) {
        while (cur.length < 3) cur.push(binary[c++]);
        let str = cur.join('');
        for (let i=0; i+6<=str.length; i+=6) {
            res.push(b64[parseInt(str.slice(i, i+6), 2)]);
        }
        cur.length = 0;
    }
    return res.join('');
}

// test
console.log(Base64('abcdefg'));