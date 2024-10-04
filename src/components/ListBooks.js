import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";
import OpenSearch from "./OpenSearch";

const ListBooks = ({ books, onUpdateBook }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Bookshelf
        title={"Currently Reading"}
        books={books.filter((book) => book.shelf === "currentlyReading")}
        onUpdateBook={onUpdateBook}
      />
      <Bookshelf
        title={"Want to Read"}
        books={books.filter((book) => book.shelf === "wantToRead")}
        onUpdateBook={onUpdateBook}
      />
      <Bookshelf
        title={"Read"}
        books={books.filter((book) => book.shelf === "read")}
        onUpdateBook={onUpdateBook}
      />
      <OpenSearch />
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default ListBooks;
