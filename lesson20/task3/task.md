Исправьте код так, чтобы this не терялось.

Исходный код:

HTML:
```html
<div id="root">

</div>

<button class="increment">
  INCREMENT
</button>

<button class="decrement">
  Decrement
</button>
```

CSS:
```css
p {
  font-size: 22px;
  font-family: sans-serif;
  margin: 25px 15px;
}

body {
  margin: 0;
  padding: 0;
}

img {
  margin: 0 15px;
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 50px;
}

button {
  margin-left: 50%;
  transform: translate(-50%);
  font-size: 16px;
  padding: 5px 10px;
  width: 130px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
```

JS:
```javascript
class Counter {
	constructor(n) {
  	this.state = { n };
    this.root = document.getElementById('root');
    this.render();
  }

  increment() {
  	this.setState({ n: this.state.n + 1 });
  }

  decrement() {
  	this.setState({ n: this.state.n - 1 });
  }

  setState(newState) {
  	this.state = {
    	...this.state,
      ...newState,
    };
    this.render();
  }

  render() {
  	this.root.innerHTML = '';
    this.root.innerHTML = this.state.n;
  }
}

const buttonIncrement = document.querySelector('.increment');
const buttonDecrement = document.querySelector('.decrement');

const counter = new Counter(5);

buttonIncrement.addEventListener('click', counter.increment);
buttonDecrement.addEventListener('click', counter.decrement);
```

Должно получиться:

число

(кнопка увеличивающая число)

(кнопка уменьшающая число)

