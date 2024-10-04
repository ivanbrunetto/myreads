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

  const handleOnUpdateBook = (book, shelf) => {
    const update = async () => {
      const res = await BooksAPI.update(book, shelf);
      console.log(res);
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
          element={<SearchBooks onUpdateBook={handleOnUpdateBook} />}
        />
      </Routes>
    </div>
  );
}

export default App;
