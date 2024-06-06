"use strict";
// 1. Создайте функцию getEmployeeInfo()
// 2. В функции создайте массив имен сотрудников 5шт (Имена придумать самим)
// 3. В функции создайте массив зарплат сотрудников 5 шт(цифры придумать самим)
// 4. Функция должна принимать 1 аргумент - имя сотрудника
// 5. Функция должна возвращать новый массив, где первый элемент - имя сотрудника, второй - его зарплата
// 6. Для поиска ответа функции нужно найти индекс сотрудника в массиве имен. Зарплату взять с ТЕМ ЖЕ индексом что и имя
// 7. Для возврата из функции создайте массив, методом .push поместите в него имя и зарплату, и через return верните созданный массив
// 8. Если такое имя сотрудника в массиве не найдется - вернуть null

// найти indexOf
// новый массив - не изменяем существующий, а создаем новый
// Зарплату взять с ТЕМ ЖЕ индексом - внутри з/п индекс name (они синхронизированы)

function getEmployeeInfo(name) {
    const allNames = ['Алексей', 'Марина', 'Никита', 'Оксана', 'Владислав'];       //не забывай ''
    const salaries = [32000, 50500, 71000, 83500, 100200];
        if (allNames.indexOf(name) >= 0) {
        const salary = salaries[allNames.indexOf(name)];
        const result = [];
        result.push(name, salary);
        return result; 
} else {
return null;
}
}
console.log(getEmployeeInfo('Алексей'));

 

