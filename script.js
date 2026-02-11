const MYLIBRARY = [];
const BUTTON = document.getElementById("add-book");
const BOOKCONTAINER = document.querySelector(".library-container");
const BOOK = document.querySelector(".book");
const MODAL = document.querySelector("dialog");
const SUBMITBUTTON = document.querySelector(".dialog-submit-button");

function Book(title, author, numberOfPages, haveRead, id) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
    this.id = crypto.randomUUID();

}

Book.prototype.toggleRead = function() {
        this.haveRead = this.haveRead == "true" ? this.haveRead = "false" : this.haveRead = "true"
    }

let book1 = new Book("The Alchemist", "Paulo Coelho", "208", "true");
MYLIBRARY.push(book1);
displayBook(book1);

let book2 = new Book("The Power of a Habit", "Charles Duhigg", "416", "true");
MYLIBRARY.push(book2);
displayBook(book2);

function displayBook(book) {
    let newBook = BOOK.cloneNode(true);
    
    newBook.querySelector(".row .getBook").textContent = book.title;
    newBook.querySelector(".row .getAuthor").textContent = book.author;
    newBook.querySelector(".row .getPages").textContent = book.numberOfPages;
    newBook.querySelector(".row .getHasRead").textContent = book.haveRead;
    
    newBook.style.display = "";
    newBook.dataset.id = book.id;
    BOOKCONTAINER.appendChild(newBook);

     // change read status button

    // let readButton = document.createElement("button");
    // readButton.textContent = "Read?";
    // readButton.class = "changeRead";
    // readButton.style.padding = "0.5em 1em"

    // newBook.appendChild(readButton);
    let readButton = newBook.querySelector(".changeRead");

    readButton.addEventListener("click", () => {
        const bookElement = readButton.closest(".book");
        const bookId =  bookElement.dataset.id;

        const bookObj = MYLIBRARY.find(book => book.id == bookId)

        if (!bookObj) return "Something went wrong when trying to find the book";

        bookObj.toggleRead();

        bookElement.querySelector(".getHasRead").textContent = bookObj.haveRead;

        
    })

    // delete button

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    newBook.appendChild(deleteButton);
    
    deleteButton.addEventListener("click", () => {
       console.log(deleteButton.parentElement.dataset.id);

    for (let i = 0; i < MYLIBRARY.length; i++) {
        

        console.log(deleteButton.parentElement.dataset.id + " == " + MYLIBRARY[i].id);

        if (deleteButton.parentElement.dataset.id == MYLIBRARY[i].id) {
            deleteButton.parentElement.remove();
            MYLIBRARY.splice(i, 1);

        }
        }
    });
}


function addBookToLibrary() {
    let title = document.getElementById("book").value;
    let author = document.getElementById("author").value;
    let numberOfPages = document.getElementById("pages").value;
    let haveRead = document.querySelector("select").value;

    let book = new Book(title, author, numberOfPages, haveRead);
    MYLIBRARY.push(book);
    
    displayBook(book);
}


BUTTON.addEventListener("click", () => {
    MODAL.showModal();
});

SUBMITBUTTON.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    MODAL.close();
});