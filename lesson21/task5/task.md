И ещё раз перепишите memo(fn) так, чтобы аргументы и возвращаемое значение хранились в new Map(), а для сравнения аргументов вместо JSON.stringify использовалась функция hash, принимающая аргументы возвращающая нечто, что легко сравнить (например строки или числа). Кэшируйте все вызовы, переименуйте memo в withCache.

Сигнатура должна теперь выглядеть следующим образом: withCache(fn, hash).
