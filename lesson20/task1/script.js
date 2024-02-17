function createCounter(n) {
    return {
        n,

        count() {
            this.n++
        },

        print() {
            console.log(this.n)
        },

        set(n) {
            this.n = n
        }
    }
}

let objA = createCounter(4)

objA.print() // 4
objA.count() // 4 + 1
objA.count() // 5 + 1
objA.print() // 6
objA.set(70) // n = 70
objA.print() // 70
objA.count() // 70 + 1
objA.print() // 71
