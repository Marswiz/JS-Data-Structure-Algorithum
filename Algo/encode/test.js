let a = '110_0_11111_11 | 100_11111_110_0 | 100_11110_1000_110 | 1001_11110_10_11 | 101_11011_1001_11101';
a = a.split('|').map(i => i.split('_').filter(i => i !== '' && i !== ' '));
a = a.map(i => i.map(j => parseInt(j, 2)));
console.log(a);