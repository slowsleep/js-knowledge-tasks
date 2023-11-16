function getInfo(person) {
    let arrAge = person.map(person => person.age);
    let personMaxAge = person.filter(item => item.age == Math.max(...arrAge));
    let oldestPersonName = personMaxAge[0].name;
    let avgAge = person.reduce((acc, item) => acc += item.age, 0) / person.length;

    return {oldestPersonName, avgAge};
}

console.log(getInfo([
    {name: 'Emily', age: 22},
    {name: 'Jack', age: 18},
    {name: 'David', age: 35},
    {name: 'Rose', age: 44}
]));
