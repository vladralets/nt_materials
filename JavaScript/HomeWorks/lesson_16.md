# Lesson 16
*Destructuring of objects and arrays, spread and rest operators. *

## Main materials
[Деструктуризация в ES6. Полное руководство](https://medium.com/@stasonmars/%D0%B4%D0%B5%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2-es6-%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-b865bb71f376)  
[Оператор spread и rest параметры в JavaScript](https://medium.com/@stasonmars/%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-spread-%D0%B8-rest-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B-%D0%B2-javascript-22eb33cb0825)  
[Деструктурирующее присваивание](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)  

## Secondary materials
[7 трюков с Rest и Spread операторами при работе c JS объектами](https://habr.com/ru/articles/489550/)  

## Video

[Все о Деструктуризации в JS](https://www.youtube.com/watch?v=wWYokY0Pt2M)  
[Деструктурирующее присваивание массивов и объектов в JavaScript](https://www.youtube.com/watch?v=segRDC22WJA)  

## HomeWorks
---
## HW 1

### Theoretical question
- Обьясните своими словами, как вы понимаете, что такое деструктуризация и зачем она нужна

### Task 1

Две компании решили объединиться, и для этого им нужно объединить базу данных своих клиентов. 

У вас есть 2 массива строк, в каждом из них - фамилии клиентов. Создайте на их основе один массив, который будет представлять собой объединение двух массив без повторяющихся фамилий клиентов.

```javascript
const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];
```

### Task 2

Перед вами массив `characters`, состоящий из объектов. Каждый объект описывает одного персонажа.

Создайте на его основе массив `charactersShortInfo`, состоящий из объектов, в которых есть только 3 поля - name, lastName и age.

```javascript
const characters = [
  {
    name: "Елена",
    lastName: "Гилберт",
    age: 17, 
    gender: "woman",
    status: "human"
  },
  {
    name: "Кэролайн",
    lastName: "Форбс",
    age: 17,
    gender: "woman",
    status: "human"
  },
  {
    name: "Аларик",
    lastName: "Зальцман",
    age: 31,
    gender: "man",
    status: "human"
  },
  {
    name: "Дэймон",
    lastName: "Сальваторе",
    age: 156,
    gender: "man",
    status: "vampire"
  },
  {
    name: "Ребекка",
    lastName: "Майклсон",
    age: 1089,
    gender: "woman",
    status: "vempire"
  },
  {
    name: "Клаус",
    lastName: "Майклсон",
    age: 1093,
    gender: "man",
    status: "vampire"
  }
];
```

### Task 3

У нас есть объект `user`:

```javascript
const user1 = {
  name: "John",
  years: 30
};
```

Напишите деструктурирующее присваивание, которое:
 - свойство name присвоит в переменную name
 - свойство years присвоит в переменную age
 - свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
 
Выведите переменные на экран.

### Task 4

Детективное агентство несколько лет собирает информацию о возможной личности [Сатоши Накамото](https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D1%82%D0%BE%D1%81%D0%B8_%D0%9D%D0%B0%D0%BA%D0%B0%D0%BC%D0%BE%D1%82%D0%BE). Вся информация, собранная в конкретном году, хранится в отдельном объекте. Всего таких объектов три - `satoshi2018`, `satoshi2019`, `satoshi2020`.

Чтобы составить полную картину и профиль, вам необходимо объединить данные из этих трех объектов в один объект - `fullProfile`.

Учтите, что некоторые поля в объектах могут повторяться. В таком случае в результирующем объекте должно сохраниться значение, которое было получено позже (например, значение из 2020 более приоритетное по сравнению с 2019).

Напишите код, который составит полное досье о возможной личности Сатоши Накамото. Изменять объекты `satoshi2018`, `satoshi2019`, `satoshi2020` нельзя.

```javascript
const satoshi2020 = {
  name: 'Nick',
  surname: 'Sabo',
  age: 51,
  country: 'Japan',
  birth: '1979-08-21',
  location: {
    lat: 38.869422, 
    lng: 139.876632
  }
}

const satoshi2019 = {
  name: 'Dorian',
  surname: 'Nakamoto',
  age: 44,
  hidden: true,
  country: 'USA',
  wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  browser: 'Chrome'
}

const satoshi2018 = {
  name: 'Satoshi',
  surname: 'Nakamoto', 
  technology: 'Bitcoin',
  country: 'Japan',
  browser: 'Tor',
  birth: '1975-04-05'
}
```

### Task 5

Дан массив книг. Вам нужно добавить в него еще одну книгу, не изменяя существующий массив (в результате операции должен быть создан новый массив).

```javascript
const books = [{
  name: 'Harry Potter',
  author: 'J.K. Rowling'
}, {
  name: 'Lord of the rings',
  author: 'J.R.R. Tolkien'
}, {
  name: 'The witcher',
  author: 'Andrzej Sapkowski'
}];

const bookToAdd = {
  name: 'Game of thrones',
  author: 'George R. R. Martin'
}
```

### Task 6

Дан обьект `employee`. Добавьте в него свойства age и salary, не изменяя изначальный объект (должен быть создан новый объект, который будет включать все необходимые свойства). Выведите новосозданный объект в консоль.

```javascript
const employee = {
  name: 'Vitalii',
  surname: 'Klichko'
}
```

### Task 7
Дополните код так, чтоб он был рабочим 

```javascript
const array = ['value', () => 'showValue'];

// Допишите ваш код здесь

alert(value); // должно быть выведено 'value'
alert(showValue());  // должно быть выведено 'showValue'
```

