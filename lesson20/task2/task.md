Добавьте возможность цепного вызова методов counter:

```
const counter = createCounter(5);
counter
  	.print() // 5
	.set(0)
	.count()
	.print() // 1
	.count()
  	.print() // 2
```
