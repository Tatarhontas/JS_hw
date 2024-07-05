class Developer extends ITSpecialist {
    constructor(name, grade, experienceInYears, age, country, salary,  specialization, isWritingUnitTests) {
    super(name, grade, experienceInYears, age, country, salary, specialization); 
      this.isWritingUnitTests = isWritingUnitTests;
    }
  
    get specialization() {
      return this.isWritingUnitTests ? 'Unit Test Developer' : this._specialization;
    }
  
    set specialization(newSpecialization) {
      return this._specialization = newSpecialization
    }
  }
