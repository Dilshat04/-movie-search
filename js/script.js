/* Задания на урок:

// обязательно: 

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

// необязательно:
 
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
}

const advBox = document.querySelectorAll('.promo__adv img')
console.dir(advBox)

//3
function createArticle(title, content) {
    const articles = document.querySelector('.articles')
    const article = document.createElement('div')
    const tagTitle = document.createElement('h2')
    const tagContent = document.createElement('p')
    tagTitle.textContent = title 
    tagContent.textContent = content
    article.append(tagTitle)
    article.append(tagContent)
    articles.append(article)



    console.log(article);
}

createArticle('Заголовок', 'Описание')