// Масиви

// Масиви - вид обєкта, що дає можливість кращого управління даними

// Створення масивів

// const arr1 = new Array('Ivan', 'Petr');
// const arr2 = ['Ivan', 'Petr'];

// Заповення масивів

// const cities = ['Kyiv', 'Cherkasy', 'Dnipro']

// const countries = [
//     {name: 'Ukraine', capital: 'Kyiv'},
//     {name: 'Poland', capital: 'Warsaw'},
// ]

// Типи данних в масивах

// const arr = ['String', 42, true, {name: 'Ukraine', capital: 'Kyiv'}, [], () => console.log(arr[3])];

// arr[5]();

// Багатомірні масиви

// const bigArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(bigArr[0][1]);

// Отримання довжини масива

// const cities = ['Kyiv', 'Cherkasy', 'Dnipro']
//
// console.log(cities.length)

// Додавання та зміна елементів масива

// const cities = ['Kyiv', 'Cherkasy', 'Dnipropetrovsk']

// Зміна

// cities[2] = 'Dnipro'
// console.log(cities)// => ['Kyiv', 'Cherkasy', 'Dnipro']

// Додавання елементів в масив

// cities[3] = 'Lviv'
// console.log(cities);

// cities[6] = 'Odessa'
// console.log(cities); // Undefined

// console.log(cities);
// delete cities[3]
// console.log(cities);

// Методи додавання та видалення елементів

// Метод Push - Додає елемент в кінець масиву

// cities.push('Chernivtsi', 'Kharkiv')
// console.log(cities);

// unshift - Додає на початок масиву

// cities.unshift('Sumy')
// console.log(cities);

// shift - видаляє елемент на початку

// cities.shift()
// console.log(cities);

// pop - видаляє в кінці

// cities.pop()
// console.log(cities);

// Видалення за допомогою . splice

// const cities = ['Kyiv', 'Cherkasy', 'Dnipropetrovsk', 'Donetsk']

// let delCity = cities.splice(2, 1)
// console.log(delCity);
// console.log(cities);

// cities.splice(-2, 1)
// console.log(cities);

// Додавання через .splice
//
// cities.splice(1, 0, 'Pereyaslav')
// console.log(cities);

// Копіювання через .slice

// const cities = ['Kyiv', 'Cherkasy', 'Dnipropetrovsk', 'Donetsk']
//
// let newCities = cities.slice(0, 3)
// console.log(newCities);

// Concat - Обєдання масивів

// const cities = ['Kyiv', 'Cherkasy', 'Dnipropetrovsk', 'Donetsk']
// const newCities = cities.concat('Lviv')
// console.log(newCities);

// Пошук елементів в масиві

// const cities = ['Kyiv', 'Cherkasy', 'Dnipropetrovsk', 'Donetsk']

// indexOf(item, from)

// console.log(cities.indexOf('Donetsk', 2)) // => 3
// console.log(cities.indexOf('Kyiv', 2)) // => -1
// console.log(cities.indexOf('Moscow')) // => -1

// lastIndexOf(item, from) - Те саме що і indexOfб тільки з кінця

// includes(item, from)

// console.log(cities.includes('Lviv'))

// Пошук елементів в масиві

// find
//
// const countries = [
//     {name: 'Ukraine', capital: 'Kyiv', index: 1},
//     {name: 'USA', capital: 'Washington', index: 1},
//     {name: 'Spain', capital: 'Madrid', index: 2},
//     {name: 'Poland', capital: 'Warsaw', index: 3},
// ]
//
// const USA = countries.find((item , index, array) => {
//     return item.name === 'USA'
// })

// Пошук індекса по елементу

// const indexOfUA = countries.findIndex(item => item.capital === 'Kyiv')

// Фільтрація масивів

// console.log(countries.filter((item, index, array) => {
//     return item.index === 1
// }));

// Сортування масивів

// const cities = ['Kyiv', 'Cherkasy', 'Dnipropetrovsk', 'Donetsk']
// const numbers = [1, 8, 6, 10, 42]

// console.log(cities.sort())
// console.log(numbers.sort())

// console.log('8' > '42')

// Reverse

// console.log(cities.reverse());

// Перетворення масивів

// const numbers = [1, 8, 6, 10, 42]

// .map

// const newNumbers = numbers.map(item => item * item)
// console.log(newNumbers);

// .split - Перетворення строки в масив

// let str = 'Ivan,Vitaliy,Jurii,Vlad'
//
// let arr = str.split(',', 3)
// console.log(arr);

// .join - перетворення масиву в строку

// const cities = ['Kyiv', 'Cherkasy', 'Dnipropetrovsk', 'Donetsk']

// console.log(cities.join())
// console.log(String(cities))

// Array.isArray()

// let gogi = []
// let doe = {}
//
// console.log(Array.isArray(gogi)) // => true
// console.log(Array.isArray(doe)) // => false

// Перебор масивів

const cities = ['Kyiv', 'Cherkasy', 'Dnipropetrovsk', 'Donetsk']

// for

// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i])
// }

// for of

// for (let item of cities) {
//     console.log(item);
// }

// for each

cities.forEach((item, index, array) => {
    console.log(`${item} is the city in Ukraine`)
})
