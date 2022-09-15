// DOMContentLoaded
// load
// beforeunload
// unload

// console.log('Other');
//
// window.addEventListener('load', () => {
//     console.log('Finished')
// })
//
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM Loaded')
// });

// window.addEventListener('beforeunload', () => {
//     alert('Ви залишаєте сторінку')
// })

// window.onbeforeunload = () => {
//     return false
// }
//
// window.onunload = () => {
//     // navigator.sendBeacon()
// }

// Робота з клавіатурою

// keydown - кнопка нажата, але не відпущена
// keyup - кнопка відпущена

// keypress - застарілий метод

let input = document.getElementById('input');

input.onkeydown = (event) => {
    console.log(event)



    // if (event.key == 'CapsLock') {
    //     let inputCh = document.getElementById('ch')
    //     inputCh.checked = !inputCh.checked;
    // }
}

// input.onkeyup = (event) => {
//     console.log('up');
//     console.log(event)
// }

// input.onkeypress = (event) => {
//     console.log(event)
// }

// document.addEventListener('keydown', (e) => {
//     if (e.code == 'KeyG' && (e.ctrlKey || e.metaKey)) {
//         // document.body.style.backgroundColor == 'red' ?
//         //     document.body.style.backgroundColor = 'white' :
//         //     document.body.style.backgroundColor = 'red'
//         window.scrollTo({
//             top: 0,
//             left: 0,
//             behavior: 'smooth',
//         })
//     }
// })

// scroll

// document.body.style.height = '10000px'

// window.addEventListener('scroll', () => {
//     console.log(pageYOffset);
// })

let text = '';
let h2 = document.createElement('h2')

document.body.addEventListener('keydown', (e) => {
    if (e.ctrlKey) {
        if (e.key != 'Control') {
            text += e.key
            h2.textContent = text
            document.body.append(h2)
        }
    }
})











