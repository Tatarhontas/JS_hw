// 1. Создайте дженерик функцию getFirstElement, которая принимает массив элементов типа T, и возвращает первый элемент (типа T).

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

// 2. Создайте интерфейс Person, абстрактный класс Employee, который реализует интерфейс Person, и конкретные классы Manager и Developer.
//   - Интерфейс Person должен содержать:
//       Стринговые поля: name, surname, experienceYears
//       Метод, возвращающий строку: getDetails().
//   - Абстрактный класс Employee должен:
//       Реализовывать интерфейс Person.
//       Содержать защищенное поле: salary, не передающееся в конструктор (по дефолту 0)
//       Содержать защищенный абстрактный метод: calculateSalary().,
//         который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
  
//   - Конкретные классы Manager и Developer должны:
//       Наследоваться от Employee.
//       Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
//       Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
//       Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
//       Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
//       Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
//         'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)

interface Person {
    getDetails(): string;
}

abstract class Employee implements Person {
    protected salary: number = 0;
    abstract getDetails(): string;
    protected abstract calculateSalary(): void; // не намбер, потому что значение уходит в сэлари

    constructor(public name: string, public surname: string, public experienceYears: number) {
        this.calculateSalary();
    }
}

class Manager extends Employee {
    constructor(name: string, surname: string, experienceYears: number, public preferred: 'scrum' | 'kanban') {
        super(name, surname, experienceYears);
    }
    protected calculateSalary(): void {             // не намбер, потому что значение уходит в сэлари
        this.salary = this.experienceYears * 500;   // вычисляю не для калькулятора, а для сэлари
    }
    getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am a manager with ${this.experienceYears} years of experience in ${this.preferred} and ${this.salary} salary.`;
    }
}

class Developer extends Employee {
   constructor(name: string, surname: string, experienceYears: number, public programmingLanguage: 'js' | 'ts' | 'java' | 'python') {
        super(name, surname, experienceYears);
    }
    protected calculateSalary(): void {             // не намбер, потому что значение уходит в сэлари
        this.salary = this.experienceYears * 1000;  // вычисляю не для калькулятора, а для сэлари
    }
    getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am a software developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.salary} salary.`;
    }
}
const manager = new Manager('Bob', 'TSov', 5, 'scrum');
console.log(manager.getDetails())
const developer = new Developer('Elena', 'TSovna', 6, 'ts');
console.log(developer.getDetails())
