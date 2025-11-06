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

const BUTTON = document.getElementById("add-book");
const BOOKCONTAINER = document.querySelector(".library-container");
const MODUAL = document.querySelector("dialog");
const SUBMITBUTTON = document.querySelector(".dialog-submit-button");

function Book(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;

    let id = crypto.randomUUID();
}

function addBookToLibrary() {
    let title = document.getElementById("book").textContent;
    let author = document.getElementById("author").textContent;
    let numberOfPages = document.getElementById("pages").textContent;
    let haveRead = document.querySelector("hasRead");

    console.log("Title: " + title + '\n' + 
        "Author: " + author + '\n' +
        "Pages: " + pages + '\n' +
        "haveRead: " + haveRead + '\n'
    );

    let book = new Book(title, author, numberOfPages, haveRead)
    MYLIBRARY.push(book);  
}


function displayBook() {
    let firstTime = true;
    if (firstTime) {
        for (let i = 0; i < MYLIBRARY.length; i++) {
            let book = document.createElement("div")
            book.className = "book";
            BOOKCONTAINER.appendChild(book);

            book.innerText = document.get
        }

        firstTime = false;
    }

    if (!firstTime) {
        
    }
}


addBookToLibrary("The Alchemist", "Paulo Coelho", 208, false);
addBookToLibrary("The Power of a Habit", "Charles Duhigg", 416, false);


BUTTON.addEventListener("click", () => {
    MODUAL.showModal();
});

SUBMITBUTTON.addEventListener("click", () => {
    addBookToLibrary();
    displayBook();
})