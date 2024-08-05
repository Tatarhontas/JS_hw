// Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим КАК МИНИМУМ {id: number}.
// Задача класса - хранить объекты типа Т в приватном массиве
// Реализуйте в классе следующие методы:
//   - constructor должен принимать необзятельный массив объектов соответствующего типа. 
//     Если массив пришел - объекты запушить в хранилище.
//   - add, принимающий либо объект типа Т, либо объект типа Т без id. Метод должен быть реализовать с помощью ПЕРЕГРУЗКИ.
//     Если на вход подан объект без айди - айди надо сгенерировать, затем запушить обьект в хранилище
//     Если на вход подан объект с айди - запушить его в хранилище
//     Для типизации используйте Utility Types
//   - update, принимающий объект с айди и любым набором остальных ключей из типа Т. 
//   - remove, принимающий на вход id и удаляющий объект из массива
//   - getById(id), возвращающий объект по айди если найден
//   - getAll(), возвращает все объекты в хранилище

interface lichnoeDelo {
    id: number;
    name: string;
    age?: number;
  }
  
  class Storage<T extends { id: number }> {
    private arrOfObj: T[] = [];
    private count: number = 1;
  
    constructor(objs?: T[]) {
      if (objs) {
          this.arrOfObj.push(...objs);
      }
  }
  
  add(obj: T): void;
  add(obj: Omit<T, 'id'>): void;      // без айдишки
  add(obj: T | Omit<T, 'id'>): void {
      if('id' in obj) {
        this.arrOfObj.push(obj as T);
      } else {
            const newID = {...obj, id: this.count++} as T;
            this.arrOfObj.push(newID);
          }
  }
  
  update(upObj: T): void {
        const index = this.arrOfObj.findIndex(el => el.id === upObj.id);
        if (index !== -1){
           this.arrOfObj[index] = {...this.arrOfObj[index],...upObj as T};
    }
  }
  
  remove(id: number): void {
         this.arrOfObj = this.arrOfObj.filter(el => el.id !== id);
  }
  
  getById(id: number): T | undefined {
          return this.arrOfObj.find(el => el.id === id);
  }
  
  getAll(): T[] {
        return this.arrOfObj;
  }
  }
  
  const storage = new Storage<lichnoeDelo>();
  
  // Пример использования:
  
    storage.add({ id: 1, name: 'Anatoly', age: 33 }); // valid
    storage.add({ name: 'Elena', age: 25 }); // valid, created with id === 2
  
    storage.update({ id: 1, name: 'Egor' });
    storage.update({ id: 2, name: 'Tatiana', age: 33 });
  
    console.log(storage.getById(1)); // { id: 1, name: 'Egor', age: 33 }
    console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }, { id: 2, name: 'Tatiana', age: 33 }]
  
    storage.remove(2);
  
    console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }]
  
