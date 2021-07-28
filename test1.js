a = Array.from(new Array(20), (x, i) => i);
console.log(a);
b = String.fromCharCode(...[...Array('D'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));
console.log(b);