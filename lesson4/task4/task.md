Напишите функцию createAdder(a), которая возвращает функцию addA, которая принимает b и возвращает a + b.

Исходный код:

```javascript
// Функции должны принимать аргументы.

function createAdder() {
	return function addA() {
  	return 5;
  }
}

const add5 = createAdder(5);
alert( add5(5) ) // Должно получиться 10
alert( add5(12) ) // Должно получиться 17
```
