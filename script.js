const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 310);


let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.number = 0;
}

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const bookContainer = document.querySelector('.books');
const inputForm = document.querySelector('.user-input');
const form = inputForm.querySelectorAll('.user-form');
const submit = form[0].querySelector('button[type="submit"]');
const bookTitle = document.querySelector('#title');

function addBookToLibrary(e) {
    e.preventDefault();
    //getting the data the user enters into the form
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('input[name=read]:checked').value;

    read == 'yes' ? read = 'Read' : read = 'Unread';
    //using our constructor to create a new object and then pushing into array
    const newBook = new Book(title,author,pages,read);

    myLibrary.push(newBook);
    
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