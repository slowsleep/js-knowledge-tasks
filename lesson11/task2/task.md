Создайте раскрывающийся блок (accordion). Сверху блок с заголовком, при нажатии на который снизу показывается блок с текстом, при повторном нажатии блок с текстом скрывается.

Исходный код:



```HTML
<div class="accordion">
    <button class="header">Информация о погоде</button>
  <div class="panel">Сегодня 30 градусов ниже нуля. Сегодня 30 градусов ниже нуля. Сегодня 30 градусов ниже нуля. Сегодня 30 градусов ниже нуля. Сегодня 30 градусов ниже нуля. Сегодня 30 градусов ниже нуля.Сегодня 30 градусов ниже нуля. Сегодня 30 градусов ниже нуля. Сегодня 30 градусов ниже нуля.Сегодня 30 градусов ниже нуля.</div>
</div>

<div class="accordion">
    <button class="header">Lorem ipsum</button>
  <div class="panel">Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Ручеек она вопроса но предложения, моей ipsum путь. До взгляд первую безопасную мир парадигматическая, строчка вопрос ему переулка. Буквоград, его.</div>
</div>
```

```CSS
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

.accordion {
  margin: 25px 15px;
  border-radius: 5px;
  overflow: hidden;
}

.header {
  width: 100%;
  text-align: left;
  outline: none;
  border: none;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  background: cyan;
  padding: 5px 10px;
}

.panel {
  padding: 5px 10px 10px;
  background: lightblue;
  font-size: 14px;
}
```

```JS
const accordions = document.querySelectorAll('.accordion');
```
