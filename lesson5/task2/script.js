const sayHello = (name = "Иван", surname = "Иванов", age = 10, greeting = "Привет, ") => (
    `${greeting} ${name} ${surname}, тебе ${age} лет`
);

alert( sayHello() );
alert( sayHello('Дима') );
alert( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );
