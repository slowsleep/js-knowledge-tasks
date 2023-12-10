function validatePhoneNumber(str) {
    return str.match(/^\+7\s\(\d{3,4}\)\s\d{2,3}-\d{2}-\d{2}/) ? true : false;
}

console.log(validatePhoneNumber("+7 (987) 654-32-10"))
console.log(validatePhoneNumber("+7 (4212) 53-53-53"))
console.log(validatePhoneNumber("+7 4212 53-53-53"))
console.log(validatePhoneNumber("+7 4212 535353"))
console.log(validatePhoneNumber("+9 (4212) 535353"))
console.log(validatePhoneNumber("+9 (4212) 53-53-53"))
console.log(validatePhoneNumber("+7 (4222) 53-53-53"))
console.log(validatePhoneNumber("+8 (999) 654-32-10"))
console.log(validatePhoneNumber("+7 (999) 654-3210"))
