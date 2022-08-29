// console.log(window.innerWidth)

// BOM

// Brouser functions

// confirm(), alert(), prompt();

// Navigator

// console.log(navigator.userAgent) // Браузер
// console.log(navigator.platform) // ОС

// location

// url, hash, ?,

// History

// history.back() // крок назад
// history.forward() // крок вперед

// DOM

// document

// console.log(document.documentElement) // html
// console.log(document.head) // head
// console.log(document.body) // body

// console.log(document.body.firstChild)
// console.log(document.body.lastChild)

// Отримання елементів

// console.log(document.querySelectorAll('.cityList'));
// // console.log(document.querySelector('.cityList'));
// //
// // console.log(document.querySelectorAll('li'))
// // console.log(document.querySelectorAll('li.cityList'))
// // console.log(document.querySelectorAll('li>.cityList'))
// // console.log(document.querySelectorAll('#city'))
// //
// // console.log(document.getElementById('city'))
// console.log(document.getElementsByClassName('cityList'))
//
// let firstElem = document.getElementById('city')
// firstElem.innerText = 'Odessa'
//
// // console.log(document.querySelectorAll('.cityList'));
// // console.log(document.getElementsByClassName('cityList'))
//
// console.log(document.getElementsByTagName('li'))
// console.log(document.getElementsByName('Lviv'))

// let citiesList = document.querySelectorAll('.cityList')
//
// for (let city of citiesList) {
//     console.log(city.innerHTML);
// }

// addEventListener

const button = document.getElementsByTagName('button')[0]

button.addEventListener('click', () => {
    alert('Gogi')
})









