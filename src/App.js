import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getAllBooks();
  });

  const handleSearchBooks = () => {
    navigate("/");
  };

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<ListBooks books={books} />} />
        <Route
          path="/search"
          element={<SearchBooks onSearchBooks={handleSearchBooks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
