/*Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, 
который будет преобразовывать JSON в JS-объект и выводить его в консоль.*/

//1. Подготовка данных 
// JSON, который мы будем парсить
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
let jsonObj = JSON.parse(jsonString); //Этап 2. Получение данных 
console.log(jsonObj);