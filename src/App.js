import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getAllBooks();
  }, []);

  const countBooks = (shelfs) => {
    return (
      shelfs.currentlyReading.length +
      shelfs.wantToRead.length +
      shelfs.read.length
    );
  };

  const handleOnUpdateBook = (book, shelf) => {
    const update = async () => {
      const res = await BooksAPI.update(book, shelf);
      book.shelf = shelf;
      if (shelf === "none") {
        setBooks(books.filter((b) => b.id !== book.id));
      } else if (countBooks(res) > books.length) {
        setBooks([...books, book]);
      } else {
        setBooks(books.map((b) => (b.id === book.id ? book : b)));
      }
    };

    update();
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListBooks books={books} onUpdateBook={handleOnUpdateBook} />
          }
        />
        <Route
          path="/search"
          element={
            <SearchBooks myBooks={books} onUpdateBook={handleOnUpdateBook} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
