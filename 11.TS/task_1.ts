"use strict";
// 1. Создайте interface ItEmployee
// 2. В интерфейсе ItEmployee сделайте поле name которое может быть только string
// 3. В интерфейсе ItEmployee сделайте поле surname которое может быть только string
// 4. В интерфейсе ItEmployee сделайте поле salary которое может быть только number и доступно только для чтения
// 5. Создайте тип данных Grade для стринговой переменной, которая может принимать значения: junior, middle, senior, lead
// 6. В интерфейсе ItEmployee сделайте поле grade типа Grade
// 7. Создайте enum OCCUPATION, который будет представлять профессии в айти вида DEVELOPER = "Developer" и так далее
// 8. В интерфейсе ItEmployee сделайте поле occupation типа OCCUPATION
// 9. Создайте интерфейс IAddress, предствляющий объект с полями country, street, house, flat
// 10. В интерфейсе ItEmployee сделайте необязательное поле address типа IAddress
// 11. В интерфейсе ItEmployee сделайте projectNames, типа массив строк (названий проектов)


type Grade = 'junior' | 'middle' | 'senior' | 'lead';

interface ItEmployee {
    name: string;
    surname: string;
    readonly salary: number;
    grade: Grade;
    occupation: OCCUPATION;
    address?: IAddress;
    projectNames: string[];
}

enum OCCUPATION {
    QA = 'QA Инженер',
    DEVELOPER = 'Developer',
    SYSADMIN = 'Системный администратор',
}


interface IAddress {
    country: string;
    street: string;
    house: number | string;
    flat: number;
}

// проверка (специально пропущу адрес)
const employee1: ItEmployee = {
    name: 'Иван',
    surname: 'Иванов',
    salary: 3000,
    grade: 'middle',
    occupation: OCCUPATION.QA,
    projectNames: ['обычный проект', 'замечательный проект', 'сложный проект']
};
console.log(employee1);
