"use strict";
// Преобразовать Task 2* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert
// т.к. в моём случае проверка на typeof избыточна (task_2.2), а task_2.3 был уже сделан в task_2.1
// то я могу взять task_1 или task_2.1
// выбрала task_1 Вариант 1
const vvod = prompt("Введите число");
const age = (vvod === null || vvod.trim() === "") ? NaN : +vvod;
const minAge = 18;
const maxAge = 60;
if(isNaN(age)) {
    alert("Значение, которое Вы ввели, не является числом");
} else if (age < minAge) {
    alert(`You don't have access cause your age is ${age}. It's less then ${minAge}`);
} else if (age > maxAge) {
    alert("Keep calm and look Culture channel");
} else {
    alert("Welcome!");
}

// хочу чтобы когда юзер нажимал на отмену (возвращается null), 
// ему не выходило сообщение Значение, которое Вы ввели, не является числом
// а сразу же закрывалось окошко
// сначала добавила return чтобы выйти из этого, но браузер выдаёт ошибку
// загуглила и нашла это чудо { /* ... */ }

const vvod = prompt("Введите число");
if (vvod === null) { /* ... */ }
const age = vvod.trim() === "" ? NaN : +vvod; 
const minAge = 18;
const maxAge = 60;
if (isNaN(age)) {
    alert("Значение, которое Вы ввели, не является числом");
} else if (age < minAge) {
    alert(You don't have access cause your age is ${age}. It's less then ${minAge});
} else if (age > maxAge) {
    alert("Keep calm and look Culture channel");
} else {
    alert("Welcome!");
}
