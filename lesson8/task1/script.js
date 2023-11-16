const sayHello = ((name) => {
    let counter = 0;
    return function () {
        counter++;
        if (counter <= 3) {
            console.log(`Hello, ${name}`);
        }
    }
})()

sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
