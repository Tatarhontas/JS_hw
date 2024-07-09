class QA extends ITSpecialist {
    constructor(name, grade, experienceInYears, age, country, salary,  specialization, isAqa) {
    super(name, grade, experienceInYears, age, country, salary, specialization); 
    this.isAqa = isAqa;
    }
  
    get specialization() {
      return this.isAqa ? 'AQA' : this._specialization;
    }
  
    set specialization(newSpecialization) {
      return this._specialization = newSpecialization
    }
  }
