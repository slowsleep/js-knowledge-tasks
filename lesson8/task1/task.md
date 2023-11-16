Перепишите функцию так, чтобы она писала 'Hello, {name}' в консоль только при первых трёх вызовах, начиная с 4-го ничего не делала. Используйте замыкания.

Исходный код:

```javascript
const sayHello = name => {
  console.log(`Hello, ${name}`);
}

sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
```
