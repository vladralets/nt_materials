// Браузерні події

// click
// mousemove
// contextmenu - права кнопка мишки
// mouseover / mouseout
// mousedown / mouseup
// dblclick

// const btn = document.getElementById('button');
// const elem = document.getElementsByClassName('gogi')[0];
// const text = document.getElementById('text')


// btn.onclick = () => {
//     console.log('Hello Gogi Doe!')
// }
//
// btn.onclick = () => {
//     alert('Hello World!')
// }
// function gogi() {
//     console.log('123')
//     // btn.removeEventListener('click', gogi)
// }

// btn.addEventListener('click', () => {
//     console.log('click')
// })

// elem.addEventListener('mousemove', () => {
//     console.log('move')
// })

// elem.addEventListener('contextmenu', () => {
//     console.log('Right button');
// })
//
// elem.addEventListener('mousedown', () => {
//     console.log('mouse down')
// })
//
// elem.addEventListener('mouseup', () => {
//     console.log('mouse up')
// })
//
// // mouseover / mouseout
//
// elem.addEventListener('mouseover', () => {
//     console.log('mouse over')
// })
//
// elem.addEventListener('mouseout', () => {
//     console.log('mouse out')
// })

// elem.addEventListener('dblclick', () => {
//     console.log('double click');
// })

// function getRandomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// console.log(getRandomColor());

// btn.addEventListener('mousedown', (e) => {
//     console.log(e.button);
// })

// text.onmousedown = () => {
//     return false
// }
//
// document.body.oncontextmenu = () => {
//     return false
// }

// text.oncopy = () => {
//     alert('forbidden');
//     return false;
// }

// Координати

// elem.addEventListener('click', (event) => {
//     console.log(event);
//     if (event.metaKey) {
//         console.log('CMD key pressed')
//     }
//     // console.log(e.clientX, e.clientY);
//     // console.log(e.pageX, e.pageY);
// })


// для форми - submit
// для input - focus
// DOMContentLoaded

document.addEventListener('DOMContentLoaded', () => {
    alert('DOM is Ready')
})
