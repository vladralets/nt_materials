# Lesson 15
*Замыкания. Обработка ошибок (try … catch)*

## Main materials
[Замыкание](https://learn.javascript.ru/closure)  
[Обработка ошибок, “try..catch”](https://learn.javascript.ru/try-catch)  
[Осваиваем замыкания в Javascript](https://medium.com/@sshambir/%D0%BE%D1%81%D0%B2%D0%B0%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-5b83267ef7d1)  

## Secondary materials
[Error](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Error)  
[throw](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/throw)  
[try...catch](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/try...catch)

## Video

[Что такое замыкания. Как они работают.](https://www.youtube.com/watch?v=pahO5XjnfLA)  
[Try Catch](https://www.youtube.com/watch?v=6_XzKtGPgE8)  

## HomeWorks
---
## HW 1

### Theoretical question
- Приведите пару примеров, когда уместно использовать в коде конструкцию `try...catch`.

### Task
Дан массив books.
```javascript
const books = [
  { 
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70 
  }, 
  {
   author: "Скотт Бэккер",
   name: "Воин-пророк",
  }, 
  { 
    name: "Тысячекратная мысль",
    price: 70
  }, 
  { 
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70
  }, 
  {
   author: "Дарья Донцова",
   name: "Детектив на диете",
   price: 40
  },
  {
   author: "Дарья Донцова",
   name: "Дед Снегур и Морозочка",
  }
];
```


*Технические требования:*
- Выведите этот массив на экран в виде списка (тег ul - список должен быть сгенерирован с помощью Javascript).
- На странице должен находиться `div` с `id="root"`, куда и нужно будет положить этот список (похожая задача была дана в модуле basic). 
- Перед выводом обьекта на странице, нужно проверить его на корректность (в объекте должны содержаться все три свойства - author, name, price). Если какого-то из этих свойств нету, в консоли должна высветиться ошибка с указанием - какого свойства нету в обьекте. 
- Те элементы массива, которые являются некорректными по условиям предыдущего пункта, не должны появиться на странице.