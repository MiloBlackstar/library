const bookSpace = document.querySelector('.content-space');

const addBookBtn = document.querySelector('.add-book');

const showForm = document.querySelector('.add-book-form');

const myForm = document.querySelector('.book-form');

const theLol = {
  title: 'theLol',
  author: 'xd',
  pages: 100,
  finished: 'no',
}

let myLibrary = [theLol];
/* ------------------------------------------- */

//function that create object book 
function Book(title, author, pages, finished) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.finished = finished;
}

//function that push object created by Book function to myLibrary array
function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

//Function that loops through myLibrary array and create place for every record on page
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

/* ------------------------------------------- */

addBookBtn.addEventListener('click', function e() {
  showForm.style = 'display: block;';
});

myForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(myForm);

  const title = formData.get('title');
  const author = formData.get('author');
  const pages = formData.get('pages');
  const finished = formData.get('finished');

  const newBook = new Book(title, author, pages, finished);

  addBookToLibrary(newBook);

  bookSpace.innerHTML = '';

  myLibraryLoop(myLibrary);
})

myLibraryLoop(myLibrary);