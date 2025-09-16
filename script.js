const MYLIBRARY = [];


function Book(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;

    id = crypto.randomUUID();
}

function addBookToLibrary(book) {
    newBook = new Book(book.title, book.author, book.numberOfPages, book.haveRead)
    MYLIBRARY.push(newBook);
}