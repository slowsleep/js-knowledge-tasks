function withCache(fn, hash) {
    let cache = new Map()
    return function(...args) {
        let name = hash(...args)
        if (cache.has(name)) {
            console.log("cached result")
            return cache.get(name)
        }
        let result = fn.apply(this, arguments)
        cache.set(name, result)
        console.log("new result")
        return result
    }
}

function hash(...args) {
    return JSON.stringify(args);
}

const five = {
    a: 5,
    calc(b, c) {
        return this.a + b - c;
    },
}

let memoCalc = withCache(five.calc.bind(five), hash)

console.log("simple test cache")
console.log(memoCalc(5, 3))
console.log(memoCalc(10, 12))
console.log(memoCalc(-5, 2))
console.log(memoCalc(10, 12))
console.log(memoCalc(5, 3))


const calculator = {
    pow(num) {
      return num * num;
    },

    slowCalculation(n, m) {
        console.log("start slowCalculation");
        for (let i = 0; i < 1000000000; ++i);
        console.log("end slowCalculation");
        return n + this.pow(m);
    }
};

console.log("\nslow test cache")
console.log("-before cache-")
console.log("just calc without cache", calculator.slowCalculation(15, 50) );
calculator.slowCalculation = withCache(calculator.slowCalculation, hash);

console.log("-after cache-");
setTimeout(() => {
	console.log( calculator.slowCalculation(15, 50))
	console.log( calculator.slowCalculation(15, 50))
	console.log( calculator.slowCalculation(15, 50))
}, 3000);
