Напишите игру: в центре экрана появляется кнопка «Нажми меня». Когда юзер наводит на неё курсор, она сразу же перемещается на случайные координаты.

Исходный код:

```HTML
<div class="field">
  <button type="button">
    Нажми меня!
  </button>
</div>
```

```CSS
body {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}

.field {
  box-sizing: border-box;
  margin: 10px;
  border: 1px solid blue;
  height: calc(100% - 20px);
}

button {
  padding: 10px 20px;
  position: absolute;
  width: 120px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease;
}
```

```JS
const random = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
```

