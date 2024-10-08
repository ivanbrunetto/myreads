import { useState } from "react";
import PropTypes from "prop-types";
import SearchBooksBar from "./SearchBooksBar";
import SearchBooksResults from "./SearchBooksResults";
import * as BooksAPI from "../BooksAPI";

const SearchBooks = ({ myBooks, onUpdateBook }) => {
  const [books, setBooks] = useState([]);
  const [searchError, setSearchError] = useState(false);

  const handleSearch = (str) => {
    const search = async (str) => {
      if (!str) return;

      console.log("BooksAPI.search");
      const result = await BooksAPI.search(str);
      if (result && !result.error) {
        const books = result.map((book) => {
          const shelfBook = myBooks.find((b) => b.id === book.id);
          return shelfBook ? shelfBook : book;
        });
        setBooks(books);
      }

      if (result) setSearchError(result.error);
    };

    search(str);
  };

  return (
    <>
      <SearchBooksBar onSearchBooks={handleSearch} />
      {searchError ? (
        <div className="search-books-results">No results found</div>
      ) : (
        <SearchBooksResults books={books} onUpdateBook={onUpdateBook} />
      )}
    </>
  );
};

SearchBooks.proTypes = {
  onUpdateBook: PropTypes.func.isRequired,
  myBooks: PropTypes.object.isRequired,
};

export default SearchBooks;
