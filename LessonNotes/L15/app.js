// LocalStorage

// const someNum = 100;
//
// localStorage.setItem('number', someNum.toString())
// console.log(localStorage.getItem('number'));
//
// localStorage.removeItem('number')
//
// localStorage.setItem('number1', String(1))
// localStorage.setItem('number2', '2')
//
// localStorage.clear()
//
// const city = {
//     name: 'Belgorod',
//     country: 'Ukraine',
// }

// localStorage.setItem('city', city)
// console.log(localStorage.getItem('city'));

// localStorage.setItem('city', JSON.stringify(city))
//
// const raw = localStorage.getItem('city');
//
// const cityFromLS = JSON.parse(raw)
// console.log(cityFromLS);
//
// cityFromLS.name = 'Kursk'
// localStorage.setItem('city', JSON.stringify(cityFromLS))

const list = document.querySelector('.todo');
document.addEventListener('DOMContentLoaded', () => {
    const save = localStorage.getItem('todo');
    const parse = JSON.parse(save);
    const markup = parse.map((item) => {
        return <li>${item}</li>
    })
    list.insertAdjacentHTML("afterbegin", `${markup.join(' ')}`)
})


const input = document.getElementById('input'),
    button = document.getElementById('button');
button.addEventListener('click', () => {
    const userInfo = input.value;
    if(userInfo == ''){
        return
    }
    if(localStorage.getItem('todo')){
        const arr = localStorage.getItem('todo');
        const newArr = JSON.parse(arr);
        newArr.unshift(userInfo);
        localStorage.setItem('todo', JSON.stringify(newArr));
    } else {
        const newArr = [];
        newArr.unshift(userInfo);
        localStorage.setItem('todo', JSON.stringify(newArr));
    }
    const li  = document.createElement('li');
    li.textContent = userInfo;
    list.append(li);
    input.value = ''
})

const btn = document.getElementById('clear');
btn.addEventListener('click', () => {
    localStorage.clear()
    list.innerHTML = ''
})