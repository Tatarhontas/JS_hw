"use strict";
// 5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры.
//   Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9.
//   После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

let number = +prompt("");                                // сразу ЧИСЛО
function recursion(number) {
  if (number < 10) {                                     // выход
    return number;
  }
  const arr = number.toString().split(""); // ['1', '9']
  let accum = 0;                                         // сумма (накапливаю результат) initialValue
  for (let i = 0; i < arr.length; i++) {                 // бегаем по элементам
    let item = arr[i];                                   // элемент массива
    accum = accum + +item;                               // + т.к. arr строка изначально, а нам нужно ЧИСЛО
  }
  return recursion(accum);
}
console.log(recursion(number));

// упрощаю
let number = +prompt("");
function recursion(number) {                              // const recursion = number =>
  const sum = number.toString().split("").reduce((accum, item) => accum + +item, 0);
  return sum < 10 ? sum : recursion(sum);
}
console.log(recursion(number));

// решила добить :D
let number = +prompt("");
const recursion = (number) => number < 10 ? number : recursion(number.toString().split("").reduce((accum, item) => accum + +item, 0));
console.log(recursion(number));

// 6*. Написать функцию, которая принимает на вход строку с текстом, и заменяет каждую пару идентичных букв на одну следующую в алфавите,
//     и так пока в тексте не останется двух одинаковых букв стоящих рядом (через пробел и другой знак препинания можно)
//     Пример: aabc => bbc => cc => d         всё в нижнем регистре

let str = "a A 12.bz, Z ";
function replace(str) {
  let result = str.replace(/[^a-zA-Z]/g, "").toLowerCase().split("");   //[оставляю только буквы в ниж рег]
  let lastLength;                                                       //чтобы сравнивать длину в вайле

  function replaceNext(words) {             // меняю буквы
    let accum = [];
    for (let i = 0; i < words.length; i++) {   
      if (i + 1 < words.length && words[i] === words[i + 1]) {     // сравниваем и в пределах массива
        let nextChar = words[i] === "z" ? "a" : String.fromCharCode(words[i].charCodeAt(0) + 1);     // чарк код текущ+1=получаю следующий
        accum.push(nextChar);
        i++;                                // не забывай пропускать (пара же- проверили уже)
      } else {
        accum.push(words[i]);
      }
    }
    return accum;
  }

  do {
    lastLength = result.length;             // текущая
    result = replaceNext(result);           // обновили
  } while (lastLength !== result.length);   // пока длина мееняется - чтобы из пары в дальше шёл

  return result.join("");                   // массив обратно в строку
}

console.log(replace(str)); 
