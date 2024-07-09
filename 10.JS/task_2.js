"use strict";
// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию и количество милисекунд.
//     Функция должна исполнить колбэк строго через переданное количество миллисекунд
//     Пример: delayTwoSeconds(() => console.log('hello'), 2000) // Через 2 секунды в консоли появится слово hello
    
function callback() {
  console.log('Bye');
}

function delay(callback, time) {
  setTimeout(callback, time);
}

delay(callback, 2000);


// 2. Создайте два промиса:
//   - promise1 должен резолвать "After 3 seconds" через 3 секунды
//   - promise2 должен резолвать "After 5 seconds" через 5 секунд
//   Резолвните оба промиса параллельно используя Promise.All двумя способами:
//     1. Обработайте результат Promise.All и Promise.allSettled в .then блоке. Выведите в консоль резолвы обоих промисов по очереди
//     2. Обработайте результат await Promise.All и Promise.allSettled в асинхронной функции в try..catch блоке. 
//         Используйте деструктуризацию, чтобы создать переменные promise1Result и promise2Result с резолвами соответствующих промисов
//         Вывести в консоль результат обоих промисов по очереди

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("After 3 seconds"), 3000); 
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('After 5 seconds'), 5000); 
})  


Promise.all([p1, p2]).then((results) => {
    console.log(results[0]); 
    console.log(results[1]);
})                         // можно ещё добавить catch, если ошибка- то then не выполнится
.catch((error) => {
  console.error(error);
});


Promise.allSettled([p1, p2])
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Promise ${index + 1} resolved:`, result.value);
      } else {
        console.log(`Promise ${index + 1} rejected:`, result.reason);
      }
    });
  });


// сразу оба
async function allResults() {
  try {
    const [promise1Result, promise2Result] = await Promise.all([promise1, promise2]);
    console.log(promise1Result); 
    console.log(promise2Result); 
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Finished working with Promise.all');
  }
  try {
  const resultsAll = await Promise.allSettled([promise1, promise2]);
  resultsAll.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`Promise ${index + 1} resolved:`, result.value);
    } else {
      console.log(`Promise ${index + 1} rejected:`, result.reason);
  } 
});
} finally {
  console.log('Finished working with Promise.allSettled');
}
}

allResults();

// 3. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел. 
//   Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b. 
//   Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке. 
//   Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами, 
//   и обработайте любые ошибки с помощью метода .catch(), а также в блоке try/catch

function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return reject(new Error('тип значения не является числом'));
    }
    resolve(a + b);
  });
}

// проверка валид
sum(5, 10)
  .then(result => {
    console.log(`Сумма с валидными значениями: ${result}`); 
  })
  .catch(error => {
    console.log(`${error}`);
  });

// проверка невалид
  sum(5, '10')
  .then(result => {
    console.log(`Сумма с валидными значениями: ${result}`); 
  })
  .catch(error => {
    console.log(`${error}`);
  });


// или сразу всё
const values = [
  [5, 10],
  ['5', 10],
  [0, -1],
  [7.24, 3.01]
];

function sumV(values) {
  values.forEach(value => {
    sum(value[0], value[1])
      .then(result => {
        console.log(`Сумма значениий (${value[0]}, ${value[1]}) равна ${result}`);
      })
      .catch(error => {
        console.error(`${error} : (${value[0]}, ${value[1]})`);
      });
  });
}
sumV(pairs);

//
async function asySum(values) {
  for (const value of values) {
    try {
      const result = await sum(value[0], value[1]);
      console.log(`async: Сумма значениий (${value[0]}, ${value[1]}) равна ${result}`);
    } catch (error) {
      console.log(`${error} : (${value[0]}, ${value[1]})`);
    }
  }
}

asySum(values);

// 4. С помощью fetch отправьте GET запрос на адрес "https://jsonplaceholder.typicode.com/todos". 
//     Преобразуйте респонс в объект (.json()), выведите в консоль все объекты из респонса, где userId === 1. Решить с помощью try/cath и then (обоими способами)

//GET          [{}, {}, {}...]

const userId = 1; 

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(objects => {
    const result = objects.filter(object => object.userId === userId);
    console.log(result);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });                                       // получила (20) [{…}, {…}, {…}...] -> 0:{userId: 1, id: 1, title: 'delectus aut autem', completed: false} и т.д.

//

async function fetchTodos(userId) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const objects = await response.json();
    const result = objects.filter(object => object.userId === userId);
    console.log(result);
  } catch (error) {
    console.error(`${error}`);
  }
}
fetchTodos(1);                         // получила (20) [{…}, {…}, {…}...] -> 0:{userId: 1, id: 1, title: 'delectus aut autem', completed: false} и т.д.
