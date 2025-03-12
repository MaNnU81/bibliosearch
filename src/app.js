import Dataservice from "./services/data-service.js";
const service = new Dataservice();

function orderByTitle() {
    const bookData = service.getBooksByTitle()
    render(bookData);
}

function orderByAuthor() {
    const bookData = service.getBooksByAuthor()
    render(bookData);
}

function orderByCategory() {
    const bookData = service.getBooksByCategory()
    render(bookData);
}

function orderByYop() {
    const bookData = service.getBooksByYop()
    render(bookData);
}

window.orderByTitle = orderByTitle;
window.orderByAuthor = orderByAuthor;
window.orderByCategory = orderByCategory;
window.orderByYop = orderByYop;


function render(bookData) {
    const container = document.getElementById('books-container')
    container.innerHTML = '';  //svuota nn ricordo cosa, per i refresh shuffle forse.

    for (let i = 0; i < bookData.length; i++) {
        const book = bookData[i];
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container');
        const titleContainer = createTextElement('h3', 'Titolo: ' + book.title);
        const authorContainer = createTextElement('span', 'Autore: ' + book.author);
        const categoryContainer = createTextElement('span', 'Genere: ' + book.category);
        const isbnContainer = createTextElement('span', 'isbn: ' + book.isbn);
        const yopContainer = createTextElement('span', 'Prima Edizione: ' + book.yop);

        bookContainer.appendChild(titleContainer);
        bookContainer.appendChild(authorContainer);
        bookContainer.appendChild(categoryContainer);
        bookContainer.appendChild(isbnContainer);
        bookContainer.appendChild(yopContainer);
        container.appendChild(bookContainer);

    }

}

function createTextElement(elementType, text) {
    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node)
    return element;
}