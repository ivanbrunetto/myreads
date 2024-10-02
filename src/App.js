import "./App.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ListBooks from "./components/ListBooks";
import * as mockData from "./BookListData";
import SearchBooks from "./components/SearchBooks";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const handleSearchBooks = () => {
    navigate("/");
  };

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<ListBooks books={mockData.data} />} />
        <Route
          path="/search"
          element={<SearchBooks onSearchBooks={handleSearchBooks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
