function createCounter (n) {
    return {
        n,

        count() {
            this.n++
            return this
        },

        print() {
            console.log(this.n)
            return this
        },

        set(n) {
            this.n = n
            return this
        }
    }
}

const counter = createCounter(5)
counter.print().set(0).count().print().count().print()
