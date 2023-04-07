let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

let button = document.getElementById("button");
const container = document.querySelector('.container');

button.addEventListener("click", (e) => {
    e.preventDefault();
    container.textContent = "";
    createBook();
    let form = document.querySelector("form");
    form.reset();
});

function createBook() {
    let {title, author, pages, readStatus} = getFormData();
    const book = new Book(title, author, pages, readStatus);
    addBookToLibrary(book);
}

function getFormData() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let readStatus = document.getElementById("readStatus").checked;

    return {title, author, pages, readStatus};
}

function displayBook(title, author, pages, readStatus) {
    const content = document.createElement('div');
    content.classList.add('content');
    let p1 = document.createElement('p');
    p1.textContent = title;
    let p2 = document.createElement('p');
    p2.textContent = author;
    let p3 = document.createElement('p');
    p3.textContent = pages;
    let p4 = document.createElement('p');
    p4.textContent = readStatus;

    content.append(p1, p2, p3, p4);
    container.appendChild(content);
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    myLibrary.forEach((book) =>  displayBook(book.title, book.author, book.pages, book.read));
    console.log(myLibrary);
}