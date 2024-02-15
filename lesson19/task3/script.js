function memo(fn) {
    let cache = {}
    return (...args) => {
        let name = JSON.stringify(args)
        if (cache[name]) {
            console.log("cached result")
            return cache[name]
        }
        let result = fn(...args)
        cache[name] = result
        console.log("new result")
        return result
    }
}

function sum(...args) {
    return args.reduce((acc, curVal) => acc + curVal, 0)
}

let memoSum = memo(sum)

console.log(memoSum(1,2))
console.log(memoSum(1,2))
console.log(memoSum(1,2,3))
console.log(memoSum(3,2))
console.log(memoSum(1,2))

