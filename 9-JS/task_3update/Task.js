class Task {
    constructor(featureName, userStoryNumber, estimations) {
      this.featureName = featureName;
      this.userStoryNumber = userStoryNumber;
      this.estimations = estimations;
    }
  
    get featureName() {
      return this._featureName;
    }
  
    set featureName(newFeatureName) {
      this._featureName = newFeatureName;
    }
  
    get userStoryNumber() {
      return this._userStoryNumber;
    }
  
    set userStoryNumber(newUserStoryNumber) {
      this._userStoryNumber = newUserStoryNumber;
    }
  
    get estimations() {
      return this._estimations;
    }
  
    set estimations(newEstimations) {
      this._estimations = newEstimations;
    }
  }
  
  // проверка:
  
//   const qa_1 = new QA('Alex', 'Middle', 4, 33, 'Canada', 5000, 'Automation Quality Assurance', true);
//   console.log(qa_1.allInfo); // specialization: AQA
//   const qa_2 = new QA('Alice', 'Middle', 3, 31, 'Canada', 4500, 'Automation Quality Assurance', false);
//   console.log(qa_2.allInfo); //  specialization: Automation Quality Assurance
//   qa_2.specialization = 'Manual';
//   console.log(qa_2.allInfo); // specialization: Manual (изменили)
//   const dev_1 = new Developer('David', 'Junior', 2, 25, 'USA', 4000, 'Frontend Developer', true); // specialization: Unit Test Developer
//   console.log(dev_1.allInfo);
  
//   const team_1 = new Team('Team 0'); // новая команда
//   console.log(team_1.name);      // Team 0
//   team_1.name = 'Team 1';        // изменили имя и проверяем
//   console.log(team_1.name);      // Team 1
  
//   team_1.dailyStandupTime = '10:00 AM';
//   console.log(team_1.dailyStandupTime); 
  
//   team_1.addTeammate(qa_1);          // добавляем сотрудников
//   team_1.addTeammate(qa_2);
//   team_1.addTeammate(dev_1);
  
//   console.log(team_1.showAllTeammates()); // [QA, QA, Developer] с Алексом, Алисой и Давидом, но Давид не вывелся, т.к. много
//   // [QA, QA, Developer]
//   // 0: QA {name: 'Alex', grade: 'Middle', experienceInYears: 4, age: 33, _country: 'Canada', …}
//   // 1: QA {name: 'Alice', grade: 'Middle', experienceInYears: 3, age: 31, _country: 'Canada', …}
//   // не вижу Давида
  
//   team_1.showAllTeammates().forEach(teammate => {   // проверю что Давид точно есть
//     console.log(teammate.allInfo);
//   });                                              
//   console.log(team_1.showTeammatesBySpecialization('AQA'));  //фильтруем [QA] и в нём только Alex, т.к. Алиса false (не AQA)
  
  
//   team_1.editTeammate(qa_2, new QA('Alice', 'Middle', 3, 31, 'Canada', 4500, 'Automation Quality Assurance',true));
//   console.log(team_1.showAllTeammates()); // [QA, QA, Developer] теперь Алиса AQA
//   team_1.removeTeammate(dev_1);             // удаляем девелопера и проверяем удалился ли
//   console.log(team_1.showAllTeammates()); // [QA, QA]
  
  
//   const task_1 = new Task('Задача 2', 'US00', '5 hours');
//   console.log(task_1.featureName);
//   task_1.featureName = 'Задача 01';
//   console.log(task_1.featureName);
//   const task_2 = new Task('Задача 2', 'US02', '8 hours');
//   const task_3 = new Task('Задача 2', 'US02', '8 hours');
//   team_1.addTask(task_1);            // доб задачи и сразу проверим что сохр только уникал
//   team_1.addTask(task_2);
//   team_1.addTask(task_3);
//   console.log(team_1.showAllTasks()); // [Task, Task]
//   team_1.removeTask(task_2);        // удаляем одну и проверяем удалилась ли
//   console.log(team_1.showAllTasks()); // [Task]
  
