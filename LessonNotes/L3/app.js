// Цикли
// Потрибни для багатократногого виконання коду в проекті

// While & For

// While
// Синтаксис
// while( умова ) {
    // код якій буде виконуватись
    // Тіло циклу
// } 

// let number = 0;
// while (number <= 10) {
    // console.log(number)
    // number = number + 1
    // number++
// }

// let number = 5

// while (number) {
//     console.log(number)
//     number--
// }

// While без {}
// let number = 10
// while (number) console.log(number--)

// do while

// do {} while()

// let number = 0
// do {
//     console.log(number)
//     number++
// } while (number <= 1000)

// let num = 0

// while(num <= 1000) {
//     console.log(num)
//     num++
// }

// Цикл for

// for(Початок, Умова, Крок) {
    // Код що буде виконуватись
// }

// for(let num = 0; num <= 5; num++) {
//     console.log(num)
// }

// let num = 5;

// for(; num <= 100; num++) {
//     console.log(num)
// }

// for in

// const obj = {
//     'Ukraine': 'Kyiv',
//     'Poland': 'Warshaw',
// }

// for (let key in obj) {
//     console.log(key)
//     console.log(obj[key])
// }

// let number = 2
// const arr = [1, 2, 3, 4, 5]

// console.log(arr[0])

// for(let i = 0; i < arr.length; i++) {
//     // number = number * arr[i]
//     number *= arr[i]
//     console.log(number)
// }


// Дан массив arr числами.Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.

// const arr = [-5, 2, -1, 12, -3, -5, 13, 7]

// brake, continue

// for(let i = 0; i < 5; i++) {
//     console.log(i)
//     if(i === 2) break
// }

// for(let i = 0; i < 5; i++) {
//     if(i === 2) continue
//     console.log(i)
// }

// Попереднє ДЗ

// let userName = prompt('What is you name?')

// while(userName == null || userName == '' || !isNaN(+userName)) {
//     alert('Ти шо, Вася?')
//     userName = prompt('Вася, я пиитаю, як тебе звати?')
// }

// console.log(userName)

// let userAge = +prompt('What is your age?')
// while(isNaN(userAge)) {
//     alert('Enter a valid number!')
//     userAge = +prompt('What is your age?')
// }

// if (userAge < 18) {
//     alert('Доступ заборонено, приходьте пізніше')
// } else if ( userAge >= 18 && userAge <= 22) {
//     let res = confirm('Are you shure?')
//     res ? `Wellcome ${userName}` : `${userName}, u are not allowed to enter`
// } else {
//     alert(`Wellcome, ${userName}!`)
// }

