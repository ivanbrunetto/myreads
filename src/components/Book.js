import PropTypes from "prop-types";
import BookCover from "./BookCover";
import BookshelfChangerMenu from "./BookshelfChangerMenu";

const Book = ({ book, onUpdateBook }) => {
  return (
    <div className="book">
      <div className="book-top">
        <BookCover imageLinks={book.imageLinks} />
        <BookshelfChangerMenu
          onUpdateBook={(shelf) => onUpdateBook(book, shelf)}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default Book;
