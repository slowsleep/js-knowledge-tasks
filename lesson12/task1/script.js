function Entity(name) {
    this.name = name;
}

Entity.prototype.born = function () {
    console.log(`I am born! I am a ${this.name}.`);
};


function Animal(name, age) {
    Entity.call(this, name);
    this.age = age;
}

Animal.prototype = Object.create(Entity.prototype);
Animal.prototype.constructor = Animal;


function Human(name, age, height, job, tool) {
    Animal.call(this, name, age);
    this.height = height;
    this.job = job;
    this.tool = tool;
}

Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Human;
Human.prototype.work = function () {
    console.log(`${this.name} работает по специальности - ${this.job}.`);
};
Human.prototype.grid = function() {
    console.log(`${this.name} копает держа в руке ${this.tool}.`);
}


function Bird(name, age, color) {
    Animal.call(this, name, age);
    this.color = color;
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function () {
    console.log(`${this.name} полетел(а). И имеет цвет - ${this.color}.`);
};


function Fish(name, age, length) {
    Animal.call(this, name, age);
    this.length = length;
}

Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;
Fish.prototype.swim = function () {
    console.log(`${this.name} длиной - ${this.length} попыл(а).`);
};


function Chinese(name, age, height, tool) {
    Human.call(this, name, age, height, false ,tool);
}

Chinese.prototype = Object.create(Human.prototype);
Chinese.prototype.constructor = Chinese;
Chinese.prototype.work = function() {
    console.log(`${this.name} строит Великую Китайскую Стену!`);
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

