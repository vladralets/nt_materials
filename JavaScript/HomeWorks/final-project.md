<h1>Задание для финального проекта</h1>

<h2>Задание</h2>
<p>Сверстать <a href="https://www.figma.com/file/S4DQxhRyLRsZJcMpvRdjiG/Skillz?node-id=0%3A1">макет</a>. Подключить динамические элементы.</p>

<h2>Динамические элементы на странице</h2>
<ul>
    <li>
        <code>Кнопка Learn more в хедере</code> - При нажатии должно показываться модальное окно с двумя <code>input</code> и кнопкой,
        где пользователь должен ввести имя и email. При сабмите формы данные с формы вывести в консоль.
    </li>
    <li>
        <code>Список курсов, кнопка VIEW ALL COURSES</code> - При загрузке страницы динамически должно выводить первые 3 элемента
        с объекта <code>courses</code>. При нажатии на кнопку пользователю должны выпасть остальные курсы.
    </li>
    <li>
        <code>Текстовый блок, кнопка CONTACT US</code> - При нажатии на кнопку должна всплывать то самое модальное окно, что и в первом элементе.
    </li>
    <li>
        <code>Список воркшопов, кнопка VIEW ALL WORKSHOPS</code> - При загрузке страницы динамически должно выводить первые 3 элемента
        с объекта <code>Workshops</code>. При нажатии на кнопку пользователю должны выпасть остальные курсы.
    </li>
    <li>
        <code>Отзывы</code> - Отзывы должны создаваться динамично. Количество звезд должно быть равно рейтингу в отзыве.
        При нажатии на точки снизу должен меняться отзыв. Так же отзывы должны меняться самостоятельно по происхождению времени.
    </li>
    <li>
        <code>Блок с Email</code> - При сабмите формы информация с инпута должна выводится в консоль.
    </li>
</ul>

<h2>Дополнительные требования</h2>
<ul>
    <li>
        При разработке нужно использовать git.
    </li>
    <li>
        При проверке будет также учитываться чистота написания кода.
    </li>
</ul>


<i>Courses</i></br>
<code>
[
    {
        img: 'http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/07/Free-Funny-Images-Wallpaper-300x249.jpg',
        title: 'How to Increase Your Engagement on Instagram',
        author: 'Katie Murphy'
        price: 59.99
    },
    {
        img: 'http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/07/Free-Funny-Images-Wallpaper-300x249.jpg',
        title: 'Business 101: Setting up Your Taxes',
        author: 'Bessie Cooper'
        price: 49.99
    },
    {
        img: 'http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/07/Free-Funny-Images-Wallpaper-300x249.jpg',
        title: 'iPhone Photography: Tips, Tricks and Best Practices',
        author: 'Dianne Russell'
        price: 58.50
    },
    {
        img: 'http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/07/Free-Funny-Images-Wallpaper-300x249.jpg',
        title: 'JS in backend',
        author: 'Gogi Doe'
        price: 105.50
    },
]
</code>

<i>Workshops</i></br>
<code>
[
    {
        title: 'Photography Basics',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
    },
    {
        title: 'Business 101',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
    },
    {
        title: 'Social Networking Camp.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',   
    },
    {
        title: 'Pickup in small city',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
    },
]
</code>

<i>Reviews</i></br>
<code>
[
    {
        text: 'Kate’s courses are a game changer. She’s thorough, organized, and explains things in a no-nonsense way that makes it easy for anyone—beginners to experts—to learn something from her courses and take their game to the next level.',
        author: 'James Brown,',
        rating: 5
    },
    {
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.',
        author: 'Elton John',
        rating: 4
    },
]
</code>