import PropTypes from "prop-types";
import Book from "./Book";

const Bookshelf = ({ title, books, onUpdateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} onUpdateBook={onUpdateBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default Bookshelf;
