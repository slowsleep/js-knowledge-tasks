Напишите функцию sayHello(name, surname, age, greeting), которая принимает в качестве аргументов имя, фамилию, возраст и приветствие. Каждый аргумент должен иметь дефолтное значение, функция должна быть стрелочной и не иметь ключевого слова return.

Например, при вызове sayHello('Дима') функция должна вернуть строку: "Привет, Дима Иванов, тебе 10 лет", а при вызове sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') функция должна вернуть строку: "Здравствуйте, Евгений Петров, тебе 25 лет". А при вызове без аргументов она должна вернуть: "Привет, Иван Иванов, тебе 10 лет".

Исходный код:

```javascript
const sayHello = () => 'Привет, Иван Иванов, тебе 10 лет'

alert( sayHello() );
alert( sayHello('Дима') );
alert( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );
```