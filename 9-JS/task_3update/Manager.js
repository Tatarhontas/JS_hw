class Manager extends ITSpecialist {
    constructor(name, grade, experienceInYears, age, country, salary,  specialization, isScrumMaster) {
    super(name, grade, experienceInYears, age, country, salary, specialization); 
    this.isScrumMaster = isScrumMaster;
    }
  
    get specialization() {
      return this.isScrumMaster ? 'Scrum Master' : this._specialization;
    }
    set specialization(newSpecialization) {
      return this._specialization = newSpecialization
    }
  }
