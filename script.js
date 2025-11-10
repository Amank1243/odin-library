const MYLIBRARY = [];
const BUTTON = document.getElementById("add-book");
const BOOKCONTAINER = document.querySelector(".library-container");
const MODUAL = document.querySelector("dialog");
const SUBMITBUTTON = document.querySelector(".dialog-submit-button");

function Book(title, author, numberOfPages, haveRead, id) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
    this.id = crypto.randomUUID();
}

let book1 = new Book("The Alchemist", "Paulo Coelho", 208, true);
MYLIBRARY.push(book1);

let book2 = new Book("The Power of a Habit", "Charles Duhigg", 416, true);
MYLIBRARY.push(book2);

function addBookToLibrary() {
    let title = document.getElementById("book").value;
    let author = document.getElementById("author").value;
    let numberOfPages = document.getElementById("pages").value;
    let haveRead = document.querySelector("select").value;

    let book = new Book(title, author, numberOfPages, haveRead);
    MYLIBRARY.push(book);
    
    displayBook();
}


function displayBook() {
   let book = document.querySelector(".book");

   for (let i = 0; i < MYLIBRARY.length; i++) {
    BOOKCONTAINER.appendChild(book);
    console.log(MYLIBRARY[i]);
   }
}

BUTTON.addEventListener("click", () => {
    MODUAL.showModal();
});

SUBMITBUTTON.addEventListener("click", () => {
    addBookToLibrary();
    MODUAL.close();
});