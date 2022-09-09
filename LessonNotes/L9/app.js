
// Створення елементів

// let div1 = document.createElement('div')
//
// let dummyText = document.createElement('p')

// Вставка елементів на сторінку

// dummyText.innerText = 'Hello world!'
// document.body.prepend(dummyText)

// .append -> Добавляє елемент в кінець ноди
// .prepend -> На початок ноди
// .before -> Вставляє до ноди
// .after -> Вставляє після ноди

// let container = document.getElementsByClassName('list-item')[0];
// console.log(container);
// container.innerHTML = '<p class="color">Gogies Brother Doe</p>'
// container.textContent = '<p>Gogies Brother Doe</p>'


// let input = document.querySelector('input');
// input.value = '<p>asdasd</p>';
// let inputValue = input.value;
//
//
// let button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', () => {
//     container.innerHTML = inputValue
//     console.log(1);
// })

// let list = document.querySelector('.list')
// let liItem = document.createElement('li')
// liItem.textContent = 'Gora'
// console.log(li);



// list.insertAdjacentHTML('afterbegin', '<li>Gora</li>')
// beforebegin
// beforeend
// afterend

// list.insertAdjacentHTML('afterend', '<p>Bla bla</p>')

// Видалення
// list.remove()
//
// let listClone = list.cloneNode(true)
// document.body.prepend(listClone)
// console.log(listClone);




// Робота зі стилями і класами

// classList & className

let text = document.getElementsByTagName('p')[0];
// text.className = 'color';
// console.log(text.className);
// text.className = 'anotherColor';

// text.classList.add('anotherColor')
// text.classList.remove('color')
// text.classList.toggle('color')
// console.log(text.classList.contains('color'));
// console.log(text.classList);

// for (let className of text.classList) {
//     console.log(className);
// }

// style
//
// text.style.fontFamily = 'sans-serif'
// // text.style.backgroundColor = "unset"
//
// text.style.cssText = `color: 'green';
// padding: 50px;
// border: 10px solid black
// `
//
// text.style.padding = '5px'


// Атрибути
let link = document.querySelector('a')
let input = document.querySelector('input')

link.href = 'https://www.google.com'
console.log(link.href);

input.value = 'Gogi'

input.setAttribute('gogi', 'true')
console.log(input.getAttribute('gogi'));

let btns = document.querySelectorAll('button')

for ( let btn of btns) {
    let btnAtr = btn.getAttribute('data')
    btn.addEventListener('click', () => {
        switch (btnAtr) {
            case 'gogi': {
                console.log(1)
                break;
            }
            case 'doe': {
                console.log(2)
                break;
            }
        }
    })
}






