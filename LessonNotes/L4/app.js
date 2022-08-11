// Functions

// Назва функцій

// show...
// get...
// create...
// check...
// calc... - calcSum

// function імя(параметри) {
    // тіло
// }

// function showMessage() {
//     console.log('message')
// }

// const message = prompt('Enter your message', 'Message')

// const sendMessage = function() {
//     alert(message)
// }

// sendMessage()

// const calcNumbers = function (n1, n2) {
//     return n1 + n2
// }

// console.log(calcNumbers(3, 5))
// console.log(calcNumbers(5, 12))

// Локальні змінні

// function showMessage() {
//     let message = 'Hi, Im Gogi!'

//     alert(message)
// }

// showMessage()

// alert(message)

// Зовнішні змінні

// let city = 'Kyiv'

// function showCity(city) {
//     let message = `Im live in ${city}`

//     alert(message)
// }

// showCity('Kyiv')

// Параметри функцій

// function showUser(userName = 'Gogi', userAge = 25) {
//     alert(`${userName} is ${userAge}`)
// }

// showUser()

// function showUser(userName, userAge) {
//     if(userName === undefined) {
//         userName = 'Ivan'
//     }
//     if(userAge === undefined) {
//         userAge = 42
//     }
//     alert(`${userName} is ${userAge}`)
// }

// showUser('Vasya', 45)

// function addNumbers(num1, num2) {
//     return num1 + num2
// }

// alert(addNumbers(77, 5))

// Return

// function showNumberIfAdd(num) {
    // return

    // Код далі не буде виконуватись!!!
// }

// showNumberIfAdd(4)

// Callback functions

// function ok() {
//     alert('Доступ дозволено')
// }

// function notOk() {
//     alert('Доступ заборонено!')
// }


// function checkAge() {
//     let age = +prompt('Enter your age')
//     age >= 18 ? ok() : notOk()
// }
// checkAge()

// IIFE - Immediatly Invoked Function Expression

// function ok() {
//     alert('Доступ дозволено')
// }

// function notOk() {
//     alert('Доступ заборонено!')
// }


// (function checkAge() {
//     let age = +prompt('Enter your age')
//     age >= 18 ? ok() : notOk()
// })();

// Arrow functions - Стрілочні функції (Корабельні)

// let sum = (n1, n2) => {
//     return n1 + n2
// }

// sum()

// let sum = (a, b) => a + b

// console.log(sum(2, 5));

// const getDegree = (n1, n2) => {
//     let result = n1
//     for(let i = 1; i < n2; i++) {
//         result = result * n1
//         console.log(result)
//     }

//     return result
// }

// console.log(getDegree(3, 5))