const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 310);
const fellowship = new Book('The Fellowship of the Ring', 'J.R.R Tolkien', 423);


let myLibrary = [theHobbit, fellowship];

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const bookContainer = document.querySelector('.books');

function addBookToLibrary() {

    // myLibrary.forEach((bookTitle) => {
    //     let book = document.createElement('p');
    //     book.textContent =
    //     bookContainer.appendChild(book);
    // });

}

addBookToLibrary();