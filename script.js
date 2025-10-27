/* DELETE WHEN DONE WITH PROJECT
Features:
    Add a create book button
    Books which grow if author or book is long
    Seperate menu in which you input book info, which blurs the background
    Custom growing book background which grows or shrinks depending on how many books there are
    Add an edit book button, where you can edit info for already made books
    Add a delete button for the book
 */

const MYLIBRARY = [];

const BUTTON = document.getElementById("add-book")
const BOOKCONTAINER = document.querySelector(".container-2")
const MODUAL = document.querySelector("dialog")

BUTTON.addEventListener("click", () => {
    MODUAL.showModal();
});


function Book(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;

    id = crypto.randomUUID();
}

function addBookToLibrary(title, author, numberOfPages, haveRead) {
    newBook = new Book(title, author, numberOfPages, haveRead)
    MYLIBRARY.push(newBook);
}

for (let i = 0; i < MYLIBRARY.length(); i++) {
    let book = document.createElement("div")
    book.className = "book ";
    BOOKCONTAINER.appendChild(book);

}

addBookToLibrary("zahi", "ZAHI", 332, true);

function displayBook() {

}

function openBookInfoModal() {

}