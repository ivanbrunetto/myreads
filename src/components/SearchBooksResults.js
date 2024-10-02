import PropTypes from "prop-types";
import Book from "./Book";

const SearchBooksResults = ({ books }) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ol>
    </div>
  );
};

SearchBooksResults.propTypes = {
  books: PropTypes.array.isRequired,
};

export default SearchBooksResults;
