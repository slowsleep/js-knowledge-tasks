let nNum = 10;
let curNum;

do {
  while (curNum != nNum) {
    curNum = prompt(`Введите число ${nNum}`);
  }
  nNum *= 2;
} while (curNum < 100);
alert('Спасибо');
