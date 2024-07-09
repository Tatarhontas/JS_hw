// class Team {
//     constructor({name, sprintDuration, releaseDate, dailyStandupTime, teammates = [], tasks = []}) {
//       this.name = name; 
//       this.sprintDuration = sprintDuration;
//       this.releaseDate = releaseDate;
//       this.dailyStandupTime = dailyStandupTime;
//       this.teammates = teammates;
//       this.tasks = [] или new Set(tasks); 
//     }

    // Вы должны реализовать следующие методы:
    //   get/set team's name
    //   get/set team’s sprint duration (number of weeks)
    //   get planned release date
    //   get/set daily standup time
    //   get number of teammates
    //   add/remove/edit teammate
    //   add/remove/edit tasks (таски могут храниться только уникальные)
    //   show all teammates
    //   show teammates by specialication
    //   show all tasks
   
    // class Team
    // name                 
    // sprint_duration
    // release_date
    // daily_standup_time
    // teammates: []
    // tasks: []

    class Team {
    constructor(name) {
      this.name = name;           
      this.sprintDuration = 0;          
      this.releaseDate = null;
      this.dailyStandupTime = '';
      this.teammates = [];              
      this.tasks = [];           
    }
  
    get teamName() {                    // название команды
      return this._name;
    }
  
    set teamName(name) {                // изменяем название команды
      this._name = name;
    }
  
    get sprintDuration() {              // сколько недель длится спринт
      return this._sprintDuration;
    }
  
    set sprintDuration(duration) {      // изменяем длительность спринта
      this._sprintDuration = duration;
    }
  
    get plannedReleaseDate() {          // дата релиза
      return this._releaseDate;
    }
  
    get dailyStandupTime() {           // время планёрки
      return this._dailyStandupTime;
    }
  
    set dailyStandupTime(time) {       // меняем время планёрки
      this._dailyStandupTime = time;
    }
  
    get numberOfTeammates() {          // кол-во людей в команде
      return this.teammates.length;
    }
  
    addTeammate(teammate) {            // добавляем человека в команду
      this.teammates.push(teammate);
    }
  
    removeTeammate(teammate) {
      const index = this.teammates.indexOf(teammate);
      if (index !== -1) {                           // если нашли- удаляем
      this.teammates.splice(index, 1);
      }
    }
  
    editTeammate(oldTeammate, newTeammate) {           // редактируем члена команды
      const index = this.teammates.indexOf(oldTeammate);
      if (index !== -1) {
        this.teammates[index] = newTeammate;
      }
    }
  
    addTask(task) {                    // добавляем только уникал задачи
      if (!this.tasks.some(t => t.featureName === task.featureName && t.userStory === task.userStory && t.estimation === task.estimation)) {
      this.tasks.push(task);
      }
    }
  
    removeTask(task) {                // удаляем задачу
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    }
  
    showAllTeammates() {               // список всех членов команды
      return this.teammates;
    }
  
    showTeammatesBySpecialization(specialization) {        // фильтруем команду по специализации (не забыть добавить спек в отделы)
      return this.teammates.filter(t => t.specialization === specialization);
    }
  
    showAllTasks() {                   // список всех задач
      return this.tasks;
    }
  }
