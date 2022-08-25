// Строки

// const bigText = `Hello!
// My name is Vlad
// I am a programmer!`

// const someFunc = () => 1 + 1
//
// const functionInStroke = `${someFunc()}`
// console.log(functionInStroke);
//
// const str = 'abc'
// const num = 123
//
// console.log(str + num)

// Спеціальні символи

// const bigText = 'Hello \nUkrainian World,\n\tFuck off russian world';
//
// console.log(bigText);
//
// const someString = 'Gogi Doe is \'Georgian\''
//
// console.log(someString);

// const message = `Russian warship, \u{1F595}`
//
// console.log(message);

// Отримання символів зі строки



// console.log(text[0])
// console.log(text[text.length - 1])

// for (const letter of text) {
//     console.log(letter);
// }

// Зміна регістра

// let text = 'Gogi'
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());

// console.log(('b' + 'a' + +'a' + 'a').toLowerCase()) // => banana

// includes, startWith, endsWith

// let text = 'Gogi'
// console.log(text.includes('G', 1))
//
// console.log(text.startsWith('G'))
// console.log(text[0] === 'G')
//
// console.log(text.endsWith('!'))
//
// console.log(text.slice(1, 3));

// console.log('A' < 'B')
// console.log('a' > 'A')

// Числа

// let num = 42
// let smallNum = 42.2
//
// let million = 1e6
// console.log(million);
//
// let small = 1e-6
// console.log(small);

// console.log(0xff)

// let num = 255
//
// console.log(num.toString(16))
// console.log(num.toString(8))
// console.log(num.toString(2))

// console.log(0.1 + 0.2)

// Округлення чисел

// let num = -11.4

// console.log(Math.floor(num))

// let num2 = -12.4

// console.log(Math.ceil(num2))

// let num3 = 14.6
//
// console.log(Math.round(num3))
//
// let num4 = 15.123456
//
// console.log(Number(num4.toFixed(1)))

// Перевірки
//
// let str = 'abc'
// console.log(!isNaN(str))

// let fin = 10 / 0
//
// console.log(fin);
// console.log(!isFinite(fin));
//
// let pixels = '150.5px'
//
// console.log(parseInt(pixels))
// console.log(parseFloat(pixels))

// Math.random

// console.log(Math.random())

// Math.max

// console.log(Math.max(1, 4, 122, 5, 43))
// console.log(Math.min(1, 4, 122, 5, 43))
//
// let num22 = -42
//
// console.log(Math.abs(num22))

// Math.pow()

// console.log(Math.pow(5, 3))






// Date

// const d1 = new Date()
// console.log(d1)
//
// const d2 = new Date(1661450800000)
// console.log(d2);
//
// const d3 = new Date('2022 August 25 19:44:21')
// console.log(d3);
//
// const d4 = new Date('Thu Aug 25 2022 19:44:21 GMT+0200 ')
// console.log(d4);
// console.log(d4.toUTCString());
// console.log(d4.toDateString());
// console.log(d4.toISOString());
//
// let d5 = new Date()

// console.log(d5.getFullYear());
// console.log(d5.getMonth());
// console.log(d5.getDate());
// console.log(d5.getHours());
// console.log(d5.getMinutes());
// console.log(d5.getSeconds());
// console.log(d5.getTime());
// console.log(Date.now())
//
// console.log(new Date(1661451212963))
//
// console.log(typeof d5)


// console.log(new Date(461354794000))

// function gogi() {
//     console.log(1)
//     setInterval(() => console.log(2),100)
//     // setTimeout(() => console.log(2),30)
//     console.log(3)
// }
//
// gogi()