// 1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
//   Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
//   Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo. 
//   Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
//   Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним 

// interface IEmployee {
//   name: string;
//   surname: string;
//   readonly salary: number;
//   address?: IAddress;         // необяз
// }

// interface IAddress {
//   country: string;
//   street: string;
//   house: number | string;
//   flat: number;
// }

// interface ItEmployee extends IEmployee {          // просто добавлю недостающее
//   occupation: string;
//   grade: 'junior' | 'middle' | 'senior' | 'lead';
//   projectNames: string[];
// }

// enum OCCUPATION {
//   QA = 'QA Инженер',
//   DEVELOPER = 'Developer',
//   SYSADMIN = 'Системный администратор',
// }

// function getEmployeeInfo(employee: IEmployee | ItEmployee) {
//   if (isItEmployee(employee)) {  // если ItEmployee, то вывожу
//     console.log(`Имя: ${employee.name}, Фамилия: ${employee.surname}, Зарплата: ${employee.salary}, Должность: ${employee.occupation}, Уровень: ${employee.grade}, Проекты: ${employee.projectNames}`);
//   } else {  // если IEmployee
//     console.log(`Имя: ${employee.name}, Фамилия: ${employee.surname}, Зарплата: ${employee.salary}`);
//   }
// }

// function isItEmployee(employee: IEmployee | ItEmployee): employee is ItEmployee {
//   return (employee as ItEmployee).occupation !== undefined;
// } // projectNames не добавляю, хватит и одного occupation

// // проверка:
// const itEmployee1: ItEmployee = {
//   name: 'Василий',
//   surname: 'Петров',
//   salary: 123456,
//   occupation: 'QA Инженер',
//   grade: 'junior',
//   projectNames: ['Проект А', ' Проект Б'],
// };
// getEmployeeInfo(itEmployee1);


// 2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа. 
//   Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean. 
//   Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве. 

// Определение типов для входных данных
type InputObj = Record<string, Value>;
type Value = string | number | boolean;
type Input = InputObj | InputObj[];     // на вход  {} или [ {}, {}... ]

interface TypeCounts {
  string: number;
  number: number;
  boolean: number;
}

function count(input: Input): TypeCounts {
  const typeCounts: TypeCounts = {
    string: 0,
    number: 0,
    boolean: 0
  };

  function countInObj(obj: InputObj) {
    for (let key in obj) {
      const value = obj[key];
      const valueType: keyof TypeCounts = typeof value as keyof TypeCounts;
      if (valueType in typeCounts) {
        typeCounts[valueType]++;
      }
    }
  }

  // массив или объект?
  if (Array.isArray(input)) {
    input.forEach(obj => countInObj(obj));
  } else {
    countInObj(input as InputObj);
  }
  return typeCounts;
}

// проверка:
const obj: InputObj = {
  name: 'Надежда',
  age: 27,
  having_a_child: true
};

const arrayOfObj: InputObj[] = [
  { name: 'Yaroslav', age: 25, having_a_child: false },
  { name: 'Mary', age: 28, having_a_child: false },
  { name: 'Timofey', age: 28, having_a_child: true }
];

console.log(count(obj)); 
console.log(count(arrayOfObj)); 


// 3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк), 
//     который будет использоваться для проверки каждого числа на соответствие требованиям. 
//     Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов. 
//     Пример функции:
//     const numbers = [1, -5, 2, 3, 4, 133];
//     filter(numbers, (n) => n > 3); // [4, 133]
//     filter(numbers, (n) => n % 2 == 0); // [2, 4]
//     Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.

type Predicate = (n: number) => boolean;  // алиас принял число
type NumArray = number[];

function filter(numbers: NumArray, predicate: Predicate): NumArray {
  return numbers.filter(predicate);
}

// проверка:
const numbers = [1, -5, 2, 3, 4, 133];
const more3Num = filter(numbers, (n) => n > 3); 
const evenNum = filter(numbers, (n) => n % 2 == 0); 

console.log(more3Num); 
console.log(evenNum); 


