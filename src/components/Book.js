import PropTypes from "prop-types";
import BookCover from "./BookCover";
import BookshelfChangerMenu from "./BookshelfChangerMenu";

const Book = ({ book }) => {
  return (
    <div className="book">
      <div className="book-top">
        <BookCover imageLinks={book.imageLinks} />
        <BookshelfChangerMenu />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
