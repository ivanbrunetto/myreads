import { Link } from "react-router-dom";

const SearchBooksBar = ({ onSearchBooks }) => {
  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title, author, or ISBN" />
      </div>
    </div>
  );
};

export default SearchBooksBar;
