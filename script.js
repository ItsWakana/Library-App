const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 310, 'Unread');


let myLibrary = [theHobbit];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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

    createDOMElements();
    closeModal(modal);
}

function arrayDisplayLoop() {
    
    myLibrary.forEach(book => {
        createDOMElements();
    });
}

arrayDisplayLoop();

function createDOMElements() {
    //creating all the dom elements that our content will go in
    let fullBook = document.createElement('div');
    fullBook.classList = 'book';
    bookContainer.append(fullBook);

    let titleHead = document.createElement('h1');
    titleHead.classList = 'title';
    let authorHead = document.createElement('p');
    authorHead.classList = 'author';
    let pagesHead = document.createElement('p');
    pagesHead.classList = 'pages';
    let readHead = document.createElement('p');
    readHead.classList = 'read';
    let removeButton = document.createElement('button');
    removeButton.classList = 'remove-button';
    removeButton.textContent = 'Remove';
    fullBook.append(titleHead, authorHead,pagesHead,readHead,removeButton);

    let domElements = [titleHead,authorHead,pagesHead,readHead,removeButton];

    //removes the DOM element for a specific book
        

    myLibrary.forEach((book, index) => {
        //looping over the library objects and getting the index for dom elements
        
        setDataIndex(domElements, index);

        //looping over each object and putting the correct object text in
        titleHead.textContent = `${book.title}`;
        authorHead.textContent = `Author: ${book.author}`;
        pagesHead.textContent = `Pages: ${book.pages}`;
        readHead.textContent = `Book status: ${book.read}`;
    }); 

    removeButton.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        fullBook.classList.add('fadeout');
        fullBook.addEventListener('transitionend', () => {
            removeBookAndArrayElement(index, fullBook);
        });
    }); 

}

function removeBookAndArrayElement(arrayBook, domBook) {
    myLibrary.splice(arrayBook,1);
    domBook.remove();
}

function setDataIndex(elements, index) {
    elements.forEach(element => element.dataset.index = index);
}

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

document.addEventListener('DOMContentLoaded', () => {
    submit.addEventListener('click', addBookToLibrary);
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

overlay.addEventListener('click', () => {
    const modal = document.querySelector('.user-input');
    closeModal(modal);
})

