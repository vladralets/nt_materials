# Lesson 14
*Прототипное наследование. ES6 классы.*

## Main materials
[Зачем нам ООП и что это такое](https://habr.com/ru/articles/148015/)  
[Фундаментальные принципы объектно-ориентированного программирования на JavaScript](https://tproger.ru/translations/oop-js-fundamentals/)  
[Класс: базовый синтаксис](https://learn.javascript.ru/class)  
[Классы в ES6](https://abcinblog.blogspot.com/2018/09/es6-ix.html)

## Video

[Все о ES6 Классах](https://www.youtube.com/watch?v=uLY9GXGMXaA)  
[ООП на простых примерах. Объектно-ориентированное программирование](https://www.youtube.com/watch?v=-6DWwR_R4Xk)  

## HomeWorks
---
## HW 1

### Theoretical question
- Обьясните своими словами, как вы понимаете, как работает прототипное наследование в Javascript

### Task
- Реализовать класс Employee, в котором будут следующие свойства - name (имя), age (возраст), salary (зарплата). Сделайте так, чтобы эти свойства заполнялись при создании объекта.
- Создайте геттеры и сеттеры для этих свойств.
- Создайте класс Programmer, который будет наследоваться от класса Employee, и у которого будет свойство lang (список языков).
- Для класса Programmer перезапишите геттер для свойства salary. Пусть он возвращает свойство salary, умноженное на 3.
- Создайте несколько экземпляров обьекта Programmer, выведите их в консоль.