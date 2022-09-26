class Store {
  getBooks = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  addBook = (book) => {
    const books = store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  removeBook = (id) => {
    let books = store.getBooks();
    id = parseInt(id, 10);
    books = books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
export const store = new Store();