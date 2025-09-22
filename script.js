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

BUTTON.addEventListener("click", () => {
    console.log("Button was clicked");
});


function Book(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;

    id = crypto.randomUUID();
}

function addBookToLibrary(title, author, numberOfPages, haveRead) {
    newBook = new Book(d)
    MYLIBRARY.push(newBook);
}

add 

function openBookInfoModal() {

}