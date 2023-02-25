// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) { 
        this.title=title; 
        this.author=author; 
        this.isbn=isbn;
    }
}
// UI Class: Represents a UI task 
class UI {
    static displayBooks() {
        const StoredBooks = [ 
            {
                title: 'An Absolutely Remarkable Thing', 
                author: 'Hank Green', 
                isbn: '3434434'
        },
        {
            title: 'The Anthropocene Reviewed', 
            author: 'John Green', 
            isbn: '3455'
    }
];
const books = StoredBooks;
books.forEach((book) => UI.addBookToList(book));

}
static addBookToList(book) { 
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
 }
}
// Store Class: Handles Storage 

// Event: Display Books 
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a Book 
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
    
    // Get Form Values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;


    // Instantiate Book
    const book = new Book(title, author, isbn);
    console.log(book);
});
// Event: Remove a Book

// 