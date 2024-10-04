import { useState } from "react";
import PropTypes from "prop-types";
import SearchBooksBar from "./SearchBooksBar";
import SearchBooksResults from "./SearchBooksResults";
import * as BooksAPI from "../BooksAPI";

const SearchBooks = ({ onUpdateBook }) => {
  const [books, setBooks] = useState([]);
  const [searchError, setSearchError] = useState(false);

  const handleSearch = (str) => {
    const search = async (str) => {
      const result = await BooksAPI.search(str);
      if (result && !result.error) {
        setBooks(result);
      }
      setSearchError(result.error);
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
};

export default SearchBooks;
