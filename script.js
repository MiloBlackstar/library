const bookSpace = document.querySelector('.content-space');


const theHobbit = {
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  pages: 292,
  read: 'not yet',
}

const xdBook = {
  title: 'Sarumanim',
  author: 'Martin xdD',
  pages: 999,
  read: 'yes uwu',
}
let myLibrary = [theHobbit, xdBook];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

function myLibraryLoop(arrayOfBooks) {
  for (let i = 0; i < arrayOfBooks.length; i++) {
    const book = document.createElement('div');
    book.setAttribute('class', 'book');
    for (let property in arrayOfBooks[i]) {
      book.innerHTML += `<p class=${property}><span class=${property}>${property}:</span> ${arrayOfBooks[i][property]}`;
    }
    bookSpace.appendChild(book);
  }
}

myLibraryLoop(myLibrary);