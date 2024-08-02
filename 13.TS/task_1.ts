// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee

interface IEmploye {
    name: string;
    salari: number;
    isManager: boolean;
 }

const Qa: IEmploye = {
    name: "Janna",
    salari: 500,
    isManager: false,
}

// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
// 4. Создайте тип UserType из объекта QA (используйте typeof)
// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
// 9. Создайте тип, для массива объектов, где в ключах могут быть строки, в значениях number, string или boolean

type EmployeeKeys = keyof IEmploye;
type QaKeys = keyof (typeof Qa);
type UserType = typeof Qa 
type optional = Partial<IEmploye>;
type iEnameSalar = Pick <IEmploye, ("name" | "salari")>;
type iEnotManager = Omit<IEmploye, 'isManager'>;
type iEreadonly = Readonly <IEmploye>;
type arrOfObj = {[key: string]:string | number | boolean}[];
