function fac(n) {
    return n == 1 ? 1 : fac(n-1) * n;
}

console.log(fac(5));
