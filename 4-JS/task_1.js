"use strict";

// - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
// => добавляем точку перед It's и после then ставим age_2
// - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !" => удаляем пробел
// - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel"
// - Иначе выводите "Technical work"

// этого в задании нет, но я хочу сделать так, чтобы юзер получил сообщение, если будет вводить не число 
// потому что если не сделать этого, он получит Technical work и не будет понимать что сделал что-то не так 
// на выходе будет NaN, а он не < и не > и не = числу, будет false и ни одно условие else if не выполнится, перейдёт к else
// => использую ещё одно условие isNaN: значение юзера = не число? да/нет
// если юзер сразу нажмёт на ок/отмену или введёт одни пробелы, то получит "You don't have access cause your age is 0"
// => не хочу так, хочу чтобы он тоже понял проблему, поэтому добавила тернарный оператор и метод trim
// чтобы age в таких случаях присваивался NaN и юзер получал "Значение, которое Вы ввели, не является числом"

// Вариант 1 (когда ровно 60 лет и ЕЩЁ РАНО "Keep calm"
// => можно убрать блок Technical work, потому что все диапазоны итак покрыты, этот блок недостижим
const vvod = prompt("Введите число");
const age = (vvod === null || vvod.trim() === "") ? NaN : +vvod;
const minAge = 18;
const maxAge = 60;
if(isNaN(age)) {
    console.log("Значение, которое Вы ввели, не является числом");
} else if (age < minAge) {
  console.log(`You don't have access cause your age is ${age}. It's less then ${minAge}`);
} else if (age > maxAge) {
  console.log("Keep calm and look Culture channel");
} else {
    console.log("Welcome!");
}

// Вариант 2 (когда ровно 60 лет и УЖЕ НАДО "Keep calm". Тоже можно убрать блок Technical work)
const vvod = prompt("Введите число");
const age = (vvod === null || vvod.trim() === "") ? NaN : +vvod;
const minAge = 18;
const maxAge = 60;
if(isNaN(age)) {
    console.log("Значение, которое Вы ввели, не является числом");
} else if (age < minAge) {
  console.log(`You don't have access cause your age is ${age}. It's less then ${minAge}`);
} else if (age >= maxAge) {
  console.log("Keep calm and look Culture channel");
} else {
    console.log("Welcome!");
}

// Вариант 3. (оставляем всё как в задании, когда = 60 уходит в Technical work, оставляем этот блок)
const vvod = prompt("Введите число");
const age = (vvod === null || vvod.trim() === "") ? NaN : +vvod;
const minAge = 18; 
const maxAge = 60; 
if(isNaN(age)) { 
  console.log("Значение, которое Вы ввели, не является числом"); 
} else if (age < minAge) { 
  console.log(`You don't have access cause your age is ${age}. It's less then ${minAge}`); 
} else if (age >= minAge && age < maxAge) { 
  console.log("Welcome!"); 
} else if (age > maxAge) { 
  console.log("Keep calm and look Culture channel"); 
} else { 
  console.log("Technical work"); 
}

// для себя: (изначально age был +промт, позже добавила доп.переменную без +)
// 1. в else if работаем с числами, поэтому нужно получить число
// + или Number перед vvod(старое prompt) преобразует значение в тип number. если можно преобразовать, то преобразуется
// ситуации, которые приводят к неудачному преобразованию строки в число с помощью +/Number (неудачно- получаем NaN):
// "текст"; "123abc"; "123%"; с пробелом "12 3"; "NaN" (вернёт NaN); дробь с запятой "3,14" (через точку-удачно)
// 3. +/Number преобразовалось- работаем с else if, не преобразовалось- получаем NaN
// => если после этого нет isNaN, то юзер не поймёт свою ошибку, получит Technical work. если есть- выполнится консоль и поймёт

// валидация. когда isNaN получает аргумент, пытается преобразовать его в число
// isNaN("текст")   // "текст" = не число? => да - консоль
// isNaN("123")     // строка "123" = не число? да, НО можно преобразовать в число 123 поэтому => нет - пойдёт дальше
// isNaN(123)       // 123 = не число? => нет, это число - пойдёт дальше
// isNaN(NaN)       // NaN = не число? => да - консоль
// isNaN(undefined) // undefined = не число? => (не может быть преобразовано в число) => да - консоль

// также есть строгая Number.isNaN- проверяет чтобы конкретно было написано NaN, а не просто когда не является числом
// Number.isNaN("текст") // "текст" = NaN? => нет
// Number.isNaN(NaN)     // NaN = NaN => да

// изначально сразу поставила const age = +(prompt("Введите число"))
// также проверила: (сначала получим NaN, но т.к. преобразует, на выходе получаем 0)
// пустая строка (не ввёл ничего, нажал Ок)- Number "" => 0
// юзер нажал Отмена- Number "null" => 0
// из одних пробелов- тоже, что и пустая строка => 0
// пустая строка/ ок или отмена (null) - оба случая получаем NaN 
// не хочу чтобы дальше преобразовывал в число 0 и выводил You don't have.... хочу чтобы считал как NaN и выводил юзеру ошибку
// пришлось добавить тернарный оператор, чтобы не выводились нули в You don't have access cause your age is 0   <= не хочу так :)
// условие ? выражение1 : выражение2; условие = true => выражение 1, если false - выражение 2
// const age = +(prompt("Введите число")) ? +(prompt("Введите число")) : NaN => то что ввёл юзер ? число или NaN
// проверила-prompt вызывается дважды, что не есть хорошо
// добавила переменную vvod и метод trim() (метод применяется к строкам, а не к числам (удаляет пре/постфиксные пробелы) поэтому убрала изначальный + в промпте)
// проверила- ввод из пробелов и нажатие на ок обрабатывает как я хочу, а нажатие на отмену- нет
// добавила vvod === null || vvod.trim() === ""



