"use strict";
// 1. task_1 через switch
// т.к. у меня был isNaN (возвращает булевый тип). Нужно поместить в switch (true или false)
// если age не число => isNaN(age) вернёт true
// switch (true) сравнивается с case isNaN, true свитч будет === true в isNaN, и выполняется код внутри isNaN
// если age число => isNaN вернёт false и свитч пойдёт дальше

const vvod = prompt("Введите число").trim();
const age = +vvod;
const minAge = 18;
const maxAge = 60;
switch (true) {
  case !vvod || isNaN(age):
    console.log("Недопустимое значение");
    break;
  case age < minAge:
    console.log(`You don't have access cause your age is ${age}. It's less then ${minAge}`);
    break;
  case age > maxAge:
    console.log("Keep calm and look Culture channel");
    break;
  default:
    console.log("Welcome");
}

// 2. task 1 чтобы проверялся тип данных и кидалась ошибка
// Оказывается я уже сделала это в task_1, но isNaN напрямую не проверяет тип, он пытается преобразовать в число
// однако, перед vvod я поставила + 
// учитывая это, age всегда будет тип number: либо вернёт число, либо NaN (у которого тоже тип number несмотря на то что он означает не число). 
// typeof age === "number", typeof NaN === "number"
// поэтому если добавить typeof то смысла нет в моём случае
// заменю + на Number чтобы было явно видно что это избыточно
// typeof age !== "number" никогда не вернёт true

const vvod = prompt("Введите число").trim();
const age = Number(vvod);
const minAge = 18;
const maxAge = 60;
if(!vvod || isNaN(age) || typeof age !== "number") {
    console.log("Недопустимое значение");
} else {
  if (age < minAge) {
  console.log(`You don't have access cause your age is ${age}. It's less then ${minAge}`);
} else if (age > maxAge) {
  console.log("Keep calm and look Culture channel");
} else {
  console.log("Welcome!");
}
}

//3. Преобразовать Task 2.2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, преобразовываясь в number
// внезапно в моём task 2.2 это уже есть


