/*Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, 
который будет преобразовывать XML в JS-объект и выводить его в консоль.*/

//Созданем экземпляр класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);
// XML, который мы будем парсить
const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`
;
// console.log('xmlString', xmlString);

//parser.parseFromString(xmlString,"text/xml"); преобразует XML в объект JavaScript в виде DOM.
const xmlDOM = parser.parseFromString(xmlString,"text/xml");
// Парсинг XML
const students = xmlDOM.querySelectorAll("student");
//Запись данных в результирующий объект 
let result = [];
students.forEach(node => {
  let student = {
    // находим  узлы                        
    name:`${node.querySelector("first").textContent}${node.querySelector("second").textContent}`,
    age:node.querySelector("age").textContent,
    prof:node.querySelector("prof").textContent,
    // Получение данных из атрибутов
    lang:node.querySelector("name").getAttribute("lang")
  }
  result.push(student); // Метод push() добавляет элемент в конец массива.
});

console.log(result);