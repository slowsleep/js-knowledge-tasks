function isEven(n) {
    return n.toString().match(/^\d*[02468]$/) ? true : false;
}

console.log(14, isEven(14));
console.log(17, isEven(17));
console.log(24, isEven(24));
console.log(49, isEven(49));
console.log(43, isEven(43));
console.log(25, isEven(25));
console.log(20, isEven(20));
console.log(0, isEven(0));
console.log(5, isEven(5));
console.log(4, isEven(4));
