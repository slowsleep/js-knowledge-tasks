function range(min, max) {
    return {
        from: min,
        to: max,

        [Symbol.iterator]() {
            this.current = this.from;
            return this;
        },

        next() {
            if (this.current <= this.to) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    };
}

for (let i of range(0, 5)) {
    console.log(i); 
}
