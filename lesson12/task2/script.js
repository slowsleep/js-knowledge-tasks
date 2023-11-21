class Entity {
    constructor(name) {
        this.name = name;
    }
    born() {
        console.log(`I am born! I am a ${this.name}.`);
    }
}

class Animal extends Entity {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

class Human extends Animal {
    constructor(name, age, height, job, tool) {
        super(name, age);
        this.height = height;
        this.job = job;
        this.tool = tool;
    }
    work() {
        console.log(`${this.name} работает по специальности - ${this.job}.`);
    }
    grid() {
        console.log(`${this.name} копает держа в руке ${this.tool}.`);
    }
}

class Bird extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }
    fly() {
        console.log(`${this.name} полетел(а). И имеет цвет - ${this.color}.`);
    }
}

class Fish extends Animal {
    constructor(name, age, length) {
        super(name, age);
        this.length = length;
    }
    swim() {
        console.log(`${this.name} длиной - ${this.length} попыл(а).`);
    }
}

class Chinese extends Human {
    constructor(name, age, height, tool) {
        super(name, age, height, false, tool);
    }
    work() {
        console.log(`${this.name} строит Великую Китайскую Стену!`);
    }
}


let kakadu = new Bird("Baboo", 3, "multicolor");
kakadu.fly();

let nemo = new Fish("Plumpi", 1.5, 3.75);
nemo.swim();

let ying = new Chinese("Chuo Ying", 27, 168, "кисть для рисования");
ying.born();
ying.work();
ying.grid();

let lena = new Human("Lena", 23, 172, "медсестра", "лопата");
lena.born();
lena.work();
lena.grid();

console.log(ying instanceof Entity); // Должно быть true
console.log(ying instanceof Animal); // Должно быть true
console.log(ying instanceof Human); // Должно быть true
console.log(ying instanceof Chinese); // Должно быть true
console.log(ying instanceof Fish); // Должно быть false
console.log(ying instanceof Bird); // Должно быть false
