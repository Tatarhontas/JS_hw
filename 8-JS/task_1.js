"use strict";
// Task 1.
// Имеется массив объектов (ниже). Ваше задание:
// 1. Используя Object.keys и метод forEach вывести в консоль ключи каждого объекта
// 2. Используя Object.values и метод forEach вывести в консоль значения каждого объекта
// 3. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
//    Перебирать каждый объект циклом for..of вида for(const [key, value] of Object.entries)
// 4. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
//    Перебирать каждый объект циклом for..in
// 5. Создайте объект qa с полями name, age, salary и методом getInfo, который будет возвращать строку вида: 
//    `Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.

 const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];

// 1.
  characters.forEach(character => {
    console.log(Object.keys(character)); 
  });
// или
  characters.forEach(character => console.log(Object.keys(character)));

// 2.
  characters.forEach(character => console.log(Object.values(character)));

// 3. у нас массив с объектами, пробежаться. У каждого объекта перебрать внутри и вывести пары
  characters.forEach(character => {
    for(const [key, value] of Object.entries(character)) {
      console.log(`key = ${key}, value = ${value}`);
     }
    });

// 4.
  characters.forEach(character => {
    for(const key in character) {
      const value = character[key];                 // чтобы соблюсти условие задачи value = ${value}
      console.log(`key = ${key}, value = ${value}`);
     }
    });
  
// 5.     
 const qa = {
   name: 'Boris', 
   age: 28, 
   salary: 50000,
   method: function getInfo() {
   console.log(`Hello, my name is ${this.name}, i'm ${this.age} and my salary is ${this.salary}`);
   }
 }
 qa.method();
   