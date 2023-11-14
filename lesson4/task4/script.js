function createAdder(a) {
    return function addA(b) {
        return a + b;
    }
}

const add5 = createAdder(5)
console.log(add5(5))
console.log(add5(12))
