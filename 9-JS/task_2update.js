// Task 2_update
// 1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal
// 2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal
// 3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
//     class Worker
//       firstName
//       lastName
//       phone
//       getFullName()
// 4. Создайте класс Zoo, реализующий следующий интерфейс:
//     class Zoo
//       address
//       title
//       ticket price
//       workers: []
//       animals: [],
// 5. Добавьте геттеры и сеттеры к полям address, title, ticket price
// 6. Добавьте метод addWorker(worker), добавляющий работника в массив workers. 
//     На вход метод должен принимать объект класса Worker. 
//     Если объект не является инстансом класса Worker - выкинуть ошибку
// 7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
//     На вход метод должен принимать объект класса Animal, как и любого из его наследников. 
//     Если объект не является инстансом класса Animal - выкинуть ошибку
//     ТАКЖЕ, если объект является инстансом класса Snake - выкинуть ошибку с тексом "There will be no snakes, mister Potter!"
// 8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать:)

class Animal {                                       
    constructor(type, color, weight, height, placeOfOrigin) {
      this.type = type;
      this.color = color;
      this.weight = weight;
      this.height = height;
      this.placeOfOrigin = placeOfOrigin;
    }
  
    getInfo() {
      return `Type: ${this.type}, Color: ${this.color}, Weight: ${this.weight}, Height: ${this.height}, Place of Origin: ${this.placeOfOrigin}`;
    }
    
  
    get color() {
    return this._color;
    }
  
    set color(newColor) {
        newColor = newColor.toLowerCase();
        const validColors = new Set(["Red", "Black", "White", "Blue"].map(col => col.toLowerCase()));
        if (!validColors.has(newColor)) {
          throw new Error("Invalid color");
        }
        this._color = newColor;
    }
  }
  
  class Snake extends Animal {
    #isPoisonous;
    constructor(type, color, weight, height, placeOfOrigin, isPoisonous) {
      super(type, color, weight, height, placeOfOrigin);
      this.#isPoisonous = isPoisonous;
    }
  
    checkPoisonous() {
      return this.#isPoisonous
    }
  }

class Bird extends Animal {
    #isFlying;
    constructor(type, color, weight, height, placeOfOrigin, isFlying) {
    super(type, color, weight, height, placeOfOrigin);
    this.#isFlying = isFlying;
    }
}
  
class CatLike extends Animal {
    constructor(type, color, weight, height, placeOfOrigin, isSafeToPet) {
        super(type, color, weight, height, placeOfOrigin);
        this.isSafeToPet = isSafeToPet;
    }
}
  
  class Worker {
    constructor(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
  
    getFullName() {
        return `${this.firstName} ${this.lastName}`
        }
    }
  
  class Zoo {
    constructor({address, title, ticketPrice, workers = [], animals = []}) {
        this.address = address;
        this.title = title;
        this.ticketPrice = ticketPrice;
        this.workers = workers;
        this.animals = animals;
    }
  
  get address() {
   return this._address;
  }
  
  get title() {
    return this._title;
  }
  
  get ticketPrice () {
    return this._ticketPrice;
  }
  
  set address(newAddress) {
    this._address = newAddress;
  }
  
  set title(newTitle) {
    this._title = newTitle;
  }
  
  set ticketPrice(newTicketPrice) {
    this._ticketPrice = newTicketPrice;
  }
  
  addWorker(worker) {                       // 6. метод, доб работника в массив workers
    if (!(worker instanceof Worker)) {      // На вход - объект класса Worker
        throw new Error("Invalid worker");
      }
      this.workers.push(worker);
  }
  
  addAnimal(animal) {                       // 7. метод, доб животное в массив animals.
    if (!(animal instanceof Animal)) {        // На вход - объект класса Animal, как и любого из его наследников.
        throw new Error("Invalid animal");
    }
    if (animal instanceof Snake) {
        throw new Error("There will be no snakes, mister Potter!")
    } 
    this.animals.push(animal)
  }
  
  removeWorker(worker) {
    if (!(worker instanceof Worker)) {
        throw new Error("Invalid worker");
    }
      const index = this.workers.indexOf(worker);
      if (index !== -1) {                           // если нашли- удаляем
      this.workers.splice(index, 1);
      } 
  }
  
  removeAnimal(animal) {
    if (!(animal instanceof Animal)) {
        throw new Error("Invalid animal");
    }
      const index = this.animals.indexOf(animal);
      if (index !== -1) {
      this.animals.splice(index, 1);;
      }
    }
}
  
  // проверка:
  try {
    let myZoo = new Zoo({ 
        address: "56 Animal Street",
        title: "Zooland",
        ticketPrice: "50$"
    });

    let peacock = new Bird("Peacock", "blue", "2", "1.5", "India", true);
    console.log(peacock.getInfo());

    try {
        peacock.color = "yellow"; 
    } catch (error) {
        console.log(error.message); 
    }
    console.log(peacock.getInfo());     // Invalid color, т.к. желтого нет

    const w1 = new Worker("Ivan", "Ivanov", 9035861478);
    const w2 = new Worker("Anna", "Smirnova", 9065897412);
    const a1 = new Animal("Newfoundland", "black", "65", "1", "Canada");
    const a2 = new CatLike("Turkish Angora", "white", "1", "1", "Turkey", true);

    myZoo.addWorker(w1);
    myZoo.addWorker(w2);
    myZoo.addAnimal(a1);
    myZoo.addAnimal(a2);

    try {                             // проверю что змея не добавится: There will be no snakes, mister Potter!
        const a3 = new Snake("McCoy's Taipan", "black", "2", "2", "Australia", true);
        myZoo.addAnimal(a3);
    } catch (error) {
        console.log(error.message); 
    }

     myZoo.workers.forEach(worker => {              // проверили что Аня и Ваня есть
        console.log(worker.getFullName());
    });

    myZoo.animals.forEach(animal => {              // проверили что кошка и собака есть
        console.log(animal.getInfo());
    });    

    myZoo.removeWorker(w1);                            // проверю после удаления
    myZoo.removeAnimal(a1);

    myZoo.workers.forEach(worker => {                  // осталась Аня без Ивана
        console.log(worker.getFullName());
    });

    myZoo.animals.forEach(animal => {                  // осталась кошка без собаки
        console.log(animal.getInfo());
    });

} catch (error) {
    console.log(error.message);
}
