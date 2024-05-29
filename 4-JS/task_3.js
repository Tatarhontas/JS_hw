"use strict";
// Преобразовать Task 2* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert
// т.к. в моём случае проверка на typeof избыточна (task_2.2), а task_2.3 был уже сделан 
// то я могу взять task_1 

const vvod = prompt("Введите число").trim();
const age = +vvod;
const minAge = 18;
const maxAge = 60;
if(!vvod || isNaN(age)) {
    alert("Недопустимое значение");
} else {
    if (age < minAge) {
    alert(`You don't have access cause your age is ${age}. It's less then ${minAge}`);
} else if (age > maxAge) {
    alert("Keep calm and look Culture channel");
} else {
    alert("Welcome!");
}
}

