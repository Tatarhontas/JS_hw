"use strict";
// 1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
//  и выводить в консоль количество гласных и согласных букв в этом слове. 
//  Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants

// для себя: счетчик глас (wovels), счетчик соглас (consonants), нужен цикл чтобы пройтись по всем буквам
// результат должен куда-то падать по глас/соглас - доб.переменную
// как проверить что буква глас/соглас? юзер может использовать любой алфавит
// если брать латиницу => гласные: aeiou (AEIOU)   Y - может быть глас, а может соглас
// проверяем содержит ли слово эти буквы includes() если найдено - true
const str = "JavaScript";
const wordArray = str.split("");     // получила ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
let vowels = 0;
let consonants = 0;
const vowelsChek = "aeiouAEIOU"
const consonantsChek = "bcdfghjklmnpqrstvwxz";
function count(wordArray) { 
  for(let i = 0; i < wordArray.length; i++) {
      if (vowelsChek.includes(wordArray[i])) 
          { vowels++; }                           
      else if (consonantsChek.includes(wordArray[i].toLowerCase())) 
          { consonants++; }            }
      return {vowels, consonants}; 
      } const result = count(wordArray);
      console.log(`В слове ${str} ${vowels} гласных и ${consonants} согласных`);

// 2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
//      шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
//      Направление шифрования задается переменной offset, которая может быть +1 и -1.
//      Например let str = 'AbC'; let offset = -1, result = 'ZaB';
//      Например let str = 'ZzZ'; let offset = 1, result = 'AaA';

// для себя: двигаю букву влево на 1 позицию, переменная - это ключ k = -1
// 2 алфавита: открытый и зашифрованный (номера букв)
// если это номера, значит таблица ASCII (буквы 65-90 верх, 97-122 низ)
// строка - индекс буквы - получить число => метод charCodeAt()
// n - количество букв в алафите (лат.алф- 26 букв)
// сопоставить номер из таблицы с номером в обычном алф. Чтобы А была = 0 (минус 65)
// получили цифры, теперь +65 чтобы на выходе получить буквы
// шифрование: номер в шифр.алф = (номер в откр.алф. + k) % n (результатом взять остаток от деления)
// т.к. я взяла -1, то (0-1) % 26 будет отриц. Чтобы стало положит- доб весь алфавит и А снова станет 0
// доб.цикл чтобы пробежаться по каждой букве 

const str = ("JavaScript");
const wordArray = str.split("");         // получила ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
let offset = -1;
function caesar(wordArray) {
  let result = "";
    for(let i = 0; i < wordArray.length; i++) 
      { let num = wordArray[i].charCodeAt();
        if (num >= 65 && num <= 90) {
            num = ((num - 65 + offset + 26) % 26) + 65;
      } else if (num >= 97 && num <= 122) {
            num = ((num - 97 + offset + 26) % 26) + 97;
      } result += String.fromCharCode(num); }
  return result; }
       console.log(caesar(wordArray));