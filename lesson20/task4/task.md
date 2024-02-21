Снова исправьте код так, чтобы this не терялось. Вспомните про стрелочные функции.

Исходный код:

```javascript
const five = {
	a: 5,
  add(b) {
  	console.log(this.a + b);
    return 'PRINTED!';
  },
}

const withLogging = fn => {
	return arg => {
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
```
