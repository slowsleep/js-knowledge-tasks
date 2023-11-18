Напишите функцию, которая принимает HTML в виде строки и возвращает HTML без элементов div (и всего, что внутри), все остальные элементы сохраняются. Используйте createElement, querySelectorAll и innerHTML.

Исходный код:

```javascript
const removeDivs = html => {
	return html;
}

const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';

alert( removeDivs(html));
alert( removeDivs(html) === 'Hello <b>World!</b>'); // Должно быть true
```
