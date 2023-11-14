let u1 = prompt('Введите первое число');
let u2 = prompt('Введите второе число');
let u3 = prompt('Введите третье число');

if (u1 > u2) {
    if (u1 > u3) {
        console.log(u1);
    } else {
        console.log(u3);
    }
} else if (u2 > u3) {
    console.log(u2);
} else {
    console.log(u3);
}
