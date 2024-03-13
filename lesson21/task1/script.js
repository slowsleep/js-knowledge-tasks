function print(iterable) {
    if (iterable instanceof Map) {
        iterable.forEach((value, key) => console.log('key:', key, 'value:', value))
    } else if (iterable instanceof Set) {
        iterable.forEach(value => console.log('value:', value))
    }
}

let myMap = new Map();
myMap.set('a', 1)
myMap.set('b', 2)
myMap.set('c', 3)
myMap.set({}, 4)
myMap.set(5, {})
myMap.set(() => {}, {name: "Jack"})

let mySet = new Set([1, 2, 3, () => {}, {age: 29}]);

print(myMap);
print(mySet);
