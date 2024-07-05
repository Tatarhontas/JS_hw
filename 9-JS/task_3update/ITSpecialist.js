//     Создайте класс ITSpecialist. Реализуйте следующие методы:
//       get all info
//       set country
//       get salary
//     Создайте дочерние классы для некоторых айтишников. 
//     Реализовать возможность задавать свойства дочерних классов.
//     Каждый класс должен находиться в своем собственном файле.
//     Все данные из обьекта класса Team вывести в HTML 

// class ITSpecialist
//     name
//     grade
//     experience_in_years
//     age
//     country
//     _salary

// class Manager
// isScrumMaster

// class QA
// isAqa

// class Developer
// isWritingUnitTests

// class Task
// featureName
// userStoryNumber
// estimations

class ITSpecialist {
    constructor(name, grade, experienceInYears, age, country, salary, specialization) {   // добавила спек, чтобы можно было фильтровать в Team
      this.name = name;
      this.grade = grade;
      this.experienceInYears = experienceInYears;
      this.age = age;
      this._country = country;
      this._salary = salary;
      this._specialization = specialization;  // добавила _ иначе не выводится David
    }
  
    get allInfo() {
      return `
        name: ${this.name},
        grade: ${this.grade},
        experienceInYears: ${this.experienceInYears},
        age: ${this.age},
        country: ${this._country},
        salary: ${this._salary},
        specialization: ${this.specialization}`
    }
    get country() {
        return this._country
    }
    
    set country(newCountry) {
      this._country = newCountry;
    }
  
    get salary() {
      return this._salary;
    }
  
    get specialization() {                         // добавила, т.к. в классе Team есть фильтрация по спеку
        return this._specialization;
    }
  
    set specialization(newSpecialization) {        
        this._specialization = newSpecialization;
    }
  }
