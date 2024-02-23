function memo(fn) {
    let cache = {}
    return (...args) => {
        let name = JSON.stringify(args)
        if (cache[name]) {
            console.log("cached result")
            return cache[name]
        }
        let result = fn.call(this, ...args)
        cache[name] = result
        console.log("new result")
        return result
    }
}

const five = {
    a: 5,
    calc(b, c) {
        return this.a + b - c;
    },
}

let memoCalc = memo(five.calc.bind(five))

console.log(memoCalc(5, 3))
console.log(memoCalc(10, 12))
console.log(memoCalc(-5, 2))
console.log(memoCalc(10, 12))
console.log(memoCalc(5, 3))
