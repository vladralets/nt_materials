// Обєкти (Objects)

// Створення обєктів

// let userData = new Object(); // Синтаксис "Конструктора обєкта"
// let userInfo = {} // Синтаксис "Літерала обєкта"
//
// function log(obj) {
//     console.log(obj)
// }
//
// let key = 'last'


// const userInfo = {
//     name: 'Gogi',
//     age: 42,
//     'is programmer': true,
//     22: true,
//     [key + ' name']: 'Doe',
//     [key]: 55,
//     for: 'for', // Можна використовувати зарезервовані слова
// }

// log(userInfo)
// log(userInfo.name)
// log(userInfo['name'])
// log(userInfo['is programmer'])
// log(userInfo['last name'])

// Обчислювальні властивості

// const userAge = prompt('What is your age?')
//
// const user = {
//     name: 'Gogi',
//     lastName: 'Doe',
//     age: userAge,
// }
//
// console.log(user)

// Вкладені обєкти

// const user = {
//     name: 'Gogi',
//     lastName: 'Doe',
//     address: {
//         city: 'Tbilisi',
//         country: 'Georgia',
//     }
// }
//
// console.log(user.address.city);

// Створення обєктів через функції

// function createUser(name, age) {
//     return {
//         // name: name,
//         // age: age,
//         name,
//         age,
//     }
// }
//
// const user = createUser('Ivan', 42)
// console.log(user.name);

// Зміна обєктів

// const user = {
//     name: 'Arnold',
// }
//
// console.log(user);
//
// user.name = 'Ivan'
// user.age = 42
// user['is programmer'] = true
// user.address = {
//     city: 'Tbilisi',
//     country: 'Georgia',
// }
//
// user.name = undefined
//
// console.log(user);

// Видалення ключів

// const user = {
//     name: 'Gogi',
//     lastName: 'Doe',
// }
//
// console.log(user);
//
// delete user.lastName;
//
// console.log(user);

// Копіювання обєктів

// const user = {
//     name: 'Gogi',
//     lastName: 'Doe',
// }
//
// const user1 = user

// const newUser = Object.assign({}, user)

// console.log(newUser);
// TODO return


// Перевірка значення обєкта

// const user = {
//     name: 'Gogi',
//     lastName: 'Doe',
//     address: {
//         city: 'Tbilisi',
//         country: 'Georgia',
//     }
// }
// console.log(user.name);
// console.log(user.address.city);
//
// if (user.name) {
//     console.log(user.name);
// }
//
// console.log(user?.address?.city)

// Оператор in

// if(user.name) {
//     console.log(user.name);
// }

// if ("name" in user) {
//     console.log(user.name);
// }

// For in

// for(key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// Методи обєкта

// const user = {
//     name: 'Gogi',
//     lastName: 'Doe',
//     address: {
//         city: 'Tbilisi',
//         country: 'Georgia',
//     },
//     // showUserInfo: function () {
//     //     console.log(`${user.name} ${user.lastName}`)
//     // }
//     showUserInfo() {
//         console.log(`${user.name} ${user.lastName}`)
//     }
// }

// user.showUserInfo()

// this

// const user = {
//     name: 'Gogi',
//     lastName: 'Doe',
//     address: {
//         city: 'Tbilisi',
//         country: 'Georgia',
//     },
//     // showUserInfo: function () {
//     //     console.log(`${user.name} ${user.lastName}`)
//     // }
//     showUserInfo() {
//         console.log(`${this.name} ${this.lastName}`)
//     }
// }
// user.showUserInfo()

// let user = {
//     name: 'Gogi',
//     lastName: 'Doe',
//     address: {
//         city: 'Tbilisi',
//         country: 'Georgia',
//     },
//     // showUserInfo: function () {
//     //     console.log(`${user.name} ${user.lastName}`)
//     // }
//     showUserInfo() {
//         let showName = () => {
//             console.log(`${this.name} ${this.lastName}`)
//         }
//         showName()
//     }
// }
// user.showUserInfo()
//
// let userData = user
// user = null
// userData.showUserInfo()

// Функції конструктори

// function UserInfo(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// let userVitaly = new UserInfo('Vitaliy', 28);
// console.log(userVitaly);

// let user = {
//     name: 'Max',
//     age: 32,
//     showInfo() {
//         console.log(`${this.name} is ${this.age}`)
//     }
// }
//
// let userInfo = user



