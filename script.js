const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 310);


let myLibrary = [theHobbit];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.createBook = function() {
    console.log(this);
}

const openModalButtons = document.querySelectorAll('[data-modal-target]');

const closeModalButtons = document.querySelectorAll('[data-close-button]');

const overlay = document.getElementById('overlay');

const bookContainer = document.querySelector('.books');

const inputForm = document.querySelector('.user-input');

const form = inputForm.querySelectorAll('.user-form');

const submit = form[0].querySelector('button[type="submit"]');

const bookTitle = document.querySelector('#title');

function addBookToLibrary(newBook) {

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

        title.textContent = `${newBook.title}`;
        author.textContent = `By ${newBook.author}`;
        pages.textContent = `${newBook.pages} Pages`;
        read.textContent = `${newBook.read}`;

}

function getUserData(e) {
    inputForm.classList.remove('active');

    e.preventDefault();

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('input[name=read]:checked').value;

    if (read == 'yes') {
        read = 'You have read this book'
    } else {
        read = 'You have not read this book yet'
    }


    const newBook = new Book(title,author,pages,read);

    myLibrary.push(newBook);
    console.log(myLibrary)

    addBookToLibrary(newBook);

    closeModal(modal);
}

document.addEventListener('DOMContentLoaded', () => {
    submit.addEventListener('click', getUserData);
}, false);

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector('.user-input')
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}