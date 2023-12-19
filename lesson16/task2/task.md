Перепишите serverMock, используя Promise. С вероятностью 30% Promise должен упасть с ошибкой.

Напишите функцию serverMock(latency), которая принимает необходимую задержку и возвращает Promise с массивом products, содержащим объекты товаров. Каждый товар содержит поля price (случайное число от 300 до 10000) и name (случайное наименование из массива наименований). Через {latency} миллисекунд функция вызывает resolve() со случайно сгенерированным массивом товаров длиной от 5 до 10. Выведите в консоль массив товаров и ошибку, если она произошла.

Исходный код:

```javascript
const random = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const productNames = [
	'Орехи', 'Морковь', 'Спаржа', 'Печенье', 'Наушники', 'Молоко',
	'Сок', 'Контейнер', 'JS-разработчик', 'Прямые руки', 'Водка',
];
const getRandomProductName = () => {
	return productNames[random(0, productNames.length - 1)];
};
const getRandomPrice = () => random(300, 10000);

const serverMock = (latency, cb) => {
	const products = Array.from({ length: random(5, 10) })
  	.map(() => ({
      name: getRandomProductName(),
      price: getRandomPrice(),
    }));

  setTimeout(() => {
  	cb(products);
  }, latency)
};

serverMock(3000, (products) => {
	console.log(products);
});
```
