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

    function createDOMElements() {
        //creating all the dom elements that our content will go in
        let fullBook = document.createElement('div');
        fullBook.classList = 'book';
        bookContainer.append(fullBook);
  
        let leftInfo = document.createElement('div');
        leftInfo.classList = 'left';
        let rightInfo = document.createElement('div');
        rightInfo.classList = 'right';
        fullBook.append(leftInfo, rightInfo);

        let titleHead = document.createElement('h1');
        titleHead.classList = 'title';
        let authorHead = document.createElement('p');
        authorHead.classList = 'author';
        leftInfo.append(titleHead, authorHead);

        let pagesHead = document.createElement('p');
        pagesHead.classList = 'pages';
        let readHead = document.createElement('p');
        readHead.classList = 'read';
        let removeButton = document.createElement('button');
        removeButton.classList = 'removeButton';
        rightInfo.append(pagesHead, readHead, removeButton);

        myLibrary.forEach((book, index) => {
            //looping over the library objects and getting the index for dom elements
            titleHead.dataset.index = index;
            authorHead.dataset.index = index;
            pagesHead.dataset.index = index;
            readHead.dataset.index = index;
            removeButton.dataset.index = index;

            //looping over each object and putting the correct object text in
            titleHead.textContent = `${book.title}`;
            authorHead.textContent = `By ${book.author}`;
            pagesHead.textContent = `${book.pages} Pages`;
            readHead.textContent = `Book status: ${book.read}`;
            removeButton.textContent = 'Remove';

            removeButton.addEventListener('click', () => {
              fullBook.remove();
              
              
              console.log(myLibrary);
              
            });
          });
        
        
        }

      createDOMElements();
      closeModal(modal);
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