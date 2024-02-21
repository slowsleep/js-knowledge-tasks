const five = {
    a: 5,
    add(b) {
        console.log(this.a + b);
        return 'PRINTED!';
    },
}

function withLogging(fn) {
    return function(arg) {
        console.log(`Function ${fn.name} called with ${arg}:`)
        const returned = fn.call(this, arg);
        console.log(`Function ${fn.name} returned ${returned}`)
        return returned;
    }
}

five.add = withLogging(five.add);

five.add(10);
five.add(5);
five.add(-5);
