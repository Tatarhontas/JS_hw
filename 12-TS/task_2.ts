// 1. Напишите функцию, реализующую методы массивов map. Функции принимают на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]

type Callback<T, C> = (element: T, index: number, array: T[]) => C;

function map<T, C>(array: T[], callback: Callback<T, C>): C[] {
    const result: C[] = [];
    array.forEach((element, index) => {
        result.push(callback(element, index, array));
    });
    return result;
}
const result = map([1, 2, 3, 4, 5], (element, index) => element * index);
console.log(result); 


// 2. Напишите дженерик функцию generateObject, которая принимает массив пар [string, T] 
//   и возвращает объект, где каждая пара ключ-значение из массива превращается в соответствующую пару ключ-значение в объекте. 
//   В случае если ключи повторяются, значение в объекте должно быть последним из встречающихся.

//   Требования:
//     - Функция должна быть дженерик и работать с любыми типами значений.
//     - Функция должна корректно обрабатывать массив пар, включая случаи, когда ключи повторяются.

//   Пример:
//   const result = generateObject([
//   ["1", 1],
//   ["2", 2],
//   ["3", 3],
//   ["4", 4],
//   ["4", 5], // повторяющийся ключ, значит это значение должно быть в результирующем объекте
// ]);

// console.log(result); //{ '1': 1, '2': 2, '3': 3, '4': 5 }

type ArrayOfPairs<T> = [string, T][];
type ObjectOfPairs<T> = {[key: string]: T};

function generateObject<T>(pairs: ArrayOfPairs<T>): ObjectOfPairs<T> {
    return Object.fromEntries(pairs);
}

const result_2 = generateObject([
    ["1", 1],
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["4", 5], 
]);

console.log(result_2);
