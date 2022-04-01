function RobinKarp(str = '', R = 11, mod = 1e9+7) {
    let res = 0;
    for (let i of str) {
        res = ((res % mod) * (R % mod)) % mod + i.charCodeAt(0) % mod;
    }
    return res;
}

// test
let s = '1232';
let a = RobinKarp(s);
console.log(a);