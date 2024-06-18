"use strict";
// 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
//   чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
//   Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.

// для себя:
// const str = 'I am the best AQA ever!';
// const letters = str.toLowerCase().split('');
// const numbers = letters.map(newStr).join('');         // в методе функция
// function count(str, letter) {
//   return str.toLowerCase().split(letter).length - 1;  // длина всегда больше на 1, чем индексов
// }
// function newStr(letter) {                             // в функции newStr другая функция count
//   if (letter >= 'a' && letter <= 'z') {               // на цифры менять буду только буквы
//     return count(str, letter)
//   }
//   return letter;
// }
// console.log(numbers);

const str = 'I am the best AQA ever!';
const letters = str.toLowerCase().split('');     
const numbers = letters.map(letter => {                    
    if (letter >= 'a' && letter <= 'z') {                  
      return str.toLowerCase().split(letter).length - 1;   
    }
    return letter;
  }).join('');
console.log(numbers);  // получим 1 31 214 1412 313 4141!
  
// 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
//   Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле. 

const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
const sum = prices.reduce((accum, cur) => accum + cur, 0);
const averagePrice = sum / prices.length;
console.log(`Итого: ${sum} $, средняя цена товара ${averagePrice} $`);

// 3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
//   Массив должен быть отсортирован по возврастанию количества гласных букв в слове.

const arr = ['ой', 'Это', 'Большой-пребольшой', 'массив', 'следующих', 'слов', 'ёлка', 'яркая'];
function count(word) {
  const vowels = 'аеёиоуыэюя'; 
  return Array.from(word.toLowerCase()).filter(letter => vowels.includes(letter)).length;
}
  const sorted = arr.sort((a, b) => {
  return count(a) - count(b);
});
console.log(sorted); 

// 4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
//   Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
//   Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
//   Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 

// const arr_01 = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]];
// const arr_02 = arr_01.flat(Infinity);                             // на все уровни
// const arr_03 = arr_02.reduce((accum, curr) => (curr === '(' ? accum + 1 : curr === ')' ? accum - 1 : accum), 0);
// console.log(arr_03 === 0 ? 'скобки сбалансированы' : 'скобки не сбалансированы');

// выведу сам массив:
const arr_01 = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]];
const arr_02 = arr_01.flat(Infinity);  
function balance(arr_02) {
  const result = [];
  let accum = 0;
  arr_02.forEach(bracket => {
      if (bracket === '(') {
          accum++;
      } else if (bracket === ')' && accum > 0) {     // >0 значит в аккуме уже есть несбалансированные
          result.push('(', ')');
          accum--;
      }
  });
  return result; 
}
console.log(balance(arr_02));

//
const arr_04 = ['(', '(', '(', '(', ')', '('];
const arr_05 = arr_04.flat(Infinity);
function balanced(arr) {
  const result = [];
  let balance = 0;
  arr.forEach(bracket => {
      if (bracket === '(') {
          balance++;
      } else if (bracket === ')' && balance > 0) {     // >0 значит в аккуме уже есть несбалансированные
          result.push('(', ')');
          balance--;
      }
  });
 
while (balance > 0) {
  result.push('(', ')');
  balance--;
}
return result;
}
console.log(balanced(arr_05));



