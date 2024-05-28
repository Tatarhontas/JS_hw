"use strict";

// - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
// => добавляем точку перед It's и после then ставим minAge
// - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !" => удаляем пробел
// - Если "age" больше либо равно maxAge, вывести в консоль "Keep calm and look Culture channel"
// - Иначе выводите "Technical work"

// этого в задании нет, но я хочу сделать так, чтобы юзер получил сообщение, если будет вводить не число 
// на выходе будет NaN, а он не < и не > и не = числу, будет false и ни одно условие else if не выполнится, перейдёт к else
// => использую ещё одно условие isNaN: значение юзера = не число? да/нет
// если юзер сразу нажмёт на ок или введёт одни пробелы- хочу чтобы он тоже понял проблему


// можно убрать блок Technical work, потому что все диапазоны итак покрыты, этот блок недостижим
const vvod = prompt("Введите число").trim()
const age = +vvod;
const minAge = 18;
const maxAge = 60;
if(!vvod || isNaN(age)) {
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


// для себя:
// в else if работаем с числами, поэтому нужно получить число
// + или Number перед vvod преобразует значение в тип number. если можно преобразовать, то преобразуется
// ситуации, которые приводят к неудачному преобразованию строки в число с помощью +/Number (неудачно- получаем NaN):
// "текст"; "123abc"; "123%"; с пробелом "12 3"; "NaN" (вернёт NaN); дробь с запятой "3,14" (через точку-удачно)
// 3. +/Number преобразовалось- работаем с else if, не преобразовалось- получаем NaN
// => если после этого нет isNaN, то юзер не поймёт свою ошибку. если есть- выполнится консоль и поймёт
// добавила переменную vvod и метод trim() (метод применяется к строкам, а не к числам (удаляет пре/постфиксные пробелы) поэтому убрала изначальный + в промпте)

// валидация. когда isNaN получает аргумент, пытается преобразовать его в число
// isNaN("текст")   // "текст" = не число? => да - консоль
// isNaN("123")     // строка "123" = не число? да, НО можно преобразовать в число 123 поэтому => нет - пойдёт дальше
// isNaN(123)       // 123 = не число? => нет, это число - пойдёт дальше
// isNaN(NaN)       // NaN = не число? => да - консоль
// isNaN(undefined) // undefined = не число? => (не может быть преобразовано в число) => да - консоль

// также есть строгая Number.isNaN- проверяет чтобы конкретно было написано NaN, а не просто когда не является числом
// Number.isNaN("текст") // "текст" = NaN? => нет
// Number.isNaN(NaN)     // NaN = NaN => да







