const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 310);
const fellowship = new Book('The Fellowship of the Ring', 'J.R.R Tolkien', 423);


let myLibrary = [theHobbit];

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.createBook = function() {
    console.log(this);
}

const button = document.querySelector('.addBook');

const bookContainer = document.querySelector('.books');

const inputForm = document.querySelector('.user-input');

const form = inputForm.querySelectorAll('.user-form');

const submit = form[0].querySelector('button[type="submit"]');

const bookTitle = document.querySelector('#title');

function addBookToLibrary() {

    myLibrary.forEach((elem) => {
        let book = document.createElement('div');
        book.classList = 'book';
        bookContainer.appendChild(book);

        let leftInfo = document.createElement('div');
        leftInfo.classList = 'left';
        let rightInfo = document.createElement('div');
        rightInfo.classList = 'right';
        book.appendChild(leftInfo);
        book.appendChild(rightInfo);

        let title = document.createElement('h1');
        title.classList = 'title';
        let author = document.createElement('p');
        author.classList = 'author';
        leftInfo.appendChild(title);
        leftInfo.appendChild(author);

        let pages = document.createElement('p');
        pages.classList = 'pages';
        let read = document.createElement('p');
        read.classList = 'read';
        rightInfo.appendChild(pages);
        rightInfo.appendChild(read);

        title.textContent = `${elem.title}`;
        author.textContent = `By ${elem.author}`;
        pages.textContent = `${elem.pages} Pages`;


    });
}

// button.addEventListener('click', () => {
//     theHobbit.createBook();
// });

button.addEventListener('click', () => {
    inputForm.classList.add('user-input-click');
});

function getUserData(e) {
    inputForm.classList.remove('user-input-click');
    myLibrary = [];

    e.preventDefault();

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;

    const newBook = new Book(title,author,pages);

    myLibrary.push(newBook);

    addBookToLibrary();
}

document.addEventListener('DOMContentLoaded', () => {
    submit.addEventListener('click', getUserData);
}, false);