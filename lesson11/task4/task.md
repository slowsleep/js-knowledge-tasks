Выведите на экран надпись «Ширина экрана {width} пикселей» и обновляйте её при изменении ширины экрана.

Исходный код:

```HTML
<div class="field">
  <button type="button">
    Ширина экрана x пикселей
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
  white-space: nowrap;
  padding: 10px 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease;
}
```

