import PropTypes from "prop-types";
import Book from "./Book";

const SearchBooksResults = ({ books, onUpdateBook }) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} onUpdateBook={onUpdateBook} />
          </li>
        ))}
      </ol>
    </div>
  );
};

SearchBooksResults.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default SearchBooksResults;
