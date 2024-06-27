"use strict";
// Task 2. Перед вами структура компании, и ниже представлены задания, относящиеся к ней. 
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 сотрудников)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприяие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

// для себя:
// массив- 3 объекта 
// в первом  Предприятии 1 id в нем массив departments [с {Об. 2,3,4 id} ]
// во втором Предприятии 5 id в нем массив departments [с {Об. 6,7,8 id} ]
// в третьем Предприятии 9 id в нем массив departments [с {Об. 10    id} ]

// вывести 3 name из массива enterprise
// enterprises.forEach(enterprise => console.log(enterprise.name));        -> Предприятие 1 Предприятие 2 Предприятие 3
// for (const enterprise of enterprises) { console.log(enterprise.name) ;  -> Предприятие 1 Предприятие 2 Предприятие 3

const getEnterprisesInfo = enterprises => {
  enterprises.forEach(enterprise => {
    console.log(`${enterprise.name} ${countEmployees(sumCount(enterprise.departments))}`);
      enterprise.departments.forEach(department => {
       console.log(`${department.name} ${countEmployees(department.employees_count)}`);  
      })
  });
}
getEnterprisesInfo(enterprises);


function countEmployees(count) {                                                  // кол-во сотр в Отделе
  count = +count; 
  if (count === 0) {
    return '(нет сотрудников)';
  } else if (count === 1) {
    return `(${count} сотрудник)`;
  } else if (count >= 2 && count <= 4) {
    return `(${count} сотрудника)`;
  }
  return `(${count} сотрудников)`;
}


function sumCount(departments) {                                                   // кол-во сотр в Предприятии
  return departments.reduce((accum, curr) => accum + +curr.employees_count, 0);
}

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

function getEnterpriseName(enterprises, value) {
  for (const enterprise of enterprises) {
      if (enterprise.departments.find(department => department.id === value || department.name === value)) { // ищу отдел по условию
        return `${enterprise.name}`; 
      }
    }
     return 'Отдел не найден'; 
}
console.log(getEnterpriseName(enterprises, 2));
console.log(getEnterpriseName(enterprises, "Отдел тестирования"));

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// Пример:
// addEnterprise("Название нового предприятия")

function maxID(enterprises) {
  const enterpriseID = enterprises.map(enterprise => enterprise.id);
  const departmentID = enterprises.flatMap(enterprise => 
    enterprise.departments.map(department => department.id)
  );
    const allID = [...enterpriseID, ...departmentID];
    return Math.max(...allID);
}
console.log(maxID(enterprises));


  function addEnterprise(enterprises, name) {   
    const newEnterprise = {
      id : maxID(enterprises) + 1,
      name,
      departments: []      
    }
    enterprises.push(newEnterprise);
    return enterprises;
  }
  console.log(addEnterprise(enterprises, "Предприятие 4")); // { id: 11, name: 'Предприятие 4', departments: [] }

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
// Пример:
// addDepartment(1, "Название нового отдела")
// буду добавлять отдел в предприятие, созданное в 3 задании

function findEnterprise(id) {
  return enterprises.find(enterprise => enterprise.id === id);
}

  function addDepartment(id, name) { 
    if(findEnterprise(id)) {
      const newDepartment = {
        id : maxID(enterprises) + 1,
        name,
        employees_count: 13      
      }
       findEnterprise(id).departments.push(newDepartment); 
       return enterprises;
    } 
      return 'Предприятие с таким id не найдено';
  }
  console.log(addDepartment(11, "Отдел Отдыха"));

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
// Пример:
// editEnterprise(1, "Новое название предприятия")

function editEnterprise(id, newEntName) {
  if(!findEnterprise(id)) {
    return 'Предприятие с таким id не найдено';
  }
    findEnterprise(id).name = newEntName;
  return enterprises;
}
console.log(editEnterprise(11, "Самое лучшее Предприятие"));

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
// Пример:
// editDepartment(7, "Новое название отдела")

function findDepartment(enterprises, value) {
  for (const enterprise of enterprises) { 
    const department = enterprise.departments.find(dep => dep.id === value || dep.name === value);
      if (department) {                                  // можно не только по id, но и по названию
      return department;
      }
  }
  return 'Отдел не найден';
}
console.log(findDepartment(enterprises, 12));   // Object { id: 12, name: "Отдел Отдыха", employees_count: 13 }


function editDepartment(id, newDepName) {
  const department = findDepartment(enterprises, id);
  if(typeof department === 'object') {
    department.name = newDepName;
    return department;
  } else {
    return 'Отдел с таким id не найден';
  }
}
console.log(editDepartment(12, "Отдел Bacchanalia"));   // Object { id: 12, name: "Отдел Bacchanalia", employees_count: 13 }

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
// Пример:
// deleteEnterprise(1)

// function findEnter(id) {
//   return enterprises.find(enterprise => enterprise.id === id);
//   }

// function deleteEnterprise(id) {                     // не оригинал массив
//   const removeEnterprise = findEnter(id);
//   if (removeEnterprise) {
//     return enterprises.filter(el => el.id !== id);
//     } 
//     return 'Предприятие с таким id не найдено';
//   }
// console.log(deleteEnterprise(11));

function deleteEnterprise(id) {
  const index = enterprises.findIndex(enterprise => enterprise.id === id);
  if (index !== -1) {
    enterprises.splice(index, 1);
    return enterprises;
  } 
  return 'Предприятие с таким id не найдено';
}
console.log(deleteEnterprise(11));


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
// Пример:
// deleteDepartment(3)

// function deleteDepartment(id) {                                        // не оригинал массив
//   return enterprises.map(enterprise => {
//     const departments = enterprise.departments.filter(department => {
//       return department.id !== id || department.employees_count > 0;
//     });
//    return { ...enterprise, departments };
//   });
// }
// console.log(deleteDepartment(10));

function deleteDepartment(id) {
  enterprises.forEach(enterprise => {
    const index = enterprise.departments.findIndex(department => department.id === id && department.employees_count === 0);
    if (index !== -1) {
      enterprise.departments.splice(index, 1);
    }
  });
  return enterprises; 
}
console.log(deleteDepartment(10));

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
// Пример:
// moveEmployees(2, 3)

function moveEmployees(firstDepartmentID, secondDepartmentID) {
  const firstDep = findDepartment(firstDepartmentID);
  const secondDep = findDepartment(secondDepartmentID);
  if (firstDep && secondDep) {
    if (getEnterpriseName(firstDepartmentID) === getEnterpriseName(secondDepartmentID)) {   // отделы из одного предприятия
      secondDep.employees.push(...firstDep.employees);                                      // Перенос
      firstDep.employees = [];                                                              // Очистка
      secondDep.employees_count += firstDep.employees_count;
      firstDep.employees_count = 0;
      return `Сотрудники из отдела ${firstDepartmentID} перенесены в отдел ${secondDepartmentID}`;
    } else {
      return 'Отдел не найден или отделы из разных предприятий';
    }
  }
}
console.log(moveEmployees(2, 4));


// проверка(для себя):
    enterprises.forEach(enterprise => {
      console.log(`ID: ${enterprise.id}, Name: ${enterprise.name}`);
        enterprise.departments.forEach(department => {       
          console.log(`ID: ${department.id}, Name: ${department.name}`);
        });
    });