"use strict";
// 1. Создайте функцию getOnlyNumbers, принимающую на вход массив arrayOnAnyValues
// 2. Внутри функции создайте переменную result, в которую упадет результат работы метода .filter()
// 3. В метод filter передайте callback функцию, проверяющую является ли значение числом.
// 4. В переменной result должны остаться только те элементы массива arrayOnAnyValues, которые являются числами ('2' - не число)
// 5. Вернуть result из функции
// 6. Проверить с массивом const arr = [NaN, 1, true, 5, "hello", undefined, 15.5, {}, []];

// для себя:
// const arr = [NaN, 1, true, 5, "hello", undefined, 15.5, {}, []];
// function getOnlyNumbers(arrayOnAnyValues) {                                               // локал переменная для arr
//     let result = [];
//     for (let i = 0; i < arrayOnAnyValues.length; i++) {
//         if (typeof arrayOnAnyValues[i] === 'number' && !isNaN(arrayOnAnyValues[i])) {     // if в коллбэк - одна функция, фильтр - другая
//             result.push(arrayOnAnyValues[i]);
//         }
//     }
//     return result;
// }
// console.log(getOnlyNumbers(arr));

// callback- функция, передаваемая в качестве аргумента другой функции:  

// const arr = [NaN, 1, true, 5, "hello", undefined, 15.5, {}, []];
// function getOnlyNumbers(arrayOnAnyValues) {                        // первая ф             arrayOnAnyValues - локал arr (ссылка)
//     let result = arrayOnAnyValues.filter(numbers);                 // внутри метода вторая function numbers
//     return result;
// }
//     function numbers(values) {                                     // вторая ф             values - локал arr (ссылка)
//     return typeof values === 'number' && !isNaN(values);
//     }
// console.log(getOnlyNumbers(arr));

// const arr = [NaN, 1, true, 5, "hello", undefined, 15.5, {}, []];
// function getOnlyNumbers(arrayOnAnyValues) {                        // первая ф                arrayOnAnyValues - локал arr (ссылка)
//     let result = arrayOnAnyValues.filter(values =>                 // внутри метода вторая function numbers
//     typeof values === 'number' && !isNaN(values));
//     return result;
//     }
// console.log(getOnlyNumbers(arr));


const arr = [NaN, 1, true, 5, "hello", undefined, 15.5, {}, []];
const getOnlyNumbers = arr.filter(values => typeof values === 'number' && !isNaN(values));
console.log(getOnlyNumbers);

