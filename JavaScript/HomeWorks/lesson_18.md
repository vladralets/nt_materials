# Lesson 18
*AJAX, fetch. axios. JSON parse, stringify. Типы запросов (POST, PUT, DELETE). Заголовки запросов (Content-Type). CORS basics.*

## Main materials
[Простыми словами о «фронтенде» и «бэкенде»: что это такое и как они взаимодействуют](https://tproger.ru/translations/frontend-backend-interaction/)  
[Введение в JSON](https://medium.com/@stasonmars/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-json-c798d2723107)  
[Fetch](https://learn.javascript.ru/fetch)  
[Введение в REST API — RESTful веб-сервисы](https://habr.com/ru/articles/483202/)  
[Методы HTTP запроса](https://developer.mozilla.org/ru/docs/Web/HTTP/Methods)

## Secondary materials
[Использование Fetch](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch)  
[Промисы](https://frontender.info/promises/)  

## Video

[ Запросы на сервер. Fetch, XMLHttpRequest (XHR), Ajax](https://www.youtube.com/watch?v=eKCD9djJQKc)  

## HomeWorks
---
## HW 1

### Theoretical question
- Обьясните своими словами, что такое AJAX и чем он полезен при разработке на Javascript. 

### Task 

Получить список фильмов серии `Звездные войны`, и вывести на экран список персонажей для каждого из них.

#### Технические требования:
- Отправить AJAX запрос по адресу `https://ajax.test-danit.com/api/swapi/films` и получить список всех фильмов серии `Звездные войны`
- Для каждого фильма получить с сервера список персонажей, которые были показаны в данном фильме. Список персонажей можно получить из свойства `characters`.
- Как только с сервера будет получена информация о фильмах, сразу же вывести список всех фильмов на экран. Необходимо указать номер эпизода, название фильма, а также короткое содержание (поля `episode_id`, `title` и `opening_crawl`).
- Как только с сервера будет получена информация о персонажах какого-либо фильма, вывести эту информацию на экран под названием фильма.

#### Необязательное задание продвинутой сложности
 - Пока загружаются персонажи фильма, прокручивать под именем фильма анимацию загрузки. Анимацию можно использовать любую. Желательно найти вариант на чистом CSS без использования JavaScript.

