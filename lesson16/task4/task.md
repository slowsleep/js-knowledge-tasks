Напишите функцию flipCoin() — подбросить монетку. Монетка летит от 50 до 200 миллисекунд. И с шансом 50% выпадает орёл (heads) или решка (tails). То есть функция возвращает promise со строкой 'heads' или 'tails'.

Используйте функции random(min, max) и checkLuck(chance) из предыдущих заданий.

Подбросьте 100000 монет одновременно и посчитайте, сколько раз выпала решка, а сколько — орёл. Используйте Promise.all().
