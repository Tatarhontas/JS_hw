"use strict";
// 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null

// includes (один массив содержит другой массив)
// цикл чтобы пробежаться по всем моим пиццам
// если не нашёл- пушить нечего -пустой массив. Просто пустой массив[]- тру. Длина пустого массива- 0 - фолс
// проверить пуст ли он (если есть длина- то не пустой)
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas = ['Peperoni', 'Margherita', 'Pizza al Pesto', 'Caprichosa', 'Diablo', '4 cheeses', 'Hawai'];
const lowerArrCompetitorPizzas = [];
const lowerArrMyPizzas = [];
for (const element of competitorPizzas) {
    lowerArrCompetitorPizzas.push(element.toLowerCase());
}
for (const element of myPizzas) {
    lowerArrMyPizzas.push(element.toLowerCase());
}
  function uniqPizzas(lowerArrMyPizzas) {
    const result = [];
    for(let i = 0; i < lowerArrMyPizzas.length; i++) {
      if (!lowerArrCompetitorPizzas.includes(lowerArrMyPizzas[i])) {
      result.push(myPizzas[i]);
      }
    } return result.length ? result : null;
} console.log(uniqPizzas(lowerArrMyPizzas));
  
// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
//   Если таких слов несколько - выводит их все.

// предложение - массив по словам - длинна слова самая большая - сравнить одинаковые - добавить все одинаковые
const str = 'Слова разделенные только пробелами разделенные';
const words = str.split(' ');                           // получили массив []      
function wordArray (words) {
    let massivMaxWords = [];
    let dlinaMaxWord = 0;                               // сюда падает длина текущего макс.слова (у длины ЧИСЛО)
    for (let i = 0; i < words.length; i++) {            // бегаем по словам
        if (words[i].length > dlinaMaxWord) {           // длина текущего слова больше чем длина предыдущего (сравнивай ЧИСЛА!)
            dlinaMaxWord = words[i].length;             // положили в переменную макс слово, чтобы потом с НИМ сравнивать
            massivMaxWords = [words[i]];                // положили в массив макс слово
        } else if (words[i].length === dlinaMaxWord) {  // сравниваем найденное слово с предыдущим 
        massivMaxWords.push(words[i]);                  // если они одинаковые- пушим в массив и затем фор начинает снова искать
    } 
} return massivMaxWords;                                // ЗАПОМНИ! не пихай return в цикл, иначе один раз проверит и остановится
}
   console.log(wordArray(words));

// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты 
// и возвращает массив только с уникальными значениями.

// сравнить числа, если ===, удалить
const numbers = [1, 2, 3, 1, 1, 3, 2, 4, 5, 5];
function delDuplicates (numbers) {
      numbers.sort(function(x, y) {                     // если не поменять местами, то удалит только рядом стоящие (1, 1)
        return x - y;                                   // чтобы по порядку от начала 1 2 3 4 5 (обратно y-x)
      });
        for (let i = numbers.length - 1; i > 0; i--) {  // в обратном порядке цикл, иначе пропускает индексы 
        if (numbers[i] === numbers[i - 1]) {            // (найдёт-удалит, а у следующего индекс станет как у удаленного, 
        numbers.splice(i, 1);                           // а цикл пойдёт дальше со СЛЕДУЮЩЕГО индекса)
        }
       } 
} delDuplicates(numbers);
console.log(numbers);

// увидела про set
const numbers = [1, 2, 3, 1, 1, 3, 2, 4, 5, 5];
const delDuplicates = [... new Set(numbers)];
console.log(delDuplicates);


// 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

// переставить наоборот и сравнить
const str = 'шабаШ';
const word1 = str.toLowerCase();             // в ниж рег
let word2 = '';
function word1Naoborot (str) {
for (let i = str.length - 1; i >= 0; i--) {  // начинаю в обратном порядке
     word2 += str[i];                        // кладу каждую буковку
}   return word2;
} 
function palindrom (str) {
    if (word1 === word1Naoborot (word1)) {  // сравниваю word1 и word2 
    console.log('это слово палиндром');
} else {
    console.log('это слово не палиндром');
} 
} palindrom (str);
